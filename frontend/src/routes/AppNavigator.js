import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from '../screens/Landing/LandingPage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Landing'>
        <Stack.Screen name="Landing" component={LandingPage} />
    </Stack.Navigator>
  )
}

export default AppNavigator