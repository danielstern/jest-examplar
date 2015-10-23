let dispatcher = require('./../dispatcher.js');

module.exports = {
	removeItem(item){
		console.log("Deleting...",item);
		dispatcher.dispatch({
			type:"items:remove",
			item
		})
	}
}