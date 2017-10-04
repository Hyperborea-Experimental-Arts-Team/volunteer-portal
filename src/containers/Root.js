import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';
import ReversableSplash from '../containers/ReversableSplash';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReversableSplash />
      </Provider>
    );
  }
}
