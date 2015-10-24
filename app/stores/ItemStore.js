var restHelper = require("./../helpers/restHelper.js");
var GenericStore = require('./GenericStore.js');
let dispatcher = require('./../dispatcher.js');

var items = [];
class ItemsStore extends GenericStore {
	constructor(){
		super();
		restHelper.get('items')
			.then((itemData)=>{
				items = itemData;
				this.triggerListeners();
			});

		dispatcher.register((e)=>{
			let [category,type] = e.type.split(':');
			if (category==="items"){
				if (type==="remove"){
					items = items.filter(a => a.id !== e.item.id);
					this.triggerListeners()
				}
			}
		})
	}

	getItems(){
		return items;
	}
}

module.exports = new ItemsStore();
