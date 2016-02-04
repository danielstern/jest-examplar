"use strict";

//jest.dontMock('../../../app/stores/ItemStore.js');

describe("The Item Store",()=>{
describe("The Item Store",function(){
	it("Should make a request to resthelper to call /items",()=>{
	//	jest.setMock('../../../app/helpers/restHelper.js',require('../../../app/helpers/__mocks__/restHelper.js'));
		let itemStore = require.requireActual('../../../app/stores/itemStore.js');
		let restHelper = require('../../../app/helpers/restHelper.js');

		expect(restHelper.get).toBeCalledWith('items');
	});
	
	it("Should return the correct items",()=>{
		// todo... fix this. mocked rest helper not woring.
		
		//var itemStore;
		
		//var flag = false;
		//let restHelper = require.requireActual('../../../app/helpers/__mocks__/restHelper.js');
		let restHelper = require('../../../app/helpers/restHelper.js');
		
		//jest.setMock('../../../app/helpers/restHelper.js',restHelper);
		//jest.setMock("./../helpers/restHelper.js",helperExports);
		//let restHelper = require('../../../app/helpers/restHelper.js');
		let value = [1,2,3];
		//restHelper.get.mockReturnValueOnce(new Promise(function(){return value}));
		restHelper.__setValue(value);
		let itemStore = require.requireActual('../../../app/stores/itemStore.js');	
		//runs(function() {
			
			
			//flag = true;
		//}); 
			

		waitsFor(function() {
			console.log("Get items?",itemStore.getItems());
			return itemStore.getItems().length > 0;
		}, "Items stores items", 500); 
		
		runs(function() {
			expect(itemStore.getItems()).toEqual([1,2,3]);
		});
		
		// important!

		
		
		//let restHelper = itemStore.getHelperReference();
		

		
	});
})

})
