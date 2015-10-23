let restHelper = require("./../helpers/restHelper.js");
let GenericStore = require('./GenericStore.js');
let dispatcher = require('./../dispatcher.js');

let items = [];
class ItemsStore extends GenericStore {
	constructor(){
		super();
		restHelper.get('items')
		.then((itemData)=>{
			items = itemData;
			this.triggerListeners();
		});

		dispatcher.register((e)=>{
			console.log("Event...",e);
			let split = e.type.split(':');
			if (split[0]==='items'){
				if (split[1]==="change"){
					items = e.items;
					this.triggerListeners();
				}

				if (split[1]==="remove"){
					console.log("Removing",e,items);
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
