import React, { useEffect, useCallback, useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RateSection = props => {
  const [name, setName] = useState('ios-star-outline');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => console.log('hello')}
      >
        <Ionicons name="ios-remove" size={30} color="red" />
      </TouchableOpacity>
      <View style={styles.starContainer}>
        <TouchableOpacity style={{ marginLeft: 2 }}>
          <Ionicons name={'ios-star'} size={30} color="gold" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 2 }}>
          <Ionicons name={name} size={30} color="gold" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 2 }}>
          <Ionicons name={name} size={30} color="gold" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 2 }}>
          <Ionicons name={name} size={30} color="gold" />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginLeft: 2 }}>
          <Ionicons name={name} size={30} color="gold" />
        </TouchableOpacity>
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
