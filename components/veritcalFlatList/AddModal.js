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
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native';

import Button from 'react-native-button';
import Modal from 'react-native-modalbox';
import flatListData from './flatListData';


var screen = Dimensions.get('window'); // screen from device
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFoodName: '',
            newFoodDescription: ''
        };
    }

    showAddModal = () => { // return model component, this function allows to call the component
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
    }

    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 40 : 0, //
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    //alert("Modal closed");
                }}
            >
                <Text style={{ // caption of the modal screen!
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 20
                }}>New food's information</Text>
                <TextInput
                    style={{ // input element, for food's name
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({newFoodName: text})}
                    placeholder="Enter new food's name"
                    value={// need add state property to store current name
                        this.state.newFoodName}
                />
                <TextInput
                    style={{ // input element, for food's description
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}

                    onChangeText={(text) => this.setState({newFoodDescription: text})}
                    placeholder="Enter new food's description"
                    value={ // need add state property to store current description
                        this.state.newFoodDescription }
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
                        if (this.state.newFoodName.length == 0 || this.state.newFoodDescription.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        const newKey = this.generateKey(24);
                        const newFood = {
                            key: newKey,
                            name: this.state.newFoodName,
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg",
                            foodDescription: this.state.newFoodDescription
                        };
                        flatListData.push(newFood);
                        this.props.parentFlatList.refreshFlatList(newKey);
                        this.refs.myModal.close();
                    }}>
                    Save
                </Button>
            </Modal>
        );
    }
}