import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './Style';
import MyButton from './MyButton';

class JobsScreen extends Component {
  render() {
    return (
      <View style={ styles.welcomeScreenContainer }>

        <MyButton
          buttonText="Post Job"
          onPress={() => this.props.navigation.navigate('PostJob')}
        />
      </View>
    );
  }
}

export default JobsScreen;
