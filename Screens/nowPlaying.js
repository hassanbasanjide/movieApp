import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  BackHandler,
  Alert,
  Button
} from "react-native";
import RenderCategory from "../components/RenderCategory";
import { primeFunc } from "./../store/actions/newLogin";

const MovieNowPlayingScreen = props => {
//   const navigateToDetail = (title, imageUrl, description, vote_average) => {
//     props.navigation.navigate("DetailComponents", {
//       title: title,
//       imageUrl: imageUrl,
//       description: description,
//       vote_average: vote_average
//     });
//   };

  return (
    //<RenderCategory category={"now_playing"} navigateToDetail={navigateToDetail} tvOrMovie='movie' />
<View>
<Button title="login" onPress={() => {primeFunc()}}/>
</View>
    
  

   
  );
};

export default MovieNowPlayingScreen;
