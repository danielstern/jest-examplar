"use strict";

var changeListeners = [];

export default class GenericStore {

	triggerListeners(){
		changeListeners.forEach(function(listener){
			listener();
		})
	}

	onChange(listener){
		changeListeners.push(listener);
	}

}

