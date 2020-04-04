import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View
} from 'react-native';
import FadeInOut from 'react-native-fade-in-out';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Star from '../components/Star';
import RateSection from '../components/RateSection';

const DetailComponents = props => {
  const { route } = props;
  const { title, imageUrl, description, id } = route.params;
  const rate = route.params.vote_average;
  const [line, setLine] = useState(4);
  const [name, setname] = useState('more');
  const [visibaleRateContainer, setvisibaleRateContainer] = useState(false);

  const toggleVisible = () => {
    setvisibaleRateContainer(prevState => !prevState);
  };
  const dynamicRate=(func)=>{
    props.navigation.addListener('focus', () => func)
  }

  return (
    <View style={{ backgroundColor: 'hsl(290, 20%, 20%)', height: '100%' }}>
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w500/${imageUrl}` }}
        style={styles.imageBackground}
      >
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={{ color: 'white', fontSize: 22 }}>{title}</Text>
          </View>

          <View style={styles.rate}>
            <Text style={{ color: 'gold', fontSize: 29, marginRight: 10 }}>
              {rate}
            </Text>

            <Star popularity={rate} size={25} />

            <TouchableOpacity
              style={styles.rateButton}
              onPress={toggleVisible.bind(this)}
            >
              <Ionicons name="ios-star" size={20} color="gold" />
            </TouchableOpacity>
          </View>
          <View style={{ height: 40 }}>
            <FadeInOut
              visible={visibaleRateContainer}
              style={styles.rateScreen}
            >
              <RateSection id={id} dynamicRate={dynamicRate}/>
            </FadeInOut>
          </View>

          <View style={styles.description}>
            <Text
              numberOfLines={line}
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: 17 }}
            >
              {description}
            </Text>
            <TouchableOpacity
              onPress={() => {
                if (name === 'more') {
                  setLine(15);
                  setname('close');
                } else {
                  setLine(4);
                  setname('more');
                }
              }}
              style={styles.more}
            >
              <Text style={{ color: 'gold' }}>{name}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: Dimensions.get('screen').height * 0.55,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    marginTop: 25
  },

  container: {
    //  height:Dimensions.get('screen').height*0.34,

    width: Dimensions.get('screen').width * 0.95,
    backgroundColor: 'rgb(100,0,100)',
    marginTop: 250,
    borderRadius: 10,
    alignItems: 'center',
    padding: 5
  },

  title: {
    height: Dimensions.get('screen').height * 0.05,
    width: '98%'
  },

  rate: {
    height: Dimensions.get('screen').height * 0.08,
    width: '98%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1
  },

  description: {
    marginTop: 15,
    marginRight: 5,
    marginBottom: 20
  },

  star: {
    borderWidth: 1,
    justifyContent: 'center',
    marginLeft: 3
  },
  more: {
    alignItems: 'center',
    height: 20,
    width: 40
  },
  rateButton: {
    backgroundColor: 'hsl(290, 20%, 20%)',
    height: Dimensions.get('screen').height * 0.05,
    width: Dimensions.get('screen').height * 0.05,
    borderRadius: Dimensions.get('screen').height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20
  },

  rateScreen: {
    width: 100 * 2.5,
    height: 50,
    borderRadius: 5,
    backgroundColor: 'hsl(290, 20%, 20%)',
    backfaceVisibility: 'hidden'
  }
});

export default DetailComponents;
