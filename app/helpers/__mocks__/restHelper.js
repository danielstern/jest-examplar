let exports = jest.genMockFromModule('./../restHelper.js');
exports.get.mockImplementation(function(a){
	console.log("Get mock");
	return new Promise(x=>x);
});

module.exports = exports;