//require('babel/register');
jest.dontMock('../../../app/components/CartItem.jsx');
describe('Cart Item', function() {
  describe("The Price Display",()=>{

    it("should display the name of the item",()=>{
      var CartItem = require('../../../app/components/CartItem.jsx');
      var React = require('react/addons');
      var TestUtils = React.addons.TestUtils;

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
  })
})
