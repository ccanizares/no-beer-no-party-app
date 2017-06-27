import { Text, View, Button } from 'react-native';

class NotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notifications',
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
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Go to Home"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});