import React from "react";
import RenderCategory from "../../components/RenderCategory";

const TvPopularScreen = props => {
  const navigateToDetail = (title, imageUrl, description, vote_average) => {
    props.navigation.navigate("DetailComponents", {
      title: title,
      imageUrl: imageUrl,
      description: description,
      vote_average: vote_average
    });
  };

  return (
   <RenderCategory category={"popular"} navigateToDetail={navigateToDetail} tvOrMovie='tv' />
    
  );
};

export default TvPopularScreen;