var restHelper = require("./../helpers/restHelper.js");
var GenericStore = require('./GenericStore.js');
let dispatcher = require('./../dispatcher.js');

var localeInfo = {};
class LocalizationStore extends GenericStore {
  constructor(){
    super();
    restHelper.get('locale')
    .then((locale)=>{
      localeInfo = locale;
      this.triggerListeners();
    });

    dispatcher.register((e)=>{
      if (e.type="locale:change"){
        localeInfo = {
          country:e.country
        }
        this.triggerListeners();
      }
    })
  }

  getLocale(){
    return localeInfo;
  }
}

module.exports = new LocalizationStore();
