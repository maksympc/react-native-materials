import React, {Component} from 'react';
import {View, FlatList, Text, Platform, TextInput, TouchableHighlight, Image} from 'react-native';
import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDqYah10VhtLDVfzyICYxjb1OoiknV4P04",
    authDomain: "smartnotesdb.firebaseapp.com",
    databaseURL: "https://smartnotesdb.firebaseio.com",
    projectId: "smartnotesdb",
    storageBucket: "smartnotesdb.appspot.com",
    messagingSenderId: "611040739226",
    persistence: true,
};

const animalApp = firebase.initializeApp(config);
const rootRef = firebase.database().ref();
const animalRef = rootRef.child('animals');

export default class DatabaseComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            animals: [],
            newAnimalName: '',
            loading: false,
        });
    }

    componentDidMount() {
        animalRef.on('value', (childSnapshot) => {
            const animals = [];
            childSnapshot.forEach((doc) => {
                animals.push({
                    key: doc.key,
                    animalName: doc.toJSON().animalName
                });
                this.setState({
                    animals: animals,
                    loading: false,
                });
            });
        });
    }

    onPressAdd = () => {
        if (this.state.newAnimalName.trim() === '') {
            alert('Animal name is blank');
            return;
        }
        animalRef.push({
            animalName: this.state.newAnimalName
        });
    }

    render() {
        return (
            <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
                <View style={{
                    backgroundColor: 'green',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: 64
                }}>
                    <TextInput style={{
                        height: 40,
                        width: 200,
                        margin: 10,
                        padding: 10,
                        borderColor: 'white',
                        borderWidth: 1,
                        color: 'white'
                    }}
                               keyboardType='default'
                               placeholderTextColor='white'
                               placeholder='Enter animal name'
                               autoCapitalize='none'
                               onChangeText={
                                   (text) => {
                                       this.setState({newAnimalName: text});
                                   }
                               }
                               returnKeyType='done'
                    />
                    <TouchableHighlight
                        style={{marginRight: 10}}
                        underlayColor='tomato'
                        onPress={this.onPressAdd}
                    >
                        <Image
                            style={{width: 35, height: 35}}
                            source={require('../../resources/images/icons-add.png')}
                        />
                    </TouchableHighlight>
                </View>
                <FlatList
                    data={this.state.animals}
                    renderItem={({item, index}) => {
                        return (
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                margin: 10
                            }}>{index + 1}) {item.animalName}</Text>);
                    }}
                >
                </FlatList>
            </View>
        );
    }
}