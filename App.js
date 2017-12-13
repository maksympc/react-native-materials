// MAIN DOCUMENT
// import React, {Component} from 'react';
// import {Alert, View, Text, TextInput} from 'react-native';
// import {Button, ButtonGroup} from 'react-native-elements';
//
// // massage for user
// var GS = " ";
//
//
// export default class FlexDimensionsBasics extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//         }
//     }
//
//     /** checks password*/
//     checkPassword() {
//         console.log("#checkpassword, name:" + this.state.username + ' ' + " pass:" + this.state.password);
//         if (this.state.username == '' || this.state.username == undefined) {
//             GS = "Пожалуйста, введите имя!"
//             if (this.state.password == '' || this.state.password == undefined) {
//                 GS = GS.slice(0, GS.length - 1) + " и пароль!";
//             }
//         }
//         else if (this.state.password == '' || this.state.password == undefined) {
//             GS = 'Пожалуйста, введите пароль!';
//         }
//         else if (this.state.password == "admin") {
//             GS = this.state.username + ', добро пожаловать!';
//         }
//         else {
//             GS = "Неверный пароль!";
//         }
//         this.talkToUser(GS);
//     }
//
//     talkToUser(text) {
//         Alert.alert(text);
//     }
//
//     register() {
//         console.log("Sorry, registration is not suppported!");
//         GS = "Простите, регистрация пока невозможна!";
//         this.talkToUser(GS);
//     }
//
//     render() {
//         return (
//             <View style={{
//                 flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'powderblue'
//             }}>
//                 <Text style={{height: 50, fontSize: 20}}>Выполните вход:</Text>
//                 <View style={{borderWidth: 1, borderColor: 'gray', borderRadius: 5}}>
//                     <TextInput
//                         style={{paddingLeft: 10, height: 50, width: 250, fontSize: 20}}
//                         placeholder="username"
//                         onChangeText={(text) => this.setState({username: text})}
//                     />
//                 </View>
//                 <View
//                     style={{borderWidth: 1, borderTopWidth: 0, borderColor: 'gray', borderRadius: 5}}>
//                     <TextInput
//                         style={{paddingLeft: 10, height: 50, width: 250, fontSize: 20}}
//                         placeholder="password"
//                         secureTextEntry={true}
//                         onChangeText={(text) => this.setState({password: text})}
//                     />
//                 </View>
//                 <View style={{alignItems: 'flex-start', flexDirection: 'row'}}>
//                     <Button
//                         style={{paddingTop: 10, height: 30}}
//                         icon={{name: 'key', type: 'octicon'}}
//                         title='login'
//                         onPress={() => {
//                             this.setState({username: this.state.username, password: this.state.password});
//                             this.checkPassword();
//                         }}/>
//                     <Button
//                         style={{paddingTop: 10, height: 30}}
//                         icon={{name: 'plug', type: 'octicon'}}
//                         title='register'
//                         onPress={() => {
//                             this.setState({username: this.state.username, password: this.state.password});
//                             this.register();
//                         }}/>
//                 </View>
//             </View>
//         )
//     }
// }


// //TextBlink example
// import React, {Component} from 'react';
// import TextBlink from './components/TextBlink'
//
// export default class App extends Component {
//     render() {
//         return (
//             <TextBlink/>
//         );
//     }
// }

// //FixedDimension style flex, screen positioning
// import React, {Component} from 'react';
// import FixedDimension from './components/FixedDimension'
//
// export default class App extends Component {
//     render() {
//         return (
//             <FixedDimension/>
//         );
//     }
// }


// //FlexExample
// import React, {Component} from 'react';
// import FlexExample from './components/screenPositioning/FlexExample'
//
// export default class App extends Component {
//     render() {
//         return (
//             <FlexExample/>
//         );
//     }
// }

