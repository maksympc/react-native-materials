import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export default class EmailPasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: "please type your text!",
            typedPassword: "password",
        }
    }

    render() {
        return (
            <View>
                <TextInput style={{
                    height: 50,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 2,
                }}
                           keyboardType='email-address'
                           placeholder='Enter your email'
                           placeholderColor='white'
                           onChangeText={
                               (text) => {
                                   this.setState((previousState) => {
                                       return {
                                           typedText: text
                                       }
                                   })
                               }
                           }
                />
                <Text style={{marginLeft: 32}}>{this.state.typedText}</Text>
                <TextInput style={{
                    height: 50,
                    margin: 20,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 2,
                }}
                           placeholder='Enter your password'
                           placeholderColor='white'
                           onChangeText={
                               (text) => {
                                   this.setState((previousState) => {
                                       return {
                                           typedPassword: text
                                       }
                                   })
                               }
                           }
                           secureTextEntry={true}
                />
                <Text style={{marginLeft: 32}}>{this.state.typedPassword}</Text>
            </View>
        );
    }
}

