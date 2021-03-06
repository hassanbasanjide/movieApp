import React from "react";
import RenderCategory from "../components/RenderCategory";

const MovieLatestScreen = (props) => {
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
      tvOrMovie="movie"
    />
  );
};

export default MovieLatestScreen;
