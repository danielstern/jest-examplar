"use strict";

jest.dontMock('../../../app/stores/ItemStore.js');

describe("The Item Store",()=>{
describe.only("The Item Store",function(){
	it("Should make a request to resthelper to call /items",()=>{
		jest.setMock('../../../app/helpers/restHelper.js',require('../../../app/helpers/__mocks__/restHelper.js'));
		let itemStore = require('../../../app/stores/itemStore.js');
		let restHelper = require('../../../app/helpers/restHelper.js');

		expect(restHelper.get).toBeCalledWith('items');
	});
})

})
