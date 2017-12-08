import React, {Component} from 'react';
import {View, Text} from 'react-native';

class JustifyContentExample extends Component {
    render() {
        return (
            <View style={{
                flex: 1, flexDirection: 'row', backgroundColor: 'aquamarine', height: 500,
                //justifyContent: 'flex-end',
                //justifyContent: 'flex-start',
                //justifyContent: 'space-around',
                //justifyContent: 'space-between',
                justifyContent: 'center'
            }}>
                <Text style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'red',

                }}/>
                <Text style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'green',

                }}/>
                <Text style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'blue',

                }}/>
            </View>
        );
    }
}

export default JustifyContentExample;