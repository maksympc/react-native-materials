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


const apiRootUrl = 'https://jsonplaceholder.typicode.com/photos/';

async function getDataFromServer() { // send and receive data from server
    try {
        let response = await fetch(apiRootUrl);
        let responseJson = await response.json();
        return responseJson; // can be trouble
    }
    catch (error) {
        console.error('#getDataFromServer Error is :' + JSON.stringify(error));
    }
}

async function insertDataToServer(params) {
    console.log("#insertDataToServer 1/" + JSON.stringify(params));
    try {
        let response = await fetch(apiRootUrl, {
            method: 'POST',
            body: JSON.stringify(params),
        });
        let responseJson = await response.json(); // wait until finished
        console.log("#insertDataToServer 2/" + JSON.stringify(response));
        return responseJson;
    } catch (error) {
        console.log("insertDataToServer 3/ Error is :" + JSON.stringify(error));
    }
}

async function updateDataToServer(params) {
    console.log("#updateDataToServer before sending request:" + JSON.stringify(params));
    try {
        let response = await fetch(apiRootUrl + params.id, {
            method: 'PUT',
            body: JSON.stringify(params),
        });
        let responseJson = await response.json(); // wait until finished
        console.log("#updateDataToServer after receiving response:" + JSON.stringify(response));
        return responseJson;
    } catch (error) {
        console.log("FAILED #updateDataToServer! Error is :" + JSON.stringify(error));
    }
}

export {getDataFromServer};
export {insertDataToServer};
export {updateDataToServer};

