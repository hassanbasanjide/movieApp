import React, { useEffect, useCallback, useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';
import {reciveRate} from '../store/actions/Rate';
import RateAbleStar from '../components/rateAbleStars';
import { State } from 'react-native-gesture-handler';

const RateSection = props => {
  const dispatch = useDispatch();
    const data=useSelector(state=>state.movie.Rated);
    let Rate;

    console.log(data)
  const getRates = async () =>{
   await dispatch(reciveRate());
   if(data.length!==0){
    const target=data.find(item=>item.id===props.id);
    Rate=target.account_rating.value;
   }else{
     Rate=0;
   }
   

    }

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
