import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Style';
import MyButton from './MyButton';

class ProfileScreen extends Component {
  render() {
    return (
      <View style={ styles.welcomeScreenContainer }>
        <Text>Your Profile</Text>
      </View>
    );
  }
}

export default ProfileScreen;
