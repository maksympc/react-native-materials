import React, {Component} from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions,
    TextInput,
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import {updateDataToServer} from './Server';


var screen = Dimensions.get('window');
export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albumId: '',
            title: ''
        };
    }

    showEditModal = (editingPhoto, flatlistItem) => {
        console.log(`#showEditModal: editingPhoto:${JSON.stringify(editingPhoto)}`);
        this.setState({
            id: editingPhoto.id,
            albumId: editingPhoto.albumId,
            title: editingPhoto.title,
            flatlistItem: flatlist0Item,
        });
        console.log(`#showEditModal: after setting state properties:${JSON.stringify(this.state)}`);
        this.refs.myModal.open();
    };
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
    };

    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>Edit album's information</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({albumId: text})}
                    placeholder="Enter albumId's"
                    value={this.state.albumId.toString()}
                />
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}

                    onChangeText={(text) => this.setState({title: text})}
                    placeholder="Enter photo's title"
                    value={this.state.title}
                />
                <Button
                    style={{fontSize: 18, color: 'white'}}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                        if (this.state.albumId.length == 0 || this.state.title.length == 0) {
                            alert("You must enter albumId  and title");
                            return;
                        }
                        // //Update existing Food
                        // var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        // if (foundIndex < 0) {
                        //     return; //not found
                        // }
                        // flatListData[foundIndex].name = this.state.foodName;
                        // flatListData[foundIndex].foodDescription = this.state.foodDescription;
                        // //Refresh flatlist item
                        // this.state.flatlistItem.refreshFlatListItem();
                        let params = {
                            albumId: this.state.albumId,
                            id: this.state.id,
                            title: this.state.title,
                            url: "http://placehold.it/600/92c952",
                            thumbnailUrl: "http://placehold.it/150/92c952"
                        };

                        updateDataToServer(params).then((result) => {
                            console.log('EditModal #onPress "SAVE" button, after getting response from remote server:' + JSON.stringify(result));
                            console.log("result.id:(" + result.id + ") == this.id:(" + this.id + ") ==> ");
                            console.log(result.id == this.state.id)
                            if (result.id == this.state.id) {
                                this.state.flatListItem.refreshFlatListItem({
                                    albumId: this.state.albumId,
                                    id: this.state.id,
                                    title: this.state.title,
                                    url: "http://placehold.it/600/92c952",
                                    thumbnailUrl: "http://placehold.it/150/92c952"
                                });
                                alert("Update is successfull, but it can't be shown at list, as used jsonplacehodel mock example!!!");
                                this.refs.myModal.close();
                            }
                        }).catch((error) => {
                            console.log("editButton error!" + JSON.stringify(error));
                            alert("editButton error!" + JSON.stringify(error));
                            this.refs.myModal.close();
                        });
                    }}>
                    Save
                </Button>
            </Modal>
        );
    }
}


