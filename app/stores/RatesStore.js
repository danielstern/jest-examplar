var restHelper = require("./../helpers/restHelper.js");

var conversions = {};
var changeListeners = [];
class RatesStore {
	constructor(){

		restHelper.get('rates')
		.then((conversionRates)=>{
			conversions = conversionRates;
			this.triggerListeners();
		},(e)=>{throw e});
	}

	getRates(){
		return conversions;
	}
	
	triggerListeners(){
		changeListeners.forEach(function(listener){
			listener();
		})
	}

	onChange(listener){
		changeListeners.push(listener);
	}
}

module.exports = new RatesStore();
