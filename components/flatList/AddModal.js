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
    TouchableOpacity
} from 'react-native';

import Button from 'react-native-button';
import Modal from 'react-native-modalbox';
import flatListData from './FlatListData';


var screen = Dimensions.get('window');

export default class AddModal extends Component {

    constructor(props) {
        super(props);
    }

    showAddModal = () => {
        this.refs.myModal.open(); // show modal
    }

    render() {
        return (
            <Modal
                ref={'myModal'}
                style={{
                justifyContent: 'center',
                borderRadius: Platform.os === 'ios' ? 30 : 0,
                shadowRadius: 10,
                width: screen.width - 80,
                height: 280
            }}
                   position='center'
                   backdrop={true}
                   onClosed={() => {
                       alert('Modal closed!');
                   }}
            >
                <Text>New food's info</Text>
            </Modal>
        );
    }
}



