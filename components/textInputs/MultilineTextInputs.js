import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';

export default class MultilineTextInputs extends Component {
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
                    height: 150,
                    margin: 50,
                    padding: 10,
                    borderColor: 'gray',
                    borderWidth: 2,
                }}
                           placeholder='Type here!'
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
                           multiline={true}
                           borderBottomColor="black"
                           borderBottomWidth={33}
                />
            </View>
        );
    }
}

