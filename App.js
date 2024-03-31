import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import HomeScreen from './Screens/Home'
import GPTScreen from './Screens/GptScreen';
import LoginScreen from './Screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GptScreen" component={GPTScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
