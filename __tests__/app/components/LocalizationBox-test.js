jest.dontMock('../../../app/components/LocalizationBox.js');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var LocalizationBox = require('../../../app/components/LocalizationBox.js');

describe("the localization box",()=>{
  it("should display the country associated with the current value",()=>{
     // Define a dummy item
    var localeInfo = {
      country:"GB"
    };

    var localizationBox = TestUtils.renderIntoDocument(
      <LocalizationBox country={localeInfo.country} />
    );

    // todo - finalize localization helper
    var select = TestUtils.findRenderedDOMComponentWithTag(localizationBox , 'select');
    expect(select.getDOMNode().options[select.getDOMNode().selectedIndex].textContent).toEqual("Great Britain");

    TestUtils.Simulate.change(select, { target: { value: "USA" } });
    expect(select.getDOMNode().options[select.getDOMNode().selectedIndex].textContent).toEqual("United States");

  });

  it("should dispatch an event when the box is changed.");
});
