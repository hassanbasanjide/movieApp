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

const topRatedScreen = props => {
  const navigateToDetail = (title, imageUrl, description, vote_average) => {
    props.navigation.navigate("MovieDetail", {
      title: title,
      imageUrl: imageUrl,
      description: description,
      vote_average: vote_average
    });
  };

  return (
    <RenderCategory category={"top_rated"} navigateToDetail={navigateToDetail} />
  );
};

export default topRatedScreen;
