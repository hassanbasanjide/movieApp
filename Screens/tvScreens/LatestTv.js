import React from "react";
import RenderCategory from "../../components/RenderCategory";

const TvLatestScreen = props => {
  const navigateToDetail = (title, imageUrl, description, vote_average) => {
    props.navigation.navigate("DetailComponents", {
      title: title,
      imageUrl: imageUrl,
      description: description,
      vote_average: vote_average
    });
  };

  return (
   <RenderCategory category={"latest"} navigateToDetail={navigateToDetail} tvOrMovie='tv' />
    
  );
};

export default TvLatestScreen;