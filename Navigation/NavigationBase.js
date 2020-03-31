import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LatestMovie from "../Screens/latest";
import LoginScreen from "../Screens/LoginScreen";
import DetailComponents from "../Screens/MovieDetail";
import NowPlayingMovie from "../Screens/nowPlaying";
import PopularMovie from "../Screens/popular";
import TopRatedMovie from "../Screens/topRatad";
import LatestTv from "../Screens/tvScreens/LatestTv";
import NowOnAirTv from "../Screens/tvScreens/NowOnAirTv";
import PopularTv from "../Screens/tvScreens/PopularTv";
import TopRatedTv from "../Screens/tvScreens/TopRatedTv";


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MovieTab = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "orange",
      inactiveTintColor: "gray",
      tabStyle: {
        backgroundColor: "hsl(290, 20%, 15%)",
        paddingTop: 35,
      },
      labelStyle: {
        fontSize: 11,
      },
      scrollEnabled :true
    }}
  >
    <Tab.Screen name="nowPlaying" component={NowPlayingMovie} options={{title:'now'}}/>
    <Tab.Screen name="popular" component={PopularMovie} />
    <Tab.Screen name="topRatad" component={TopRatedMovie} />
    <Tab.Screen name="latest" component={LatestMovie} />
  </Tab.Navigator>
);

const tvTab = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "orange",
      inactiveTintColor: "gray",
      tabStyle: {
        backgroundColor: "hsl(290, 20%, 15%)",
        paddingTop: 35,
      },
      labelStyle: {
        fontSize: 11,
      },
      scrollEnabled :true,
      backBehavior:"initialRoute"
    }}
  >
    <Tab.Screen name="nowPlaying" component={NowOnAirTv} options={{title:'now'}}/>
    <Tab.Screen name="popular" component={PopularTv} />
    <Tab.Screen name="topRatad" component={TopRatedTv} />
    <Tab.Screen name="latest" component={LatestTv} />
  </Tab.Navigator>
);

const Categories = () => (
  <Tab.Navigator
    tabBarPosition="bottom"
    tabBarOptions={{
      activeTintColor: "orange",
      inactiveTintColor: "gray",
      tabStyle: {
        backgroundColor: "hsl(290, 20%, 15%)",
      },
    }}
  >
    <Tab.Screen name="Movie" component={MovieTab} />
    <Tab.Screen name="TV" component={tvTab} />
  </Tab.Navigator>
);

const totalApp = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="loginScreen" component={LoginScreen} />
      <Stack.Screen name="categories" component={Categories} />
      <Stack.Screen name="DetailComponents" component={DetailComponents} />
    </Stack.Navigator>
  </NavigationContainer>
);



export default totalApp;
