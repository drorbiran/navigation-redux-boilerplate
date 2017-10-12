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
import Screen2 from './modules/module1/Screen2';


const store = createStore(combineReducers(reducers),{},applyMiddleware(thunk));

//registering components
// using redux, pass your store and the Provider object from react-redux
Navigation.registerComponent('Screen1', () => Screen1,store,Provider);
Navigation.registerComponent('Screen2', () => Screen2);

Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Screen1', // tab label as appears under the icon in iOS (optional)
            screen: 'Screen1', // unique ID registered with Navigation.registerScreen
            icon: require('./img/icon1.png'), // local image asset for the tab icon unselected state (optional on iOS)
            selectedIcon: require('./img/icon1_selected.png'), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
            title: 'Screen One', // title of the screen as appears in the nav bar (optional)
            navigatorStyle: {}, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
            navigatorButtons: {} // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
        },
        {
            label: 'Screen2',
            screen: 'Screen2',
            icon: require('./img/icon2.png'),
            selectedIcon: require('./img/icon2_selected.png'),
            title: 'Screen Two'
        }
    ]
});
