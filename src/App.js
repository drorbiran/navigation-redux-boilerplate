/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducers from './store/reducers';

import Screen1 from './modules/module1/Screen1';

class App extends Component {
    render() {
        const store = createStore(combineReducers(reducers),{},applyMiddleware(thunk));
        return (
            <Provider store={store}>
              <Screen1/>
            </Provider>
        )
    }
}

Navigation.registerComponent('App', () => App);
Navigation.startSingleScreenApp({
  screen: {
    screen: 'App',
    title: 'React Native Navigation Redux Boiler Plate'
  }
});
