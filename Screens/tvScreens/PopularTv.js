/* eslint-disable linebreak-style */
import React from 'react';
import RenderCategory from '../../components/RenderCategory';

const TvPopularScreen = (props) => {
  const navigateToDetail = (title, imageUrl, description, voteAverage) => {
    props.navigation.navigate('DetailComponents', {
      title,
      imageUrl,
      description,
      vote_average: voteAverage,
    });
  };

  return (
    <RenderCategory
      category="popular"
      navigateToDetail={navigateToDetail}
      tvOrMovie="tv"
    />
  );
};

export default TvPopularScreen;
