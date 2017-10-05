Volunteer portal for community arts festivals, built on React and Node

## Table of Contents

- [Environment Setup](#environment-setup)
- [Core Technologies](#core-technologies)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [yarn server](#yarn-server)
  - [yarn start](#yarn-start)
  - [yarn test](#yarn-test)
  - [yarn build](#yarn-build)
- [Running Tests](#running-tests)
  - [Filename Conventions](#filename-conventions)
  - [Version Control Integration](#version-control-integration)
  - [Writing Tests](#writing-tests)

## Environment Setup

1. [Install Node](https://nodejs.org)
2. [Install Yarn](https://yarnpkg.com/en/docs/install)
3. `git clone git@github.com:Hyperborea-Experimental-Arts-Team/volunteer-portal.git`
4. `cd volunteer-portal`
5. `yarn install`

## Core Technologies

* [NodeJS](https://nodejs.org) - Server-side javascript runtime environment
* [Express](https://expressjs.com/) - Web framework running on NodeJS, serves the API and the React SPA
* [Redux](http://redux.js.org/) - State management library that enforces uni-directional data flow
* [React](https://reactjs.org/) - Library for building declarative user interfaces
* [Storybook](https://storybook.js.org/) - Environment for viewing and testing React components in isolation

## Folder Structure

```
volunteer-portal/
  config/         - Configuration files for various build/test/deploy tools
  public/         - Static files that don't get processed by React
  scripts/        - Support scripts for build/test/deploy tasks
  server/         - Server logic for the JSON REST API
  src/            - Front end logic for the React application
    actions/      - Redux actions
    components/   - React presentational components
    containers/   - React container components
    images/       - Images needed by React components
    reducers/     - Redux reducers
  test/           - Tests
```

## Available Scripts

In the project directory, you can run:

### `yarn server`

Starts the application server, including the REST API and the React SPA. Port is configured
in `config/default.json`. The API will be available at the path /api, and the React PSA will 
route all other URLS on the client-side.

You must run `yarn build` before starting the server.

### `yarn start`

Runs the React application in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see lint errors and Redux actions in the console

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.
This must be done before the app can be served by Express.


### `yarn storybook`

Launches the storybook environment, allowing you to view and interact 
with React components without running the actual app.

## Running Tests

[Jest](https://facebook.github.io/jest/) is being used as a test runner. Jest is a Node-based runner, so tests are run in a Node environment and not in the browser. It is primarily intended to be used for unit testing of logic and components.

### Filename Conventions

Jest will look for test files with any of the following popular naming conventions:

* Files with `.js` suffix in `__tests__` folders.
* Files with `.test.js` suffix.
* Files with `.spec.js` suffix.

The `.test.js` / `.spec.js` files (or the `__tests__` folders) can be located at any depth under the `src` top level folder.

### Writing Tests

To create tests, add `it()` (or `test()`) blocks with the name of the test and its code. You may optionally wrap them in `describe()` blocks for logical grouping but this is neither required nor recommended.

Jest provides a built-in `expect()` global function for making assertions. A basic test could look like this:

```js
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

All `expect()` matchers supported by Jest are [extensively documented here](http://facebook.github.io/jest/docs/expect.html).<br>
You can also use [`jest.fn()` and `expect(fn).toBeCalled()`](http://facebook.github.io/jest/docs/expect.html#tohavebeencalled) to create “spies” or mock functions.
