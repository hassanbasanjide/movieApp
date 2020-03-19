import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Loginscreen';
import PrimeScreen from '../Screens/PrimeScreen';

const Stack=createStackNavigator();

const Stack1Screen=props=>{


    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{  
                headerStyle:{
        backgroundColor:'hsl(290, 20%, 20%)'
      },
      headerTintColor:'white'
}}>
                <Stack.Screen name="loginScreen" component={Login} />
                <Stack.Screen name="primeScreen" component={PrimeScreen} options={{
                    headerLeft:null
                }}/>
            </Stack.Navigator>
         
        </NavigationContainer>
    )


};


export default Stack1Screen;