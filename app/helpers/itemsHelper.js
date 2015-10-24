let dispatcher = require('./../dispatcher.js');
let restHelper = require("./../helpers/restHelper.js");

module.exports = {
	removeItem(item){
		dispatcher.dispatch({
			type:"items:remove",
			item
		});
		restHelper.del(`items/${item.id}`);
	}
}