import React  from 'react';
import { View, Text, Button } from 'react-native';

export default class MyPage extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>MyPage</Text>
                <Button
                    title="MyPage"
                    onPress={() => {
                        this.props.navigation.navigate('FlatList');
                    }}
                />
            </View>
        );
    }

}
