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

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MovieNowPlayingStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="nowPlaying" component={NowPlayingMovie} />
      <Stack.Screen name="DetailComponents" component={DetailComponents} />
    </Stack.Navigator>
  );
};

const MovieLatestStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="latest" component={LatestMovie} />
      <Stack.Screen name="DetailComponents" component={DetailComponents} />
    </Stack.Navigator>
  );
};
const MoviePopularStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="popular" component={PopularMovie} />
      <Stack.Screen name="DetailComponents" component={DetailComponents} />
    </Stack.Navigator>
  );
};
const MovieTopRatedStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="topRatad" component={TopRatedMovie} />
      <Stack.Screen name="DetailComponents" component={DetailComponents} />
    </Stack.Navigator>
  );
};

const TvOnTheAirStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Now playing" component={NowOnAirTv} />
      <Stack.Screen name="DetailComponents" component={DetailComponents} />
    </Stack.Navigator>
  );
};

const TvPopularStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="popular" component={PopularTv} />
      <Stack.Screen name="DetailComponents" component={DetailComponents} />
    </Stack.Navigator>
  );
};

const TvTopRatedStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Top Rated" component={TopRatedTv} />
      <Stack.Screen name="DetailComponents" component={DetailComponents} />
    </Stack.Navigator>
  );
};

const TvLatestStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Latest" component={LatestTv} />
      <Stack.Screen name="DetailComponents" component={DetailComponents} />
    </Stack.Navigator>
  );
};

const MovieTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "orange",
        inactiveTintColor: "gray",
        tabStyle: {
          backgroundColor: "hsl(290, 20%, 20%)",
          paddingTop: 35
        },
        labelStyle: {
          fontSize: 11
        }
      }}
    >
      <Tab.Screen name="nowPlaying" component={MovieNowPlayingStack} />
      <Tab.Screen name="popular" component={MoviePopularStack} />
      <Tab.Screen name="topRatad" component={MovieTopRatedStack} />
      <Tab.Screen name="latest" component={MovieLatestStack} />
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
          backgroundColor: "hsl(290, 20%, 20%)",
          paddingTop: 35
        },
        labelStyle: {
          fontSize: 11
        }
      }}
    >
      <Tab.Screen name="nowPlaying" component={TvOnTheAirStack} />
      <Tab.Screen name="popular" component={TvPopularStack} />
      <Tab.Screen name="topRatad" component={TopRatedTv} />
      <Tab.Screen name="latest" component={TvLatestStack} />
    </Tab.Navigator>
  );
};

const totalApp = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition='bottom'
        tabBarOptions={{
          activeTintColor: "orange",
          inactiveTintColor: "gray",
          tabStyle: {
            backgroundColor: "hsl(290, 20%, 15%)",
          }
        }}
      >
        <Tab.Screen name="Movie" component={MovieTab} />
        <Tab.Screen name="TV" component={tvTab} />
      </Tab.Navigator>
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
