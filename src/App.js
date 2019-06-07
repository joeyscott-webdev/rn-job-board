import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
//My components
import styles from './components/Style';
import MyButton from './components/MyButton';
import WelcomeScreen from './components/WelcomeScreen';
import DashboardScreen from './components/DashboardScreen';
import JobsScreen from './components/JobsScreen';
import ApplicationsScreen from './components/ApplicationsScreen';
import MessagesScreen from './components/MessagesScreen';
import PostJob from './components/PostJob';
import ProfileScreen from './components/ProfileScreen';

const App = () => {
  return (
    <AppContainer />
    );

};
//create another stack nav to display in JobsScreen
const JobsStack = createStackNavigator({
  Jobs:{
    screen: JobsScreen,
    navigationOptions: ({navigation})=>{
      return{
        headerTitle: 'Jobs',
        headerLeft:(
          <Icon
            style={{paddingLeft:10}}
            name="bars"
            size={30}
            onPress={() => navigation.openDrawer()}  />
          )
      };
    }
  },
  PostJob: {
    screen: PostJob
  }
  },{
    defaultNavigationOptions:{
      gesturesEnabled: false
    }
    });
//create another stack nav to display in ApplicationsScreen
const ApplicationsStack = createStackNavigator({
  Applications:{
    screen: ApplicationsScreen,
    navigationOptions: ({navigation})=>{
      return{
        headerTitle: 'Applications',
        headerLeft:(
          <Icon
            style={{paddingLeft:10}}
            name="bars"
            size={30}
            onPress={() => navigation.openDrawer()}  />
          )
      };
    }
  }
  });
//create another stack nav to display in MessagesScreen
const MessagesStack = createStackNavigator({
  Messages:{
    screen: MessagesScreen,
    navigationOptions: ({navigation})=>{
      return{
        headerTitle: 'Messages',
        headerLeft:(
          <Icon
            style={{paddingLeft:10}}
            name="bars"
            size={30}
            onPress={() => navigation.openDrawer()}  />
          )
      };
    }
  }
  });
//Create the bottom tabs you see after logging in
const DashboardTabNav = createBottomTabNavigator({
  Jobs: JobsStack,
  Applications: ApplicationsStack,
  Messages: MessagesStack
  },{
    navigationOptions:({navigation})=>{
      const {routeName} = navigation.state.routes[navigation.state.index]
      return {
        header: null,
        headerTitle: routeName
      };
    }
    });
//Create a stacked nav to display a header and button to open drawer
const DashboardStackNav = createStackNavigator({
  DashboardTabNav: DashboardTabNav
  },{
    defaultNavigationOptions:({navigation})=>{
      return{
        headerLeft:(
          <Icon
            style={{paddingLeft:10}}
            name="bars"
            size={30}
            onPress={() => navigation.openDrawer()}  />
          )
      };
    }
    });
//create the drawer navigation
const AppDrawerNav = createDrawerNavigator({
  Dashboard:{
    screen: DashboardStackNav
  },
  Profile:{
    screen: ProfileScreen
  }
  });
//create the initial switch nav to handle the welcome screen to sign up or log in
const AppSwitchNav = createSwitchNavigator({
    Welcome:{screen: WelcomeScreen},
    Dashboard:{screen: AppDrawerNav}
});

const AppContainer = createAppContainer(AppSwitchNav);

export default App;
