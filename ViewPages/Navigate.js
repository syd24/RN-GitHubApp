import React , {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createAppContainer, StackActions, NavigationActions ,createSwitchNavigator} from 'react-navigation'; // Version can be specified in package.json
import { createStackNavigator } from 'react-navigation-stack'
import WelcomePage from './WelcomePage'
import  App  from '../App'


const AppNavigator = createStackNavigator({
    HomeScreen: {
        screen: App,
    }
}, );


const appSwitchNavigator = createSwitchNavigator({
    Welcome:{
        screen: WelcomePage,
    },
    AppContainer:{
        screen: AppNavigator
    }
},{
    initialRouteName: 'Welcome'
})


export  default  createAppContainer(appSwitchNavigator);



