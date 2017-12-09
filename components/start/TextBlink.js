import React, {Component} from 'react';
import {Text} from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        };

        let taskToDo = () => {
            this.setState(previous => {
                return {showText: !previous.showText}
            });
        };

        const interval = 1000;
        setInterval(taskToDo, interval);
    }

    render() {
        let textToShow = this.state.showText ? this.props.inputText : " ";
        return (
            <Text>{textToShow}</Text>
        );
    }
};


class TextBlink extends Component {
    render() {
        let message = '\n\nHello, I\'m blinking!!!';
        return (
            <Blink inputText={message}/>
        );
    }
}

export default TextBlink;