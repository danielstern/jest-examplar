let exports = jest.genMockFromModule('./../restHelper.js');
var value = 0;
//
exports.__setValue = function(a){value = a};

Error.stackTraceLimit = 1;
exports.get.mockImplementation(function(a){
	let success = new Promise(function(success){
		setTimeout(function(){
			success(value);
		},1);
	});

	jest.runAllTimers();

	return success;


});
//
//
module.exports = exports;