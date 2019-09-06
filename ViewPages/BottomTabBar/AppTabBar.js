import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FavoritePage from '../classes/FavoritePage'
import Home from '../classes/Home'
import MyPage from '../classes/MyPage'
import TendencyPage from '../classes/TendencyPage'


const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home
    },
    TendencyPage: {
        screen: TendencyPage
    },
    FavoritePage: {
        screen: FavoritePage
    },
    MyPage: {
        screen: MyPage
    }
});

export default createAppContainer(TabNavigator);
