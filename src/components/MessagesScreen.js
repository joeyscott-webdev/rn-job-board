import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Style';
import MyButton from './MyButton';

class MessagesScreen extends Component {
  render() {
    return (
      <View style={ styles.welcomeScreenContainer }>
          <Text>Messages Screen</Text>
      </View>
    );
  }
}

export default MessagesScreen;
