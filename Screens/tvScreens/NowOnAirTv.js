/* eslint-disable linebreak-style */
import React from 'react';
import RenderCategory from '../../components/RenderCategory';

const TvNowOnAirScreen = (props) => {
  const navigateToDetail = (title, imageUrl, description, voteAverage) => {
    props.navigation.navigate('DetailComponents', {
      title,
      imageUrl,
      description,
      vote_average: voteAverage
    });
  };

  return (
    <RenderCategory category="on_the_air" navigateToDetail={navigateToDetail} tvOrMovie="tv" />

  );
};

export default TvNowOnAirScreen;
