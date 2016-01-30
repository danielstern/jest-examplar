"use strict";
jest.dontMock('../../../app/components/LocalizationBox.js');

let React = require('react');
//let TestUtils = React.addons.TestUtils;
let TestUtils = require('react-addons-test-utils');

describe("the localization box",()=>{
	it("should display the country associated with the current value",()=>{

		let LocalizationBox = require('../../../app/components/LocalizationBox.js');

		let localeInfo = {
			country:"GB"
		};

		let localizationBox = TestUtils.renderIntoDocument(
			<LocalizationBox country={localeInfo.country} />
		);

		// todo - finalize localization helper
		let select = TestUtils.findRenderedDOMComponentWithTag(localizationBox , 'select');

		expect(select.options[select.selectedIndex].textContent).toEqual("Great Britain");

		TestUtils.Simulate.change(select, { target: { value: "USA" } });

		expect(select.options[select.selectedIndex].textContent).toEqual("United States");

	});

	it("should dispatch an event when the box is changed.",()=>{

		let dispatcher = require('../../../app/dispatcher.js');

		dispatcher.dispatch = jest.genMockFn();

		let LocalizationBox = require('../../../app/components/LocalizationBox.js');

		let localeInfo = {
			country:"USA"
		};

		let localizationBox = TestUtils.renderIntoDocument(
			<LocalizationBox country={localeInfo.country} />
		);

		let select = TestUtils.findRenderedDOMComponentWithTag(localizationBox , 'select');

		TestUtils.Simulate.change(select, { target: { value: "GB" } });

		expect(dispatcher.dispatch).toBeCalledWith({
			type:"locale:change",
			country:"GB"
		});
	});
});
