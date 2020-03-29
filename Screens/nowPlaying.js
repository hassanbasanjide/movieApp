import React, { useEffect, useState } from "react";

import {
  Text,
  View,
  StyleSheet,
  BackHandler,
  Alert,
  Button,
  Linking
} from "react-native";
import RenderCategory from "../components/RenderCategory";
import { primeFunc } from "./../store/actions/newLogin";
import * as SecureStore from 'expo-secure-store';


const MovieNowPlayingScreen = props => {


    const navigateToDetail = (title, imageUrl, description, vote_average) => {
      props.navigation.navigate("DetailComponents", {
        title: title,
        imageUrl: imageUrl,
        description: description,
        vote_average: vote_average
      });
    };

    const getAccuntId=async()=>{
    const test= await  SecureStore.getItemAsync('account_id')
    console.log(test)
   
     }
    useEffect(()=>{
     getAccuntId()
    },[getAccuntId])
   


  return (
    <RenderCategory category={"now_playing"} navigateToDetail={navigateToDetail} tvOrMovie='movie' />
   



  );
};

export default MovieNowPlayingScreen;
