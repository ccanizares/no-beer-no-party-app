// import { connect } from 'react-redux';
import React, {Component}  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, addNavigationHelpers } from 'react-navigation';
import HomeScreen from './screens/home';
import ActivityScreen from './screens/activity';

const AppNavigator = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: ActivityScreen,
  }
});

export default class Index extends React.Component {
  someEvent() {
    // call navigate for AppNavigator here:
    this.navigator && this.navigator.dispatch({ type: 'Navigate', routeName, params });
  }

  render() {
    return (
      <AppNavigator ref={nav => { this.navigator = nav; }} />
    )
  }
}
