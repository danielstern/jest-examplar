var restHelper = require("./../helpers/restHelper.js");
var GenericStore = require('./GenericStore.js');

var conversions = {};
class RatesStore extends GenericStore {
  constructor(){
    super();
    restHelper.get('rates')
    .then((conversionRates)=>{
      conversions = conversionRates;
      this.onChange();
    },(e)=>{throw e});
  }

  getRates(){
    return conversions;
  }
}

module.exports = new RatesStore();
