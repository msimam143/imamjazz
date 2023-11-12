import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screen/Home';
import Setting from './src/screen/Setting';

const Tab = createBottomTabNavigator();

function Mytabs() {
  return (
    <Tab.Navigator
    screenOptions={{ 
      headerTintColor: 'White',
      headerStyle: { backgroundColor: 'blue' },
     }} 
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="settings" component={Setting} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Mytabs />
    </NavigationContainer>
  );
}