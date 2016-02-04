let exports = jest.genMockFromModule('./../restHelper.js');
var value = 0;

exports.__setValue = function(a){value = a};

Error.stackTraceLimit = 1;
exports.get.mockImplementation(function(a){
	console.log("Rest Helper Mock Get",a);
	let success = new Promise(function(success){
		setTimeout(function(){
			console.log("Resolve promise");
			success(value);
		},1);
	});
	
	jest.runAllTimers();
	
	return success;
	
	
});


module.exports = exports;