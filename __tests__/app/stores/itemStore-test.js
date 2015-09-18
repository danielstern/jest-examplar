jest.dontMock('../../../app/stores/itemStore.js');

describe("The Item Store",()=>{
	it("Should register with the dispatcher",()=>{
		//jest.dontMock('../../../app/stores/GenericStore.js');
		jest.dontMock('../../../app/helpers/restHelper.js');

		let itemStore = require('../../../app/stores/itemStore.js');
		let dispatcher = require('../../../app/dispatcher.js');

		// get reference to the first argument of the first call to dispatcher.register (should be a callback function);
		let callback = dispatcher.register.mock.calls[0][0];

		let payload = {
			type: "items:change",
			items:[{
				id:"0001",
				name:"Fuzzy Slippers",
				priceUSD:5.00
			}]
		};
		callback(payload);

		let items = itemStore.getItems();
		expect(items[0].name).toEqual("Fuzzy Slippers");

	});
	it("Should make a request to resthelper to call /items",()=>{
		let restHelper = require('../../../app/helpers/restHelper.js');
		restHelper.get = jest.genMockFunction()
			.mockImplementation(x=>new Promise(x=>x,x=>x));
		let itemStore = require('../../../app/stores/itemStore.js');
		expect(restHelper.get).toBeCalledWith('items');
	});
	it("Should call onChange when new items are received");
	it("Should return its items when getItems() is called");


})
