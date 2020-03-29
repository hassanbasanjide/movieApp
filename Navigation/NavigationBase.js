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
import DetailComponents from "../Screens/MovieDetail";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PopularMovie from "../Screens/popular";
import NowPlayingMovie from "../Screens/nowPlaying";
import TopRatedMovie from "../Screens/topRatad";
import LatestMovie from "../Screens/latest";
import LatestTv from "../Screens/tvScreens/LatestTv";
import NowOnAirTv from "../Screens/tvScreens/NowOnAirTv";
import PopularTv from "../Screens/tvScreens/PopularTv";
import TopRatedTv from "../Screens/tvScreens/TopRatedTv";
import LoginScreen from '../Screens/LoginScreen';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MovieTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "orange",
        inactiveTintColor: "gray",
        tabStyle: {
          backgroundColor: "hsl(290, 20%, 15%)",
          paddingTop: 35
        },
        labelStyle: {
          fontSize: 11
        }
      }}
    >
      <Tab.Screen name="nowPlaying" component={NowPlayingMovie} />
      <Tab.Screen name="popular" component={PopularMovie} />
      <Tab.Screen name="topRatad" component={TopRatedMovie} />
      <Tab.Screen name="latest" component={LatestMovie} />
    </Tab.Navigator>
  );
};

const tvTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "orange",
        inactiveTintColor: "gray",
        tabStyle: {
          backgroundColor: "hsl(290, 20%, 15%)",
          paddingTop: 35
        },
        labelStyle: {
          fontSize: 11
        }
      }}
    >
      <Tab.Screen name="nowPlaying" component={NowOnAirTv} />
      <Tab.Screen name="popular" component={PopularTv} />
      <Tab.Screen name="topRatad" component={TopRatedTv} />
      <Tab.Screen name="latest" component={LatestTv} />
    </Tab.Navigator>
  );
};

const Categories = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      tabBarOptions={{
        activeTintColor: "orange",
        inactiveTintColor: "gray",
        tabStyle: {
          backgroundColor: "hsl(290, 20%, 15%)"
        }
      }}
    >
      <Tab.Screen name="Movie" component={MovieTab} />
      <Tab.Screen name="TV" component={tvTab} />
    </Tab.Navigator>
  );
};

const totalApp = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
          <Stack.Screen name="loginScreen" component={LoginScreen} />
        <Stack.Screen name="categories" component={Categories} />
        <Stack.Screen name="DetailComponents" component={DetailComponents} />
      
        
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
