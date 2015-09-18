

describe('the GET Helper', function() {
  it('makes a GET request with the correct paramaters', function() {
    // this will be mocked;
		jest.dontMock('../../../app/helpers/restHelper.js');
    let $ = require('jquery');
    let restHelper = require('../../../app/helpers/restHelper.js');
    let testURL = 'api/test';

    // Call into the function we want to test
    restHelper.get(testURL,x=>x); // shortest ever noop

    // Verify everything works correctly
    expect($.ajax).toBeCalledWith({
      type: 'GET',
      dataType:'json',
      url: testURL,
      success: jasmine.any(Function),
      error: jasmine.any(Function)
    });
  });
});
