import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/LoginScreen';
import PrimeScreen from '../Screens/PrimeScreen';

const Stack=createStackNavigator();

const Stack1Screen=props=>{


    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="loginScreen" component={Login} />
                <Stack.Screen name="primeScreen" component={PrimeScreen} />
            </Stack.Navigator>
         
        </NavigationContainer>
    )


};


export default Stack1Screen;