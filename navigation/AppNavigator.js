import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#FFD700' } }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Live Metal Market' }} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
}