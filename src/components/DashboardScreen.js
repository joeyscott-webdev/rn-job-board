import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Style';

class DashboardScreen extends Component {
  render() {
    return (
      <View style={ styles.welcomeScreenContainer }>
        <Text>Dashboard!</Text>
      </View>
    );
  }
}

export default DashboardScreen;
