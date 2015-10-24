var symbols = {
	"USA":"$",
	"CAN":"$",
	"GB":"£"
}

var rates = {
	"USA":1,
	"CAN":1.15,
	"GB":0.65
}

module.exports = {
	toLocaleCurrencyString(amount,locale="USA"){
		return this.getSymbolForCountry(locale) + this.toCurrencyString(this.convertFromUSD(locale,amount));
	},
	convertFromUSD(locale,amount){
		return (amount * rates[locale]);
	},
	getSymbolForCountry(locale){
		return symbols[locale];
	},
	toCurrencyString(amount){
		return amount.toFixed(2);
	}
}
