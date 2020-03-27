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

const MovieLatestScreen = props => {
  const navigateToDetail = (title, imageUrl, description, vote_average) => {
    props.navigation.navigate("DetailComponents", {
      title: title,
      imageUrl: imageUrl,
      description: description,
      vote_average: vote_average
    });

    
  };

  return (
   <RenderCategory category={"latest"} navigateToDetail={navigateToDetail} tvOrMovie='movie' />

   
  

   
  );
};

export default MovieLatestScreen;
