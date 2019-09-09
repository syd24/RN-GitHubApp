import React from 'react';
import {View, Text, Button} from 'react-native';


export default class HomeChildView extends React.Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>HomeChildView</Text>
                <Button
                    title="HomeChildView"
                    onPress={() => {
                        this.props.navigation.navigate('FlatListScreen');
                    }}
                />
            </View>
        );
    }

}
