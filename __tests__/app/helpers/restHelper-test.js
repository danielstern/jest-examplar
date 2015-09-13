jest.dontMock('../../../app/helpers/restHelper.js');

describe('the GET Helper', function() {
  it('makes a GET request with the correct paramaters', function() {
    // this will be mocked;
    let $ = require('jquery');
    let restHelper = require('../../../app/helpers/restHelper.js');
    let testURL = 'api/test';

    // Call into the function we want to test
    function dummyCallback() {}
    restHelper.get(testURL,dummyCallback);

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
