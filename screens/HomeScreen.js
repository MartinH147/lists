import  { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button, SafeAreaView, Alert, ScrollView } from 'react-native';
import WebView from 'react-native-webview';

export default function HomeScreen({navigation}) {
    let screen = 'home'
    let lists = 
    [
        {
            type: 'wishlist',
            title: 'Birthday',
            description: 'Things I want for my birthday',
            items: [
                {
                    item: 'cake',
                    company: 'cake shop',
                    price: '$20',
                },
                {
                    item: 'party pies',
                    company: 'woolies',
                    price: '$10',
                },
            ]
        },
        {
            type: 'comparison',
            title: 'Christmas',
            description: 'Things I want for christmas',
            items: [
                {
                    item: 'motorbike',
                    company: 'Kawasaki',
                    price: '$20000',
                },
                {
                    item: 'car',
                    company: 'Toyota',
                    price: '$10000',
                },
            ]
        }
    ]


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Lists
            </Text>
            <View style={styles.header}/>
            <TouchableOpacity style={styles.newListTag} onPress={() => navigation.navigate('newList')}>
                <Image style={styles.plus} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/17/17128.png' }} />
            </TouchableOpacity>
            { screen == 'home' ? 
                <ScrollView style={styles.lists} contentContainerStyle={styles.scroll}>
                    {lists.map((list, i) => (
                        <View key={i} style={styles.listSpace}>
                            <TouchableOpacity  style={styles.listBox} onPress={() => navigation.navigate('lists' , list)} >
                                <Image style={styles.listImage} source={{ uri: 'https://picsum.photos/200/300' }}/>
                                <Text style={styles.listName}>{list.title}</Text>
                            </TouchableOpacity>   
                        </View>    
                    ))}
                </ScrollView>    
            : null }
            { screen == 'welcome' ? 
                <View style={styles.lists}>
                    <Text style={styles.text}> Welcome to Lists! {'\n'} Lists is ... </Text>
                </View>   
            : null }    
        </SafeAreaView>
    );
}   

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignContent: 'center',
      justifyContent: 'flex-start',
    },
    header: {
        width: '100%',
        height: 107,
        backgroundColor: '#3498db',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 0,
        zIndex: 1,
        elevation: 1,
        position: 'absolute',
    },
    title: {
        zIndex: 2,
        elevation: 2,
        fontSize: 50,
        left: 20,
        top: 10,
        color: '#fff',
    },
    newListTag: {
        width: 70,
        height: 70,
        backgroundColor: '#2980b9',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        zIndex: 2,
        elevation: 2,
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 10,
        top: 25,
    },
    plus: {
        height: 30,
        width: 30,
        zIndex: 4,
        elevation: 4,
        backgroundColor: '#00000000',
        alignSelf: 'center',
        top: 20,
      },
    lists: {
        position: 'absolute',
        height: '86.82%',
        width: '100%',
        backgroundColor: '#fff',
        top: 107,
    },
    scroll: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    listSpace: {
        width: '82.6%',
        height: 72,
        backgroundColor: 'white',
        zIndex: 2,
        elevation: 2,
        alignContent: 'flex-start',
        flexDirection: 'row',
        top: 33,
    },
    listBox: {
        width: '100%',
        height: 52,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: {width: 1.5, height: 1.5},
        borderRadius: 5,
        zIndex: 3,
        elevation: 3,
        alignContent: 'center',
        flexDirection: 'row',
        paddingVertical: 0,
    },
    listImage: {
        width: 42,
        height: 42,
        borderRadius: 5,
        left: 6,
        top: 5,
    },
    listName: {
        color: '#707070',
        fontSize: 30,
        left: 10,
        top: 8,
    },
    text: {
        fontSize: 30,
        bottom: 30,
    },
  });