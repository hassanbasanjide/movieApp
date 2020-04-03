import React, {useState} from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {rateMovie} from '../store/actions/rateMovie';
import {useDispatch} from 'react-redux';

const RateAbleStar = (props) => {
    const [rate, setRate] = useState(props.initialRate);
    const dispatch = useDispatch();
  const stars = (pop, starNum) => {
    const a = pop / 2 - starNum;
    if (a >= 1) {
      return "ios-star";
    }
    if (a > 0 < 1) {
      return "ios-star-outline";
    }
    return "ios-star-half";
  };

  const tapStarHandler = (starNum) => {
    const value = 2*starNum;
    setRate(value);
    dispatch(rateMovie(props.movieId, value)); 
  }

  return (
    <View style={styles.starContainer}>
        <TouchableOpacity style={{ marginLeft: 2 }} onPress={()=>tapStarHandler(1)}>
          <Ionicons name={stars(rate, 0)} size={30} color="gold" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 2 }} onPress={()=>tapStarHandler(2)}>
          <Ionicons name={stars(rate, 1)} size={30} color="gold" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 2 }} onPress={()=>tapStarHandler(3)}>
          <Ionicons name={stars(rate, 2)} size={30} color="gold" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 2 }} onPress={()=>tapStarHandler(4)}>
          <Ionicons name={stars(rate, 3)} size={30} color="gold" />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 2 }} onPress={()=>tapStarHandler(5)}>
          <Ionicons name={stars(rate, 4)} size={30} color="gold" />
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    starContainer: {
        flexDirection: 'row',
        marginTop:6,
        marginLeft:16
      }
});

export default RateAbleStar;
