let d3 = require('d3');
let React = require("react");
let conversionHelper = require('./../helpers/conversionHelper.js');

module.exports = React.createClass({
	calculateTotalItemPrices(){
		return d3.sum(this.props.items,i=>i.priceUSD);
	},
	getTotalString(){
		return conversionHelper.toLocaleCurrencyString(this.calculateTotalItemPrices(), this.props.locale.country);
	},
	render:function(){
		return (
			<section role="cart total" className="total">
				<h3>Your Total</h3>
				<h2>{this.getTotalString()}</h2>
				<button className="checkout">Check Out Now</button>
			</section>
		)
	}
});
