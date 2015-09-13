var restHelper = require("./../helpers/restHelper.js");

function RatesStore(){

  // keep variables hidden
  var conversions = undefined;

  restHelper.get('rates',function(conversionRates){
    console.log("Got rates...",conversionRates);
    conversions = conversionRates;
  });

  return {
    hasRates(){
      return !!conversions;
    },
    getRates(){
      return conversions;
    }
  }
}

module.exports = new RatesStore();
