"use strict";
let React = require('react/addons');
//let ratesStore = require('./../stores/RatesStore.js');
let conversionHelper = require('./../helpers/conversionHelper.js');

module.exports = React.createClass({
    getDefaultProps: function() {
      return {
        item:{name:"default item",price:1},
        locale:{country:undefined},
        promotions:[]
      };
    },
    getLocalizedCurrencySymbol(){
      return conversionHelper.getSymbolForCountry(this.props.locale.country);
    },
    getLocalizedPriceString(){
      let price = conversionHelper.convertFromUSD(this.props.locale.country, this.props.item.priceUSD);
      let currencyString = conversionHelper.toCurrencyString(price);
      return currencyString;
    },
    render(){
        return (
            <section>
                <h4>{this.props.item.name}</h4>
                <p role="price">
                  Your price -
                    <span className="currencySymbolDisplay">{this.getLocalizedCurrencySymbol()}</span>
                    <span className="cartItemPriceDisplay">{this.getLocalizedPriceString()}</span>
                </p>
                <p role="description">{this.props.item.description}</p>
                <form>
                    <button role="remove">Remove this item from the cart</button>
                </form>

                Promotions - {this.props.promotions.length}
            </section>
        )
    }
})
