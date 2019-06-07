import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Style';
// This is my custom button Component
// When using this component you must pass
// onPress prop, buttonText prop

const MyButton = (props) => {
  return (
      <TouchableOpacity
        style={ styles.buttonContainer }
        onPress={ props.onPress }
      >
        <Text
          style={ styles.buttonText }
        >{ props.buttonText }</Text>
      </TouchableOpacity>
  );
};

export default MyButton;
