import React, {Component} from 'react';
import {Alert, StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';

export default class CustomTouchable extends Component {
    _onPressButton = () => {
        alert("you have pressed the button!");
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <TouchableHighlight
                    onPress={this._onPressButton}
                    onShowUnderlay={() => {
                        Alert.alert('onShowUnderlay button!')
                    }}
                >
                    <View style={{alignItems: 'center'}}>
                        {/*<Text style={{color: 'white', padding: 20, fontSize: 18}}>TouchableHighlight</Text>*/}
                        <Image style={{width: 150, height: 50}}
                               source={require('../../resources/images/blueb.png')}>
                        </Image>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}