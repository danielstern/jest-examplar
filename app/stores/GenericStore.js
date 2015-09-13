class GenericStore(){

	let changeListeners = [];

    function triggerListeners(){
		changeListeners.forEach(function(listener){
			listener(groceryItems)	;
		})
	};

	function onChange(listener){
		changeListeners.push(listener);
	}

//	dispatcher.register(function(event){
//		var split = event.type.split(':');
//		if (split[0]==='grocery-item'){
//			switch(split[1]) {
//				case "add":
//					addGroceryItem(event.payload);
//					break;
//				case "delete":
//					removeGroceryItem(event.payload);
//					break;
//				case "buy":
//					setGroceryItemBought(event.payload, true);
//					break;
//				case "unbuy":
//					setGroceryItemBought(event.payload, false);
//					break;
//			}
//		}
//	})
//
//
//	return {
//		getGroceryItems:getGroceryItems,
//		onChange:onChange
//	}
}

module.exports = new GenericStore();
