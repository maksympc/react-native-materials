import React, {Component} from 'react';
import {Text} from 'react-native';

export default class Hello extends Component {
    render() {
        let greeting = '\n\nHello, world!';
        return (
            <Text>{greeting}</Text>
        );
    }
}
