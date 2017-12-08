import React, {Component} from 'react';
import {View} from 'react-native';

class FixedDimension extends Component {
    render() {
        return (
            //   <View style={{flex: 1}}>
            <View style={{height: 500}}>
                <View style={{flex: 20, backgroundColor: 'aquamarine'}}/>
                <View style={{flex: 80, backgroundColor: 'mediumaquamarine'}}/>
                <View style={{height: 100, backgroundColor: 'cyan'}}/>
            </View>
        );
    }
}

export default FixedDimension;