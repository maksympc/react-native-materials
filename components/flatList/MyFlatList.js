import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet, Image, ActivityIndicator} from 'react-native'
import flatListData from './FlatListData'


class FlatListItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    render() {
        return (
            <View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'brown',
                    backgroundColor: 'mediumseagreen'
                }}>
                    <Image style={{width: 100, height: 100, margin: 5}}
                           source={{uri: this.props.item.imageUrl}}
                           onLoadStart={() => {
                               this.setState({loading: true})
                           }}
                           onLoadEnd={() => {
                               this.setState({loading: false})
                           }}
                    >
                    </Image>
                    <ActivityIndicator animating={this.state.loading}/>
                    <View style={{flex: 1, flexDirection: 'column', height: 120}}>
                        <Text style={style.flatListItem}>
                            {this.props.item.name}
                        </Text>
                        <Text style={style.flatListItem}>
                            {this.props.item.price}
                        </Text>
                        <Text style={style.flatListItem}>
                            {this.props.item.foodDescription}
                        </Text>
                    </View>
                </View>
                <View style={{height: 1, backgroundColor: 'white'}}>
                </View>
            </View>
        );
    }
}

export default class MyFlatList extends Component {
    render() {
        return (
            <View style={{flex: 1, marginTop: 22}}>
                <FlatList
                    data={flatListData}
                    renderItem={({item, index}) => {
                        //console.log('Item = ' + JSON.stringify(item) + ', index = ' + index);
                        return (<FlatListItem item={item}
                                              index={index}></FlatListItem>)
                    }}
                >
                </FlatList>
            </View>
        );
    }
}

const style = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 20,
    }
})