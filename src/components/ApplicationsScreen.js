import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Style';
import MyButton from './MyButton';

class ApplicationsScreen extends Component {
  render() {
    return (
      <View style={ styles.welcomeScreenContainer }>
          <Text>Applications Screen</Text>
      </View>
    );
  }
}

export default ApplicationsScreen;
