import React, { useEffect, useCallback, useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useDispatch} from 'react-redux';
import {reciveRate} from '../store/actions/Rate';
import RateAbleStar from '../components/rateAbleStars';

const RateSection = props => {
  const dispatch = useDispatch();
  const getRates = async () => dispatch(reciveRate());
  useEffect(() => {
    getRates();
  },[])


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => console.log('hello')}
      >
        <Ionicons name="ios-remove" size={30} color="red" />
      </TouchableOpacity>
      <View>
        <RateAbleStar initialRate={3} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    height:'100%',
    width:'100%',
   
  },
  removeButton: {
    backgroundColor: 'hsl(290, 20%, 20%)',
    height: Dimensions.get('screen').height * 0.05,
    width: Dimensions.get('screen').height * 0.05,
    borderRadius: Dimensions.get('screen').height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 5
  },
  starContainer: {
    flexDirection: 'row',
    marginTop:6,
    marginLeft:16
  }
});

export default RateSection;
