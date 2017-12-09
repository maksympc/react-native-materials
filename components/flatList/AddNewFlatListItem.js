import React, {Component} from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Image,
    ActivityIndicator,
    Alert,
    Platform,
    TouchableOpacity
} from 'react-native'
import flatListData from './FlatListData'
import Swipeout from 'react-native-swipeout'
import AddModal from "./AddModal";

class FlatListItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            activeRowKey: null,
        }
    }

    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                this.setState({activeRowKey: null});
            }, // when it moves to close
            onOpen: (secId, rowId, direction) => {
                this.setState({activeRowKey: this.props.item.key});
            }, // when we move to open (from right to left) this item,
            right: [// right, new working area, that appears after we swipe this element, in my case it's a Delete button!
                {
                    onPress: () => {
                        const deletingRowKey = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure want to delete ?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {
                                    text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.index, 1); // delete item
                                        // should refresh parent FlatList element
                                        this.props.parentFlatList.refreshFlatList(deletingRowKey);
                                    }
                                }
                            ])
                    },
                    text: 'Delete', type: 'delete'
                },
            ],
            rowId: this.props.index, // index, that describe current item
            sectionID: 1
        }
        return (
            <Swipeout {...swipeSettings}>
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
            </Swipeout>
        );
    }
}

export default class AddNewFlatListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deletedRowKey: null
        }
        //this._onPressAdd = this._onPressAdd().bind(this); // bind "this" to AddNewFlatListItem element
    }

    refreshFlatList = (deletedKey) => { // refres by changing state
        this.setState((prevState) => {
            return {deletedRowKey: deletedKey}
        })
    }

    _onPressAdd() {
        alert('You add Item!')
    }

    render() {
        return (
            <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 20 : 0}}>
                <View style={{
                    height: 64,
                    backgroundColor: 'tomato',
                    justifyContent: 'center',
                    alignItems: "flex-end"
                }}>
                    <TouchableOpacity style={{marginRight: 10}}
                                      onPress={this._onPressAdd}
                                      activeOpacity={0.5}
                    >
                        <Image style={{width: 35, height: 35}}
                               source={require('../../resources/images/addbutton.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={flatListData}
                    renderItem={({item, index}) => {
                        //console.log('Item = ' + JSON.stringify(item) + ', index = ' + index);
                        return (<FlatListItem item={item}
                                              index={index}
                                              parentFlatList={this}>
                            {/*{make a flat list as props of FlatListItem}*/}
                        </FlatListItem>)
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