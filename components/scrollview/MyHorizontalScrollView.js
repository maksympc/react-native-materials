import React, {Component} from 'react';
import {
    ScrollView,
    Image, Text, View, TextInput,
    Dimensions
} from 'react-native'


export default class MyHorizontalScrollView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    render() {
        let screenWidth = Dimensions.get('window').width;
        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showHorizontalScrollIndicator={true}
                scrollIndicatorInsets={{top: 10, bottom: 10, right: 10, left: 10}}
                onMomentumScrollBegin={() => { // at the start of scrolling
                    //alert('Begin Scroll');
                }}
                onMomentumScrollEnd={() => { // at the end of scrolling
                    //alert('End Scroll');
                }}
                onScroll={(event) => {
                    let xx = Math.round(event.nativeEvent.contentOffset.x);
                    let yy = Math.round(event.nativeEvent.contentOffset.y);

                    this.setState(() => {
                        return {x: xx, y: yy}
                    });
                    let logData = 'Scrolled to x=' + xx + ', y=' + yy;
                    console.log(logData);
                }}
                scrollEventThrottle={10}
            >
                <View style={{
                    backgroundColor: 'lightblue',
                    flex: 1, // height (as default) to be full screen
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{fontSize: 20, color: 'white'}}>Screen 1</Text>
                    <Text style={{fontSize: 20, color: 'white'}}>x:{this.state.x} y:{this.state.y}</Text>
                </View>
                <View style={{
                    backgroundColor: 'tomato',
                    flex: 1, // height (as default) to be full screen
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{fontSize: 20, color: 'white'}}>Screen 2</Text>
                    <Text style={{fontSize: 20, color: 'white'}}>x:{this.state.x} y:{this.state.y}</Text>
                </View>
                <View style={{
                    backgroundColor: '#663399',
                    flex: 1, // height (as default) to be full screen
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{fontSize: 20, color: 'white'}}>Screen 3</Text>
                    <Text style={{fontSize: 20, color: 'white'}}>x:{this.state.x} y:{this.state.y}</Text>
                </View>
            </ScrollView>
        );
    }
}
