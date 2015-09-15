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
    getLocalizedPrice(){
      //console.log("Getting localized price...",this.props.locale.country,this.props.item.price,conversionHelper.convertFromUSD(this.props.locale.country, this.props.item.price));
      return conversionHelper.convertFromUSD(this.props.locale.country, this.props.item.priceUSD);
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

                Promotions - {this.props.promotions.length}
            </section>
        )
    }
})
