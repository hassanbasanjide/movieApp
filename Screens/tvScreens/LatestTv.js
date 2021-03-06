/* eslint-disable linebreak-style */
import React from "react";
import RenderCategory from "../../components/RenderCategory";

const TvLatestScreen = (props) => {
  const navigateToDetail = (
    title,
    imageUrl,
    description,
    voteAverage,
    id,
    type
  ) => {
    props.navigation.navigate("DetailComponents", {
      title,
      imageUrl,
      description,
      vote_average: voteAverage,
      id,
      type,
    });
  };
  return (
    <RenderCategory
      category="latest"
      navigateToDetail={navigateToDetail}
      tvOrMovie="tv"
    />
  );
};

export default TvLatestScreen;
