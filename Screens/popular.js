import React from "react";
import RenderCategory from "../components/RenderCategory";

const MoviePopularScreen = (props) => {
  const navigateToDetail = (title, imageUrl, description, voteAverage,id) => {
    props.navigation.navigate("DetailComponents", {
      title,
      imageUrl,
      description,
      vote_average: voteAverage,
      id
    });
  };

  return (
    <RenderCategory
      category="popular"
      navigateToDetail={navigateToDetail}
      tvOrMovie="movie"
    />
  );
};

export default MoviePopularScreen;
