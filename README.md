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
* [Babel](https://babeljs.io) - Javascript compiler
* [Express](https://expressjs.com/) - Web framework running on NodeJS, serves the API and the React SPA
* [Redux](http://redux.js.org/) - State management library that enforces uni-directional data flow
* [React](https://reactjs.org/) - Library for building declarative user interfaces
* [Storybook](https://storybook.js.org/) - Environment for viewing and testing React components in isolation

## Folder Structure

```
volunteer-portal/
  config/         - Configuration files
  public/         - Static files that don't get processed by React
  scripts/        - Support scripts for build/test/deploy tasks
  src/            - Uncompiled source code
    server/       - Source for the server application
    client/       - Source for the client application
      actions/    - Redux actions
      components/ - React presentational components
      containers/ - React container components
      images/     - Images needed by React components
      reducers/   - Redux reducers
  stories/        - Component definitions for Storybook
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the entire application in development mode. Changes in the source will be visible without rebuilding, and changes
to the React application will be hot-reloaded. 

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the entire application into a production-ready bundle.

### `yarn server:start`

Starts the application server in development mode, hosting the API only. Changes in the source will be visible without
rebuilding. You probably don't want to run this by itself, because it will be unable to route to the React front-end.

For development, you should just run [`yarn start`](#yarn-start)

### `yarn server:build`

Builds the server application into a production-ready bundle.

### `yarn server:test`

Doesn't exist! Someone should probably write tests for the server...

### `yarn client:start`

Starts the React application in development mode. Changes to the source will be hot-reloaded without rebuilding.
You probably don't want to run this by itself, because the API will not be online.

For development, you should just run [`yarn start`](#yarn-start)

### `yarn client:build`

Builds the client application into a production-ready bundle.

### `yarn client:test`

Launches the test runner for the client application in interactive watch mode.
See the section about [running tests](#running-tests) for more information.

### `yarn storybook`

Launches the storybook environment, allowing you to view and interact with React components without running the actual app.

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
