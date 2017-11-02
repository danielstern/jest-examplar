# jest-examplar
A repository containing a Jest Example for React

> “Jesters do oft prove prophets.” ― William Shakespeare, King Lear

## Node/Io.js Notes
~~Currently, Jest 0.4 works on Node, while Jest 0.5 works on Io.js. When Node 4.0 comes out, this will no longer be an issue.~~

Now that Node v4.0 has been released, use Node 4.0+ with Jest 0.5+

## Jest Gotchas
- You must have a "jest" section in your `package.json` or `jest` will quietly fail. The `unmockedModulePathPatterns` property is **really important** as `dontMock` does not work very well for modules. Here's an example.
```javascript
"jest": {
    "unmockedModulePathPatterns": [
        "react",
        "chai"
    ]
}
```

- Jest 0.5x only works with **io.js**. Jest 0.4x works (?) with **node.js** (and possibly io.js as well, but if you're running Io, it makes sense to use `0.5x` for Jest
- Jest will automatically mock anything you `require`, which can lead to very confusing results. **require statements often don't mean what you think they do in `Jest`** (https://facebook.github.io/jest/docs/automatic-mocking.html)


## How to get Jest working?
1. `npm install --save jest jest-cli`
2. `npm install --g jest-cli`
3. `npm init`
4. Add `jest` section to package.json
5. Create `__tests__/basic-test.js` (Code inside this file will run when you call `jest` from the command line)

## JSX in Jest?
There is a property in the `package.json` Jest configuration specifically for this called `scriptPreprocessor`. Here is a generic preprocessor for JSX from the docs:

```javascript
var ReactTools = require('react-tools');
module.exports = {
  process: function(src) {
    return ReactTools.transform(src);
  }
};
```

And an example configuration, also from the docs:
```
 "jest": {
    "scriptPreprocessor": "./preprocessor.js",
```

## Glossary
### Jest
The "default-mocking" framework (is that why they call it Jest?)

### Jest-CLI
A tool for using Jest from the command line. Install it globally unless you're using a tool like Gulp to automate Jesting.

### React
A library often used with Jest. This is a bit confusing because, though they are often thought of together and made by Facebook, Jest can be used to test other things. Jest is easiest understood seperate from React (Just as Karma is more easily understood if seperated from Angular)

### Facebook
An internet company which maintains Jest, as well as React.

### TestUtils
A tool that comes with React that lets you easily generate virtual instances of components for testing. Allows for convenient functions like `findRenderedDOMComponentWithTag` that are somewhat reminiscent of Protractor.

## Resources
- https://facebook.github.io/jest/
- https://facebook.github.io/jest/docs/tutorial-react.html

### API References :rocket:
- https://facebook.github.io/jest/docs/api.html#content
- https://facebook.github.io/react/docs/component-api.html
- https://facebook.github.io/react/docs/component-specs.html
- https://facebook.github.io/flux/docs/testing-flux-applications.html
