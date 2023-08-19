import React from 'react'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* Add more screens here */}
        </Stack.Navigator>
    );
}

export default Navigation
