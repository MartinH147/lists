import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useReducer } from 'react';
import ListsScreen from './screens/ListsScreen'
import WebScreen from './screens/WebScreen'
import HomeScreen from './screens/HomeScreen'
import NewList from './screens/NewList'
import BlankList from './screens/BlankList'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name='home'
          component={HomeScreen}
          options={{title: 'Home', headerShown: false}}
        />
        <Stack.Screen
          name='newList'
          component={NewList}
          options={{title: 'NewList', headerShown: false}}
        />
        <Stack.Screen
          name='blankList'
          component={BlankList}
          options={{title: 'BlankList', headerShown: false}}
        />  
        <Stack.Screen
          name='lists'
          component={ListsScreen}
          options={{title: 'Lists', headerShown: false}}
        />
        <Stack.Screen
          name='web'
          component={WebScreen}
          options={{title: 'Web', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {  
  return (  
    <MyStack/>
    );
}
