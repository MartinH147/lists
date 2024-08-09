import  { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button, SafeAreaView, Alert } from 'react-native';
import WebView from 'react-native-webview';

export default function WebScreen({navigation}) {
    const pgback = () => { WebView.goBack(); }; // calls function to go one page back in the webview history
    const pgforward = () => { WebView.goForward(); }; // calls function to go one page forward in the webview history

    function extractWebviewSource(data) {
        console.log(data)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button color='white' title='Back' onPress={() => navigation.goBack()} style={styles.backButton} />
                <Button color='white' title='OK' onPress={() => navigation.goBack()} style={styles.okButton} />
            </View>
            <View style={styles.header} />
            <View style={styles.webContainer}>
                <WebView style={styles.webView} source={{ uri: 'https://www.google.com/'}} injectedJavaScript={'window.ReactNativeWebView.postMessage(JSON.stringify(data))'} onMessage={extractWebviewSource}/>
            </View>
            <View style={styles.buttonBubble}>
                <Image style={styles.refresh} source={{ uri: ''}}/>
                <Image style={styles.previous} source={{ uri: ''}}/>
            </View>
            <StatusBar style='auto' />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignContent: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    backButton: {
        zIndex: 2,
        elevation: 2,
        position: 'relative',
    },
    okButton: {
        zIndex: 2,
        elevation: 2,
        position: 'relative',
    },
    buttonContainer: {
        height: 63,
        width: '90%',
        zIndex: 2,
        elevation: 2,
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: '5%',
        top: 5
    },
    header: {
        width: '100%',
        height: 63,
        backgroundColor: '#3498db',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        zIndex: 1,
        elevation: 1,
        position: 'absolute',
    },
    webContainer: {
        zIndex: 3,
        elevation: 3,
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 63,
    },
    webView: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
    },
    buttonBubble: {
        height: '100%',
    },
    refresh: {

    },
    previous: {

    },
  });