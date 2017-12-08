import React, {Component} from 'react';
import {View, Text, PixelRatio} from 'react-native';

export default class FlexExample extends Component {

    render() {
        console.log(PixelRatio.getPixelSizeForLayoutSize());
        return (
            <View style={{flex: 1, flexDirection: 'column', margin: 20}}>
                <Text style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'red',
                    marginBottom: 20
                }}/>
                <Text style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'green',
                    marginBottom: 20
                }}/>
                <Text style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'blue',
                    marginBottom: 20
                }}/>
            </View>
        );
    }
}