import React  from 'react';
import { View, Text, Button } from 'react-native';

export default class TendencyPage extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>TendencyPage</Text>
                <Button
                    title="TendencyPage"
                    onPress={() => {
                        this.props.navigation.navigate('FlatList');
                    }}
                />
            </View>
        );
    }

}
