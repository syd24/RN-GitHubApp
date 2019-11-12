import React from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import FavoritePage from '../classes/FavoritePage';
import Home from '../classes/Home';
import MyPage from '../classes/MyPage';
import TendencyPage from '../classes/TendencyPage';
import FlatList from '../FlatList';

//首页
const HomeNavigator = createStackNavigator({
        HomeScreen: {
            screen: Home,
        },
        FlatListScreen: {
            screen: FlatList,

        },
    },
);

HomeNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

//趋势
const TendencyPageNavigator = createStackNavigator({
        TendencyPageScreen: {
            screen: TendencyPage,
            navigationOptions: {
                title: '2',
            },
        },
    },
);

//喜欢
const FavoritePageNavigator = createStackNavigator({
        FavoritePageScreen: {
            screen: FavoritePage,
            navigationOptions: {
                title: '3',
            },
        },
    },
);

//我的
const MyPageNavigator = createStackNavigator({
        MyPageScreen: {
            screen: MyPage,
            navigationOptions: {
            },
        },
    },
);


export default createBottomTabNavigator({
        HomeNavigator: {
            screen: HomeNavigator,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({tintColor, focused}) => (
                    <Image
                        source={focused ? require('../../Images/Home.png') : require('../../Images/Home.png')}
                        style={styles.tabBarIconStyle}
                    />
                ),
            },
        },
        TendencyPageNavigator: {
            screen: TendencyPageNavigator,
            navigationOptions: {
                tabBarLabel: '趋势',
                tabBarIcon: ({tintColor, focused}) => (
                    <Image
                        source={focused ? require('../../Images/file.png') : require('../../Images/file.png')}
                        style={styles.tabBarIconStyle}
                    />
                ),
            },
        },
        FavoritePageNavigator: {
            screen: FavoritePageNavigator,
            navigationOptions: {
                tabBarLabel: '喜欢',
                tabBarIcon: ({tintColor, focused}) => (
                    <Image
                        source={focused ? require('../../Images/lock.png') : require('../../Images/lock.png')}
                        style={styles.tabBarIconStyle}
                    />
                ),
            },
        },
        MyPageNavigator: {
            screen: MyPageNavigator,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({tintColor, focused}) => (
                    <Image
                        source={focused ? require('../../Images/notebook.png') : require('../../Images/notebook.png')}
                        style={styles.tabBarIconStyle}
                    />
                ),
            },
        },
    },
    {
        // 初始化哪个界面为显示的第一个界面，如果不配置，默认使用RouteConfigs中的第一个页面当做根界面
        initialRouteName: 'HomeNavigator',
        lazy: true,
        tabBarOptions: {
            inactiveTintColor: '#8F8F8F',
            activeTintColor: '#ED5601',
            labelStyle: {
                fontSize: 11,
            },
        },
    },
);

const styles = StyleSheet.create({
    tabBarIconStyle: {
        width: 20,
        height: 20,
    },
});





