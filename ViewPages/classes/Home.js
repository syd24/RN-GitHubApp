import React  from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import HomeChildView from './childViews/HomeChildView'


const topTabBarTitles = ['科比布莱恩特','勒布朗詹姆斯','德恩韦德','易建联','姚明'];

const TopTabBar = createMaterialTopTabNavigator(
    _renderTopTabBar(),{
        tabBarOptions:{
            scrollEnabled: true,
            style:{
                backgroundColor: '#678'
            },
            indicatorStyle:{
                backgroundColor: 'yellow',
                height:1
            }

        }
    }
)

function _renderTopTabBar() {
    const tabs = {};
    topTabBarTitles.forEach((item,index) => {
        tabs[`tab${index}`] = {
            screen: HomeChildView,
            navigationOptions:{
                title: item
            }
        }
    })

    return tabs;
}

export default class Home extends React.Component {

    static router = TopTabBar.router;


    static navigationOptions = ({ navigation }) => {
        return ({
            title: '1234',
        })
    };

    constructor(props){
        super(props)

    }

    componentDidMount(): void {

    }


    render() {

        const { navigation } = this.props;

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
                <TopTabBar  navigation={navigation} />
                <Text>Home</Text>
                <Button
                    title="Home"
                    onPress={() => {
                        navigation.navigate('FlatListScreen');
                    }}
                />
            </SafeAreaView>
        );
    }

}







