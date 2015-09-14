//require('babel/register');
jest.dontMock('../../../app/components/CartItem.jsx');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var CartItem = require('../../../app/components/CartItem.jsx');

describe('Cart Item', function() {
  describe("The Name Display",()=>{

    it("should display the name of the item",()=>{


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

      // create dummy cart
      var cartItem = TestUtils.renderIntoDocument(
        <CartItem item={item} localePrefs={localePrefs} />
      );

      var price = TestUtils.findRenderedDOMComponentWithClass(
        cartItem , 'cartItemPriceDisplay');
      expect(price.getDOMNode().textContent).toEqual(item.priceUSD.toString());

      var symbol = TestUtils.findRenderedDOMComponentWithClass(
        cartItem , 'currencySymbolDisplay');
      expect(symbol.getDOMNode().textContent).toEqual("$");


      })
    })
  })
