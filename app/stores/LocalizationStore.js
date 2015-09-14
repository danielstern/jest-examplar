var restHelper = require("./../helpers/restHelper.js");
var GenericStore = require('./GenericStore.js');

var localeInfo = {};
class LocalizationStore extends GenericStore {
  constructor(){
    super();
    restHelper.get('locale')
    .then((locale)=>{
      localeInfo = locale;
      this.onChange();
    });
  }

  getLocale(){
    return localeInfo;
  }
}

module.exports = new LocalizationStore();
