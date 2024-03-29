import React, {Component} from 'react';
import {
    AppRegistry,
    FlatList,
    StyleSheet,
    Text,
    SectionList,
    View,
    Image,
    Alert,
    Platform,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

import {sectionListData} from "./sectionListData";

class SectionHeader extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'rgb(77,120, 140)',
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 10
                }}>{this.props.section.title}
                </Text>
            </View>
        );
    }
}

class SectionListItem extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'rgb(98, 197, 184)'
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'rgb(173, 252, 250)',
                    marginLeft: 20,
                    marginRight: 10,

                }}>{this.props.item.name}
                </Text>
                <Text style={{
                    fontSize: 16,
                    marginLeft: 20,
                    marginRight: 10,
                    color: 'rgb(173, 252, 250)',
                }}>{this.props.item.description}
                </Text>
                <View style={{
                    backgroundColor: 'rgb(77,120, 140)',
                    height: 1,
                    margin: 4,
                    marginLeft: 20,
                    marginRight: 10
                }}>
                </View>
            </View>
        );
    }
}


export default class BasicSectionList extends Component {

    render() {
        return (
            <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 20 : 0}}>
                <SectionList
                    renderItem={({item, index}) => {
                        return (
                            <SectionListItem item={item} index={index}>
                            </SectionListItem>);
                    }}
                    renderSectionHeader={
                        ({section}) => {
                            return (<SectionHeader section={section}/>);
                        }}
                    sections={sectionListData}
                    keyExtractor={(item, index) => item.name}
                >

                </SectionList>
            </View>
        );
    }
}