import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {createAppContainer, StackActions, NavigationActions} from 'react-navigation'; // Version can be specified in package.json
import {createStackNavigator} from 'react-navigation-stack';

const listArr = ['上海', '北京', '深圳', '北京', '深圳', '北京', '深圳', '北京', '深圳', '北京', '深圳'];
export default class FlatLists extends React.Component {


    static navigationOptions = ({ navigation }) => {
        return ({
            title: '城市列表页',
            tabBarVisible: false,
        })
    };


    constructor(props) {
        super(props);
        this.state = {};
    };

    _renderItem({item}) {
        return (
            <View style={styles.cellItem}>
                <Text>
                    {item}
                </Text>
            </View>
        );


    };

    render() {

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
                <FlatList style={styles.list}
                          data={listArr}
                          renderItem={this._renderItem}
                />
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    list: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    cellItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: 'red'
    },
});

