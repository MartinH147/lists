import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button, SafeAreaView, Alert, ScrollView } from 'react-native';

export default function ListsScreen({navigation}) {
  let listType = 'wishlist'
  let listBlank = false
  let listMode = 'view'
  if (listMode == 'view') {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.headerWrapper}>
            <Image
            style={styles.listImage}
            source={{ uri: 'https://picsum.photos/200/300' }} />
        </View>
        <View style={styles.header1}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
                <Text style={styles.backButton}> Lists </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.threeDots} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2467/2467852.png'}} />
            </TouchableOpacity>  
            </View>
        </View>
        <ScrollView style={styles.list}>
            <View style={styles.header2}>
                <Text style={styles.title}> List Title </Text>
                <Text style={styles.description}> List description </Text>
            </View>
            <Text style={styles.text}> Woohoo! You've made a new list! </Text>
        </ScrollView>
        <View style={styles.footerWrapper}>
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('web')}>
            <Image style={styles.plus} source={{ uri: 'https://cdn-icons.flaticon.com/png/512/3018/premium/3018447.png?token=exp=1649479759~hmac=e5594a5ab77c16362e00ebd099e50a07' }} />
            </TouchableOpacity>    
        </View>
        <StatusBar style="auto" />
        </SafeAreaView>
    );
  }
  if (listMode == 'edit') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerWrapper}>
          <Image
            style={styles.listImage}
            source={{ uri: 'https://picsum.photos/200/300' }} />
            <Image
              style={styles.editIcon}
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828911.png' }} />
        </View>
        <View style={styles.header1}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
              <Text style={styles.backButton}> Lists </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.threeDots} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2467/2467852.png'}} />
            </TouchableOpacity>  
          </View>
        </View>
        <ScrollView style={styles.list}>
        <View style={styles.header2}>
          <Text style={styles.title}> List Title </Text>
          <Text style={styles.description}> List description </Text>
        </View>
        <Text style={styles.text}> No items </Text>
      </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  header1: {
    width: '100%',
    height: 63,
    backgroundColor: '#2980b9',
    zIndex: 2,
    elevation: 2,
  },
  buttonContainer: {
    height: 63,
    width: '90%',
    zIndex: 3,
    elevation: 3,
    position: 'absolute',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: '5%',
  },
  backButton: {
    zIndex: 3,
    elevation: 3,
    position: 'relative',
    color: 'white',
    fontSize: 20,
  },
  threeDots: {
    height: 14,
    width: 52,
    zIndex: 3,
    elevation: 3,
    position: 'relative',
  },
  header2: {
    width: '100%',
    height: 161,
    backgroundColor: '#3498db',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 100,
    shadowRadius: 10,
    zIndex: 1,
    elevation: 1,
    flexGrow: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    zIndex: 3,
    elevation: 3,
    color: 'white',
    fontSize: 40,
  },
  description: {
    zIndex: 3,
    elevation: 3,
    color: 'white',
    fontSize: 16,
  },
  addButton: {
    height: 80,
    width: 80,
    backgroundColor: '#05be70',
    borderRadius: 40,
    position: 'absolute',
    bottom: 26,
    right: 21,
    zIndex: 1,
    elevation: 1,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 5},
  },
  plus: {
    height: 60,
    width: 60,
    zIndex: 4,
    elevation: 4,
    backgroundColor: '#00000000',
    alignSelf: 'center',
    top: 10,
  },
  listImage: {
    height: 80,
    width: 80,
    position: 'absolute',
    alignSelf: 'center',
    top: 14,
    borderRadius: 5,
  },
  headerWrapper: {
    zIndex: 3,
    elevation: 3,
  },
  list: {
    flexGrow: 1,
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    top: '50%',
  },
  footerWrapper: {
    height: 0,
    flexGrow: 0,
    position: 'relative',
  },
  editIcon: {
    height: 45,
    width: 45,
    zIndex: 5,
    elevation: 5,
    position: 'absolute',
    backgroundColor: '#00000000',
    alignSelf: 'center',  
    top: 33.5,
  },
  cross: {
    height: 21,
    width: 21,
    alignSelf: 'center',
    top: 7,
  },
});