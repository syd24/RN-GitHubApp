import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, FlatList, SafeAreaView} from 'react-native';

const listArr = ['上海', '北京', '深圳', '北京', '深圳', '北京', '深圳', '北京', '深圳', '北京', '深圳'];
export default class WelcomePage extends React.Component {

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
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                {/*<FlatList style={styles.list}*/}
                {/*          data={listArr}*/}
                {/*          renderItem={this._renderItem}*/}
                {/*/>*/}

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Welcome</Text>
                    <Button
                        title="Go to Details"
                        onPress={() => {
                            this.props.navigation.navigate('AppContainer');
                        }}
                    />
                </View>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    list: {
        paddingTop: 0,
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



