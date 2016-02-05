"use strict";

jest.dontMock('../../../app/helpers/restHelper.js');
describe('the GET Helper', function() {
	it('makes a GET request with the correct paramaters', function() {

		let $ = require('jquery');
		let restHelper = require('../../../app/helpers/restHelper.js');
		let testURL = 'api/test';

		// Call into the function we want to test
		restHelper.get(testURL,x=>x); 

		// Verify everything works correctly
		expect($.ajax).toBeCalledWith({
			type: 'GET',
			dataType:'json',
			url: testURL,
			success: jasmine.any(Function),
			error: jasmine.any(Function)
		});
	});
	
	it("sends over the correct values returned by jQuery",function(done){
		
		let returnedValue = null;
		let value = {test:true};
		
		runs(function(){
			let promise;
			let $ = require('jquery');
			
			$.ajax.mockImplementation(function(obj){
				obj.success(value);
			});
			
			
			let restHelper = require.requireActual('../../../app/helpers/restHelper.js');
			let testURL = 'api/test';

			restHelper.get(testURL).then(function(a){
				returnedValue = a;
			});
			
			jest.runAllTimers();
		});
		
		waitsFor(function(){
			return returnedValue;
		});
		
		runs(function(){
			expect(returnedValue).toEqual(value);
		})
	})
});
