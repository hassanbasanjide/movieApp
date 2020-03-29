/* eslint-disable linebreak-style */
import * as SecureStore from "expo-secure-store";
import React, { useEffect } from "react";
import RenderCategory from "../components/RenderCategory";

const MovieNowPlayingScreen = (props) => {
  const navigateToDetail = (title, imageUrl, description, voteAverage) => {
    props.navigation.navigate("DetailComponents", {
      title,
      imageUrl,
      description,
      vote_average: voteAverage,
    });
  };

  const getAccountId = async () => {
    const test = await SecureStore.getItemAsync("account_id");
    console.log(test);
  };
  useEffect(() => {
    getAccountId();
  }, [getAccountId]);

  return (
    <RenderCategory
      category="now_playing"
      navigateToDetail={navigateToDetail}
      tvOrMovie="movie"
    />
  );
};

export default MovieNowPlayingScreen;