// //JustifyContentExample
// import React, {Component} from 'react';
// import JustifyContentExample from './components/screenPositioning/JustifyContentExample'
//
// export default class App extends Component {
//     render() {
//         return (
//             <JustifyContentExample/>
//         );
//     }
// }

// //EmailPasswordForm
// import React, {Component} from 'react';
// import EmailPasswordForm from './components/textInputs/EmailPasswordForm'
//
// export default class App extends Component {
//     render() {
//         return (
//             <EmailPasswordForm/>
//         );
//     }
// }


// //MultilineTextInputs
// import React, {Component} from 'react';
// import MultilineTextInputs from './components/textInputs/MultilineTextInputs'
//
// export default class App extends Component {
//     render() {
//         return (
//             <MultilineTextInputs/>
//         );
//     }
// }

// //CustomTouchable
// import React, {Component} from 'react';
// import CustomTouchable from './components/touchables/CustomTouchable'
//
// export default class App extends Component {
//     render() {
//         return (
//             <CustomTouchable/>
//         );
//     }
// }

// //MyVerticalScrollView
// import React, {Component} from 'react';
// import MyVerticalScrollView from './components/scrollview/MyVerticalScrollView'
//
// export default class App extends Component {
//     render() {
//         return (
//             <MyVerticalScrollView/>
//         );
//     }
// }


// //MyHorizontalScrollView
// import React, {Component} from 'react';
// import MyHorizontalScrollView from './components/scrollview/MyHorizontalScrollView'
//
// export default class App extends Component {
//     render() {
//         return (
//             <MyHorizontalScrollView/>
//         );
//     }
// }

// //MyFlatList
// import React, {Component} from 'react';
// import MyFlatList from './components/veritcalFlatList/MyFlatList'
//
// export default class App extends Component {
//     render() {
//         return (
//             <MyFlatList/>
//         );
//     }
// }

// //DeleteFlatListItem
// import React, {Component} from 'react';
// import DeleteItemFlatList from './components/veritcalFlatList/DeleteItemFlatList'
//
// export default class App extends Component {
//     render() {
//         return (
//             <DeleteItemFlatList/>
//         );
//     }
// }

// //ViewAboveFlatList
// import React, {Component} from 'react';
// import ViewAboveFlatList from './components/veritcalFlatList/ViewAboveFlatList'
//
// export default class App extends Component {
//     render() {
//         return (
//             <ViewAboveFlatList/>
//         );
//     }
// }

// //AddNewFlatListItem
// import React, {Component} from 'react';
// import AddNewFlatListItem from './components/veritcalFlatList/AddNewFlatListItem'
//
// export default class App extends Component {
//     render() {
//         return (
//             <AddNewFlatListItem/>
//         );
//     }
// }

// //BasicFlatList
// import React, {Component} from 'react';
// import BasicFlatList from './components/veritcalFlatList/BasicFlatList'
//
// export default class App extends Component {
//     render() {
//         return (
//             <BasicFlatList/>
//         );
//     }
// }

// //HorizontalFlatList
// import React, {Component} from 'react';
// import HorizontalFlatList from './components/horizontalFlatList/HorizontalFlatList'
//
//
// export default class App extends Component {
//     render() {
//         return (
//             <HorizontalFlatList/>
//         );
//     }
// }

// //BasicSectionList
// import React, {Component} from 'react';
// import BasicSectionList from './components/sectionList/BasicSectionList'
//
// export default class App extends Component {
//     render() {
//         return (
//             <BasicSectionList/>
//         );
//     }
// }

// //BasicFlatList
// import React, {Component} from 'react';
// import BasicFlatList from './components/network/BasicFlatList'
//
// export default class App extends Component {
//     render() {
//         return (
//             <BasicFlatList/>
//         );
//     }
// }

//LoginComponent
import React, {Component} from 'react';
import LoginComponent from './components/firebase/LoginComponent'

export default class App extends Component {
    render() {
        return (
            <LoginComponent/>
        );
    }
}