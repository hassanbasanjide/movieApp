import React, { useEffect, useCallback } from "react";
import { View, StyleSheet, Alert } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import getMovieData from "../store/actions/getMovieData";
import { getTvData } from "../store/actions/getTvData";

import RenderMovie from "./RenderMovie";

const renderCategory = (props) => {
  const { tvOrMovie } = props;
  const Dispatch = useDispatch();

  const recivedData = useCallback(async () => {
    try {
      if (tvOrMovie === "movie") {
        await Dispatch(getMovieData(props.category));
      } else if (props.tvOrMovie === "tv") {
        await Dispatch(getTvData(props.category));
      }
    } catch (err) {
      Alert.alert(err.message, "check your network please", [{ text: "ok" }]);
    }
  }, [Dispatch]);

  useEffect(() => {
    recivedData();
  }, [recivedData]);

  let Data;
  if (tvOrMovie === "movie") {
    Data = useSelector((state) => state.movie[props.category]);
  } else if (tvOrMovie === "tv") {
    Data = useSelector((state) => state.tv[props.category]);
  }

  

  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(itemData) => {
          return (
            <RenderMovie
              type={tvOrMovie}
              title={
                props.tvOrMovie === "movie"
                  ? itemData.item.title
                  : itemData.item.name
              }
              imageUrl={itemData.item.poster_path}
              release_date={
                props.tvOrMovie === "movie"
                  ? itemData.item.release_date
                  : itemData.item.first_air_date
              }
              rate={itemData.item.vote_average}

              id={itemData.item.id}
              detailFunc={props.navigateToDetail.bind(
                this,
                props.tvOrMovie === "movie"
                  ? itemData.item.title
                  : itemData.item.name,
                itemData.item.poster_path,
                itemData.item.overview,
                itemData.item.vote_average,
                itemData.item.id,
                tvOrMovie
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
    backgroundColor: "hsl(290, 20%, 20%)",
    // padding:10
  },
});

export default renderCategory;
