"use strict";

describe("The Item Store",()=>{
describe("The Item Store",function(){
	it("Should make a request to resthelper to call /items",()=>{
		let itemStore = require.requireActual('../../../app/stores/itemStore.js');
		let restHelper = require('../../../app/helpers/restHelper.js');
        //
        expect(restHelper.get).toBeCalledWith('items');
        // expect(true);
	});

	it("Should return the correct items",()=>{
		let restHelper = require('../../../app/helpers/restHelper.js');
		let value = [1,2,3];
		restHelper.__setValue(value);
		let itemStore = require.requireActual('../../../app/stores/itemStore.js');
        //
		waitsFor(function() {
			return itemStore.getItems().length > 0;
		}, "Items stores items", 500);
        //
		runs(function() {
			expect(itemStore.getItems()).toEqual(value);
		});
	});
})

})
