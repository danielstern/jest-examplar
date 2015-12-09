var restHelper = require("./../helpers/restHelper.js");
let dispatcher = require('./../dispatcher.js');

var localeInfo = {};
var changeListeners = [];
class LocalizationStore {
	constructor(){

		restHelper.get('locale')
		.then((locale)=>{
			localeInfo = locale;
			this.triggerListeners();
		});

		dispatcher.register((e)=>{
			if (e.type==="locale:change"){
				localeInfo = {
					country:e.country
				}	
				this.triggerListeners();
			}
		})
	}

	triggerListeners(){
		changeListeners.forEach(function(listener){
			listener();
		})
	}

	onChange(listener){
		changeListeners.push(listener);
	}

  getLocale(){
    return localeInfo;
  }
}

module.exports = new LocalizationStore();
