import  { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button, SafeAreaView, Alert, ScrollView, TextInput } from 'react-native';
import WebView from 'react-native-webview';

export default function NewList({navigation}) {
    const [text, onChangeText] = React.useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button color='#707070' title='Back' onPress={() => navigation.goBack()} style={styles.backButton} />
            </View>
            <TextInput 
                style={styles.inputText}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter list name here"/>
            <View style={styles.promptText}>
                <Text> Then choose a list type to create your list </Text>
            </View>
            <View style={styles.listTypes}>
                <TouchableOpacity style={styles.wishlistBox} onPress={() => navigation.navigate('blankList')}>
                    <Text style={styles.wishlistText}> Wishlist </Text>
                    <Image style={styles.wishlistIcon} source={{ uri: 'https://picsum.photos/200/300'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.comparisonBox} onPress={() => navigation.navigate('blankList')}>
                    <Text style={styles.comparisonText}> Comparison </Text>
                    <Image style={styles.comparisonIcon} source={{ uri: 'https://picsum.photos/200/300'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rankingBox} onPress={() => navigation.navigate('blankList')}>
                    <Text style={styles.rankingText}> Ranking </Text>
                    <Image style={styles.rankingIcon} source={{ uri: 'https://picsum.photos/200/300'}}/>
                </TouchableOpacity>
            </View>    
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      margin: 0,
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
        marginHorizontal: '6%',
        top: 5
    },
    backButton: {
        zIndex: 2,
        elevation: 2,
        position: 'relative',
    },
    inputText: {
        width: 310,
        height: 60,
        borderColor: '#707070',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontSize: 30,
        top: 50,
    },
    promptText: {
        top: 80,
        alignSelf: 'flex-start',
        marginHorizontal: '8%',        
    },
    listTypes: {
        height: 224,
        width: 310,
        justifyContent: 'space-between',
        top: 110,
    },
    wishlistBox: {
        height: 60,
        width: 310,
        backgroundColor: '#05be70',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    wishlistText: {
        fontSize: 25,
        color: 'white',
        marginHorizontal: 13,
    },
    wishlistIcon: {
        height: 39,
        width: 39,
        borderRadius: 3,
        marginHorizontal: 13,
    },
    comparisonBox: {
        height: 60,
        width: 310,
        backgroundColor: '#3498db',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    comparisonText: {
        fontSize: 25,
        color: 'white',
        marginHorizontal: 13,
    },
    comparisonIcon: {
        height: 39,
        width: 39,
        borderRadius: 3,
        marginHorizontal: 13,
    },
    rankingBox: {
        height: 60,
        width: 310,
        backgroundColor: '#e74c3c',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rankingText: {
        fontSize: 25,
        color: 'white',
        marginHorizontal: 13,
    },
    rankingIcon: {
        height: 39,
        width: 39,
        borderRadius: 3,
        marginHorizontal: 13,
    },
});