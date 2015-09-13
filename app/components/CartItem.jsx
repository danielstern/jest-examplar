var React = require('react/addons');
//var conversionHelper = require('./../helpers/RatesHelper.js');
var ratesStore = require('./../stores/RatesStore.js');

module.exports = React.createClass({
    getLocalizedPrice(){
      return this.props.item.priceUSD;
    },
    render(){
        return (
            <section>
                <h4>{this.props.item.name}</h4>
                <p role="price">Your price - <span id="CartItemPriceDisplay">${this.getLocalizedPrice()}</span></p>
                <p role="description">{this.props.item.description}</p>
                <form>
                    <button role="remove">Remove this item from the cart</button>
                </form>
            </section>
        )
    }
})
