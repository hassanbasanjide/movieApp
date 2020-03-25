import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform
} from "react-native";
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import Login from "../Screens/Loginscreen";
import nowPlaying from "../Screens/nowPlaying";
import DetailComponents from "../Screens/MovieDetail";
import { version } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import popular from "../Screens/popular";
import topRatad from "../Screens/topRatad";
import latestScreen from '../Screens/latest';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const NowPlaying = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="nowPlaying" component={nowPlaying} />
      <Stack.Screen name="DetailComponents" component={DetailComponents} />
    </Stack.Navigator>
  );
};

const Latest = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="latest" component={latest} />
      <Stack.Screen name="DetailComponents" component={DetailComponents} />
    </Stack.Navigator>
  );
};
const Popular = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="popular" component={popular} />
      <Stack.Screen name="DetailComponents" component={DetailComponents} />
    </Stack.Navigator>
  );
};
const TopRatad = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="topRatad" component={topRatad} />
      <Stack.Screen name="DetailComponents" component={DetailComponents} />
    </Stack.Navigator>
  );
};
const LatestScreen = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="latest" component={latestScreen} />
      <Stack.Screen name="DetailComponents" component={DetailComponents} />
    </Stack.Navigator>
  );
};

const tabSection = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "orange",
        inactiveTintColor: "white",
        tabStyle: {
          backgroundColor: "hsl(290, 20%, 20%)"
        }
      }}
    >
       <Tab.Screen name="nowPlaying" component={NowPlaying} />
       <Tab.Screen name="popular" component={Popular} /> 
      <Tab.Screen name="topRatad" component={TopRatad} />  
      <Tab.Screen name="latest" component={LatestScreen} /> 
    </Tab.Navigator>
  );
};

const totalApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="total" component={tabSection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    marginLeft: 10,
    justifyContent: "space-between"
  },
  eachContainer: {
    marginHorizontal: 16
  }
});

export default totalApp;
