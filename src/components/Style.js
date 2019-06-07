import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    marginBottom: 5,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#0066CC',
    height: 50,
    width: 170,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
  welcomeScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default styles;
