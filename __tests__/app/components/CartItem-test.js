//require('babel/register');
jest.dontMock('../../../app/components/CartItem.js');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;




Error.stackTraceLimit = 3;

describe('Cart Item', function() {
  beforeEach(()=>{

  })
  describe("The Name Display",()=>{

    it("should display the name of the item",()=>{
      var CartItem = require('../../../app/components/CartItem.js');


      // Define a dummy item
      var item = {
        id:"001",
        name:"Instant Noodles",
        description:"Amazing!",
        priceUSD:2.95
      };

      // Render a list item in the document
      var cartItem = TestUtils.renderIntoDocument(
        <CartItem item={item} />
      );

      // Verify name displays correctly
      var label = TestUtils.findRenderedDOMComponentWithTag(
        cartItem , 'h4');
      expect(label.getDOMNode().textContent).toEqual(item.name);
      })
  });

  describe("The price display",()=>{
    it ("should display the regular USD price and dollar sign if the user's country is USA",()=>{
      // Define a dummy item
      //jest.dontMock('../../../app/helpers/conversionHelper.js');
      let conversionMock = require('../../../app/helpers/conversionHelper.js');
      conversionMock.convertFromUSD = (x,y)=>(y * 1).toFixed(2);
      conversionMock.getSymbolForCountry = c => "$";
      var CartItem = require('../../../app/components/CartItem.js');
      var item = {
        id:"003",
        name:"Tsuchinoko",
        description:"While quantities last.",
        priceUSD:1095.50
      };

      // define dummy locale prefs with USA ascountry
      var localePrefs = {
        country:"USA",
      }

      //let conversionMock = {};

      //require('../../../app/helpers/conversionHelper.js');
      //let conversionMock = jest.genMockFromModule('../../../app/helpers/conversionHelper.js');

      //jest.setMock('../../../app/helpers/conversionHelper.js',conversionMock);
      //jest.dontMock('../../../app/helpers/conversionHelper.js');
      //jest.dontMock('./../helpers/conversionHelper.js');

      // create dummy cart
      var cartItem = TestUtils.renderIntoDocument(
        <CartItem item={item} locale={localePrefs} />
      );

      var price = TestUtils.findRenderedDOMComponentWithClass(
        cartItem , 'cartItemPriceDisplay');
      expect(price.getDOMNode().textContent).toEqual(item.priceUSD.toFixed(2));

      var symbol = TestUtils.findRenderedDOMComponentWithClass(
        cartItem , 'currencySymbolDisplay');
      expect(symbol.getDOMNode().textContent).toEqual("$");


    })
//
//    it ("should display the converted GBP price and pound sign if the user's country is GB",()=>{
//      // Define a dummy item
//      var item = {
//        id:"005",
//        name:"Miniature Tower of London",
//        description:"It's a small Tower of London.",
//        priceUSD:67.50
//      };
//
//      // define dummy locale prefs with USA ascountry
//      var localePrefs = {
//        country:"GB",
//      }
//
//      // define dummy conversion rates
//      var rates = {
//        USDtoGBP:0.65
//      }
//
//      // create dummy cart
//      var cartItem = TestUtils.renderIntoDocument(
//        <CartItem item={item} localePrefs={localePrefs} rates={rates}/>
//      );
//
//      var expectedPrice = item.priceUSD * rates.USDtoGBP;
//
//      var price = TestUtils.findRenderedDOMComponentWithClass(
//        cartItem , 'cartItemPriceDisplay');
//      expect(price.getDOMNode().textContent).toEqual(expectedPrice.toString());
//
//      var symbol = TestUtils.findRenderedDOMComponentWithClass(
//        cartItem , 'currencySymbolDisplay');
//      expect(symbol.getDOMNode().textContent).toEqual("£");
//
//
//    })
  })
})
