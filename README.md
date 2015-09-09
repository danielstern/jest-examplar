# jest-examplar
A repository containing a Jest Example for React

## Node/Io.js Notes
Currently, Jest 0.4 works on Node, while Jest 0.5 works on Io.js. When Node 4.0 comes out, this will no longer be an issue.

## Jest Gotchas
- You must have a "jest" section in your `package.json` or `jest` will quietly fail.
- Jest 0.5x only works with **io.js**. Jest 0.4x works (?) with **node.js** (and possibly io.js as well, but if you're running Io, it makes sense to use `0.5x` for Jest
- Jest will automatically mock anything you `require`, which can lead to very confusing results. **require statements often don't mean what you think they do in `Jest`** (https://facebook.github.io/jest/docs/automatic-mocking.html)

## How to get Jest working?
1. `npm install --save jest jest-cli`
2. `npm install --g jest-cli`
3. `npm init`
4. Add `jest` section to package.json

## Glossary
### Jest
The "default-mocking" framework (is that why they call it Jest?)

### React
A library often used with Jest. Though they are often thought of together and made by Facebook, Jest can be used to test other things.

### Facebook
An internet company which maintains Jest, as well as React.

## Links
https://facebook.github.io/jest/
https://facebook.github.io/jest/docs/tutorial-react.html
