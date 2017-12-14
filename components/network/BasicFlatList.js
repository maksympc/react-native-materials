import React, {Component} from 'react';
import {
    AppRegistry,
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    Platform,
    TouchableHighlight,
    RefreshControl
} from 'react-native';

import Swipeout from 'react-native-swipeout';

import AddModal from './AddModal';
import EditModal from './EditModal';
import {getDataFromServer} from "./Server";


class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0,
            dataFromServer: [],
            item: {} // when item changed, state is changed and component is re-rendered
        };
    }

    refreshFlatListItem = (changedItem) => {
        this.setState({item: changedItem});
    }

    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({activeRowKey: null});
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({activeRowKey: this.props.item.id});
            },
            right: [
                {
                    onPress: () => {
                        // alert("Update");
                        //this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                        let selectedItem = this.state.item.id ? this.state.item : this.props.item; // get updated item in state
                        console.log("FlatListItem! at time, then edit button was pressed:"+JSON.stringify(selectedItem)); // works fine!
                        this.props.parentFlatList.refs.editModal.showEditModal(selectedItem, this);
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {
                                    text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.index, 1);
                                        //Refresh FlatList !
                                        this.props.parentFlatList.refreshFlatList(deletingRow);
                                    }
                                },
                            ],
                            {cancelable: true}
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
            <Swipeout {...swipeSettings}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'
                        backgroundColor: 'mediumseagreen'
                    }}>
                        <Image
                            source={{uri: this.props.item.thumbnailUrl}}
                            style={{width: 100, height: 100, margin: 5}}
                        >

                        </Image>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            height: 100
                        }}>
                            <Text
                                style={styles.flatListItem}>{this.state.item.id ? this.state.item.id : this.props.item.id}</Text>
                            <Text
                                style={styles.flatListItem}>{this.state.item.title ? this.state.item.title : this.props.item.title}</Text>
                        </View>
                    </View>
                    <View style={{
                        height: 1,
                        backgroundColor: 'white'
                    }}>

                    </View>
                </View>
            </Swipeout>

        );
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
});

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
            refreshing: false,
            dataFromServer: [],
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }

    componentDidMount() {
        this.refreshDataFromServer();
    }

    refreshDataFromServer = () => {
        this.setState({refreshing: true});
        getDataFromServer().then((data) => {
            this.setState({dataFromServer: data})
            this.setState({refreshing: false});
        }).catch((error) => {
            this.setState({dataFromServer: []});
            this.setState({refreshing: false});
            console.log('#refreshDataFromServer: error while fetching...!');
        });
    }

    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
        this.refs.flatList.scrollToEnd();
    }

    _onPressAdd() {
        // alert("You add Item");
        this.refs.addModal.showAddModal();
    }

    onRefresh = () => {
        this.refreshDataFromServer();
    }

    render() {
        return (
            <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 22 : 0}}>
                <View style={{
                    backgroundColor: 'tomato',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: 64
                }}>
                    <TouchableHighlight
                        style={{marginRight: 10}}
                        underlayColor='tomato'
                        onPress={this._onPressAdd}
                    >
                        <Image
                            style={{width: 35, height: 35}}
                            source={require('../../resources/images/icons-add.png')}
                        />
                    </TouchableHighlight>
                </View>
                <FlatList
                    ref={"flatList"}
                    // data={flatListData}
                    data={this.state.dataFromServer}
                    renderItem={({item, index}) => {
                        //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}>

                            </FlatListItem>);
                    }}
                    keyExtractor={(item, index) => {
                        return item.id
                    }}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}
                        />}
                >

                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this}>

                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}>

                </EditModal>
            </View>
        );
    }
}