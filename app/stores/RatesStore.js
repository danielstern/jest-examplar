var restHelper = require("./../helpers/restHelper.js");
var GenericStore = require('./GenericStore.js');

class RatesStore extends GenericStore {
  constructor(){
    super();
    restHelper.get('rates')
    .then((conversionRates)=>{
      console.log("Got rates...",conversionRates);
      this.conversions = conversionRates;
    },(e)=>{throw e});
  }

//  var conversions = undefined;
//
//
//  return {
//    hasRates(){
//      return !!conversions;
//    },
//    getRates(){
//      return conversions;
//    }
//  }
}

module.exports = new RatesStore();
