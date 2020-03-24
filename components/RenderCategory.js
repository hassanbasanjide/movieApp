import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  BackHandler,
  Alert,
  Button
} from "react-native";

import { getMovieData } from "../store/actions/getMovieData";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import { useCallback } from "react";
import RenderMovie from "./RenderMovie";

const renderCategory = props => {
  const Dispatch = useDispatch();


  const recivedData = useCallback(async () => {
    try {
      await Dispatch(getMovieData(props.category));
    } catch (err) {
      Alert.alert(err.message, "check your network please", [{ text: "ok" }]);
    }
  }, [Dispatch]);

  useEffect(() => {
    recivedData();
  }, [recivedData]);

  const movieData = useSelector(state => state.store2.data);

//   const Navigate_To_detail = (title, imageUrl, description, vote_average) => {
//     props.navigation.navigate("MovieDetail", {
//       title: title,
//       imageUrl: imageUrl,
//       description: description,
//       vote_average: vote_average
//     });
//   };

  return (
    <View style={styles.container}>
      <FlatList
        data={movieData}
        renderItem={itemData => {
          return (
            <RenderMovie
              title={itemData.item.title}
              imageUrl={itemData.item.poster_path}
              release_date={itemData.item.release_date}
              rate={itemData.item.vote_average}
              detailFunc={props.navigateToDetail.bind(this,
                itemData.item.title,
                itemData.item.poster_path,
                itemData.item.overview,
                itemData.item.vote_average
              )}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "hsl(290, 20%, 20%)"
    // padding:10
  }
});

export default renderCategory;
