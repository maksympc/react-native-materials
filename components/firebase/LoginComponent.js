// var config = {
//     apiKey: "AIzaSyDqYah10VhtLDVfzyICYxjb1OoiknV4P04",
//     authDomain: "smartnotesdb.firebaseapp.com",
//     databaseURL: "https://smartnotesdb.firebaseio.com",
//     projectId: "smartnotesdb",
//     storageBucket: "smartnotesdb.appspot.com",
//     messagingSenderId: "611040739226"
// };
// firebase.initializeApp(config);
import React, {Component} from 'react';
import {
    Text,
    View,
    Platform,
    TextInput
} from 'react-native';

import Button from 'react-native-button';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDqYah10VhtLDVfzyICYxjb1OoiknV4P04",
    authDomain: "smartnotesdb.firebaseapp.com",
    databaseURL: "https://smartnotesdb.firebaseio.com",
    projectId: "smartnotesdb",
    storageBucket: "smartnotesdb.appspot.com",
    messagingSenderId: "611040739226"
};
firebase.initializeApp(config);


export default class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.unsubscriber = null;
        this.state = {
            isAuth: false, // re-render if changed!
            email: '',
            password: '',
            user: null,
        }
    }

    componentDidMount() {
        this.unsubscriber = firebase.auth().onAuthStateChanged((changedUser) => { // call this function, when user changed
            this.setState({user: changedUser});
        })
    }

    componentWillUnmount() {
        if (this.unsubscriber) {
            this.unsubscriber();
        }
    }

    onAnonymousLogin = () => {
        firebase.auth().signInAnonymously().then(() => {
            console.log("successFully login!!");
            this.setState({isAuth: true});
        }).catch((error) => {
            console.log(`Login failed. Error = ` + JSON.stringify(error))
        })
    };

    onLogin = () => {
        alert('on login action');
    };

    onRegister = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((loggedUser) => {
            this.setState({user: loggedUser});
            console.log("logged user:" + JSON.stringify(loggedUser));
        }).catch((error) => {
            console.log('Register fail with error:' + JSON.stringify(error));
        })
    };


    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', borderRadius: Platform.OS === 'ios' ? 25 : 0}}>
                <Text style={{margin: 40, fontSize: 20, textAlign: 'center'}}>login to FireBase!!!</Text>
                <Button containerStyle={{
                    padding: 10,
                    borderRadius: 4,
                    backgroundColor: 'cyan',
                }}
                        style={{fontSize: 18, color: 'white'}}
                        onPress={this.onAnonymousLogin}>
                    Login anonymous
                </Button>
                <Text
                    style={{margin: 20, fontSize: 15,}}>{this.state.isAuth == true ? 'Logged in anonymous' : ' '}</Text>

                <View style={{borderWidth: 1, borderColor: 'gray', borderRadius: 5}}>
                    <TextInput
                        style={{paddingLeft: 10, height: 50, width: 200, fontSize: 15}}
                        placeholder="input your email"
                        autoCapitalize='none'
                        keyboardType='email-address'
                        onChangeText={(text) => this.setState({email: text})}
                    />
                </View>
                <View style={{borderWidth: 1, borderTopWidth: 0, borderColor: 'gray', borderRadius: 5}}>
                    <TextInput
                        style={{paddingLeft: 10, height: 50, width: 200, fontSize: 15}}
                        placeholder="input your password"
                        secureTextEntry={true}
                        autoCapitalize='none'
                        keyboardType='default'
                        onChangeText={(text) => this.setState({password: text})}
                    />
                </View>
                <Text>email:{this.state.email}</Text>
                <Text>password:{this.state.password}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Button containerStyle={{
                        padding: 10,
                        borderRadius: 4,
                        margin: 10,
                        backgroundColor: 'green'
                    }} style={{fontSize: 17, color: 'white'}}
                            onPress={this.onLogin}
                    >
                        Login
                    </Button>
                    <Button containerStyle={{
                        padding: 10,
                        margin: 10,
                        borderRadius: 4,
                        backgroundColor: 'blue'
                    }}
                            style={{fontSize: 17, color: 'white'}}
                            onPress={this.onRegister}>
                        Register
                    </Button>
                </View>
            </View>
        );
    }
}