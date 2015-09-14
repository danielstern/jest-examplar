"use strict";
var React = require('react/addons');

//var ratesStore = require('./../stores/RatesStore.js');

module.exports = React.createClass({
    getLocalizedPrice(){
      return this.props.item.priceUSD;
    },
    render(){
        return (
            <section>
                <h4>{this.props.item.name}</h4>
                <p role="price">
                  Your price -
                    <span className="currencySymbolDisplay">$</span>
                    <span className="cartItemPriceDisplay">{this.getLocalizedPrice()}</span>
                </p>
                <p role="description">{this.props.item.description}</p>
                <form>
                    <button role="remove">Remove this item from the cart</button>
                </form>

                Promotions - {this.props.promotions ? this.props.promotions.length : "N/A"}
            </section>
        )
    }
})
