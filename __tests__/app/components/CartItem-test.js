"use strict";

jest.dontMock('../../../app/components/CartItem.js');

var React = require('react');
let TestUtils = require('react-addons-test-utils');

describe('Cart Item', function() {

  //
  // let item = {
	// 	id:"003",
	// 	name:"Instant Noodles",
	// 	description:"Tasty!",
	// 	priceUSD:2.50
	// };
  //
  // describe("The Name Display",()=>{
  //
  //   it("should display the name of the item",()=>{
  //
  //     var CartItem = require('../../../app/components/CartItem.js');
  //
  //     // Render a list item in the document
  //     var cartItem = TestUtils.renderIntoDocument(
  //       <CartItem item={item} />
  //     );
  //
  //     // Verify name displays correctly
  //     var label = TestUtils.findRenderedDOMComponentWithTag(
  //       cartItem , 'h4');
  //     expect(label.textContent).toEqual(item.name);
  //     })
  // });
  //
  // describe("The price display",()=>{
  //
  //   it ("should display the regular USD price and dollar sign if the user's country is USA",()=>{
  //
  //     let conversionMock = require('../../../app/helpers/conversionHelper.js');
  //     conversionMock.convertFromUSD = (x,y)=>(y * 1);
  //     conversionMock.getSymbolForCountry = c => "$";
	// 		conversionMock.toCurrencyString = x => x.toFixed(2);
  //
  //     let CartItem = require('../../../app/components/CartItem.js');
  //
  //     var cartItem = TestUtils.renderIntoDocument(
  //       <CartItem item={item}/>
  //     );
  //
  //     var price = TestUtils.findRenderedDOMComponentWithClass(
  //       cartItem , 'cartItemPriceDisplay');
  //     expect(price.textContent).toEqual(item.priceUSD.toFixed(2));
  //
  //     var symbol = TestUtils.findRenderedDOMComponentWithClass(
  //       cartItem , 'currencySymbolDisplay');
  //     expect(symbol.textContent).toEqual("$");
  //
  //   })
  // })
})
