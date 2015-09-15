var symbols = {
  "USA":"$"
}

var rates = {
  "USA":1,
  "CAN":1.15,
  "GB":0.65
}

module.exports = {
  convertFromUSD(locale,amount){
    return amount * rates[locale];
  },
  getSymbolFor(locale){
    return symbols[locale];
  }
}
