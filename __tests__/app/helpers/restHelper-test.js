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
	
	it.only("sends over the correct values returned by jQuery",function(done){
		
		let returnedValue = null;
		let value = {test:true};
		
		runs(function(){
			let promise;
			let $ = require('jquery');
			// incorrect implementation where jquery ajax does not take an object
			/*$.ajax.mockImplementation(function(a){
				console.log("Mock implementation of jquery is called ajax is called");
				let promise = new Promise(function(resolve,reject){
					setTimeout(function(){
						console.log("Timeout resolve...",value);
						resolve(value);
					},20);	
				});
				
				jest.runAllTimers();
				
				return promise;
			});*/
			
			$.ajax.mockImplementation(function(obj){
				console.log("Mock request ajax...",obj);
				obj.success(value);
			});
			
			
			let restHelper = require.requireActual('../../../app/helpers/restHelper.js');
			let testURL = 'api/test';

				
			//var p = restHelper.get(testURL).then(function(a){console.log("Promise resolved form unmocked helper")});
			//console.log(p);
			//$.ajax({}).then(function(a){console.log("Test promise resolved")});
			
			restHelper.get(testURL).then(function(a){
				console.log("Got result",a);
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
