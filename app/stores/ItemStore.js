var restHelper = require("./../helpers/restHelper.js");
let dispatcher = require('./../dispatcher.js');

var items = [];
var changeListeners = [];
class ItemsStore {
	constructor(){
		
		console.log("Item store getting items");
		restHelper.get('items')
			.then((itemData)=>{
				console.log("Got items",items);
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
	
	triggerListeners(){
		changeListeners.forEach(function(listener){
			listener();
		})
	}
	
	getHelperReference(){
		return restHelper;
	}

	onChange(listener){
		changeListeners.push(listener);
	}

	getItems(){
		return items;
	}
}

module.exports = new ItemsStore();
