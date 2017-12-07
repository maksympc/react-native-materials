import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Button, ButtonGroup} from 'react-native-elements';

// massage for user
var GS = " ";


export default class FlexDimensionsBasics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    /** checks password*/
    checkPassword() {
        console.log("#checkpassword, name:" + this.state.username + ' ' + " pass:" + this.state.password);
        if (this.state.username == '' || this.state.username == undefined) {
            GS = "Пожалуйста, введите имя!"
            if (this.state.password == '' || this.state.password == undefined) {
                GS = GS.slice(0, GS.length - 1) + " и пароль!";
            }
        }
        else if (this.state.password == '' || this.state.password == undefined) {
            GS = 'Пожалуйста, введите пароль!';
        }
        else if (this.state.password == "admin") {
            GS = this.state.username + ', добро пожаловать!';
        }
        else {
            GS = "Неверный пароль!";
        }
    }

    render() {
        return (
            <View style={{
                flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'skyblue'
            }}>
                <Text style={{height: 50, fontSize: 20}}>Выполните вход:</Text>
                <View style={{borderWidth: 1, borderColor: 'gray', borderRadius: 5}}>
                    <TextInput
                        style={{height: 50, width: 250, fontSize: 20}}
                        placeholder="username"
                        onChangeText={(text) => this.setState({username: text})}
                    />
                </View>
                <View style={{borderWidth: 1, borderTopWidth: 0, borderColor: 'gray', borderRadius: 5}}>
                    <TextInput
                        style={{height: 50, width: 250, fontSize: 20}}
                        placeholder="password"
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({password: text})}
                    />
                </View>
                <Button
                    style={{paddingLeft: 100, paddingTop: 10, height: 30}}
                    icon={{name: 'key', type: 'octicon'}}
                    title='login'
                    onPress={() => {
                        this.setState({username: this.state.username, password: this.state.password});
                        this.checkPassword();
                    }}/>
                <View style={{padding: 40}}>
                    <Text style={{fontSize: 20}}>{GS}</Text>
                </View>
            </View>
        )
    }
}


