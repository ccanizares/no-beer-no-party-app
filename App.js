import React from 'react';
import { StyleSheet, Text, View,  AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';
import HomeScreen from './app/screens/home';

export default class App extends React.Component {
  render() {
    return (
      TabNavigator({
        Home: {
          screen: HomeScreen,
        },
        Notifications: {
          screen: NotificationScreen,
        },
      }, {
          tabBarOptions: {
            activeTintColor: '#e91e63',
          },
        })
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


