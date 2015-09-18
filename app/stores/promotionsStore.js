var restHelper = require("./../helpers/restHelper.js");
var GenericStore = require('./GenericStore.js');
let dispatcher = require('./../dispatcher.js');

let promotions = [];
class PromotionsStore extends GenericStore {
	constructor(){
		super();

		restHelper.get('promotions')
		.then((promos)=>{

			promotions = promos;

			this.triggerListeners();
		});

		dispatcher.register((e)=>{
			if (e.type==="promotions:change"){

				promotions = e.promotions;
				this.triggerListeners();
			}
		})
	}

	getPromotions(){

		return promotions;
	}
}

module.exports = new PromotionsStore();
