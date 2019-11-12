import React from 'react';
import {View, Text, Button} from 'react-native';


export default class FavoritePage extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: '1234',
        }
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>FavoritePage</Text>
                <Button
                    title="FavoritePage"
                    onPress={() => {
                        this.props.navigation.navigate('FlatList');
                    }}
                />
            </View>
        );
    }

}
