import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Style';
import MyButton from './MyButton';

class PostJob extends Component {
  render() {
    return (
      <View style={ styles.welcomeScreenContainer }>
        <Text>Post a job here</Text>
      </View>
    );
  }
}

export default PostJob;
