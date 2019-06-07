import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Style';
import MyButton from './MyButton';

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={ styles.welcomeScreenContainer }>
          <MyButton
            buttonText="Log In"
            onPress={() => this.props.navigation.navigate('Dashboard')}
          />
          <MyButton
            buttonText="Sign Up"
            onPress={console.log('clicked!')}
          />
      </View>
    );
  }
}

export default WelcomeScreen;
