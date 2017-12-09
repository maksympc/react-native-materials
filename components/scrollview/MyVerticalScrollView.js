import React, {Component} from 'react';
import {
    ScrollView,
    Image, Text, View, TextInput,
    Dimensions
} from 'react-native'

export default class MyVerticalScrollView extends Component {

    render() {
        let screenWidth = Dimensions.get('window').width;
        return (
            <ScrollView
                maximumZoomScale={3}
                minimumZoomScale={0.2}
                keyboardDismissMode={'on-drag'}
            >
                <Image style={{width: screenWidth, height: screenWidth * 1203 / 1600, marginTop: 20}}
                       source={require('../../resources/images/melon.jpg')}/>
                <Text style={{
                    fontSize: 20,
                    padding: 15,
                    color: 'white',
                    textAlign: 'center',
                    backgroundColor: 'orange'
                }}>
                    This is melon!
                </Text>
                <TextInput
                    style={{padding: 10, margin: 10, borderWidth: 10, borderColor: 'green'}}
                    placeholder='Type here!'>
                </TextInput>
                <Image style={{width: screenWidth, height: screenWidth * 1203 / 1600, marginTop: 20}}
                       source={require('../../resources/images/melon.jpg')}/>
                <Image style={{width: screenWidth, height: screenWidth * 1203 / 1600, marginTop: 20}}
                       source={require('../../resources/images/melon.jpg')}/>
                <Image style={{width: screenWidth, height: screenWidth * 1203 / 1600, marginTop: 20}}
                       source={require('../../resources/images/melon.jpg')}/>
                <Image style={{width: screenWidth, height: screenWidth * 1203 / 1600, marginTop: 20}}
                       source={require('../../resources/images/melon.jpg')}/>
            </ScrollView>
        );
    }

}
