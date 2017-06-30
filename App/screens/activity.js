import React, {Component}  from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

export default class ActivityScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Activity',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./beer-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Go to Home"
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});