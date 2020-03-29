import React, { useState } from "react";

import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import Star from "../components/Star";

const DetailComponents = (props) => {
  const { route } = props;
  const { title, imageUrl, description } = route.params;
  const rate = route.params.vote_average;
  const [line, setline] = useState(5);

  return (
    <View style={{ backgroundColor: "hsl(290, 20%, 20%)", height: "100%" }}>
      <ImageBackground
        source={{ uri: `https://image.tmdb.org/t/p/w500/${imageUrl}` }}
        style={styles.imageBackground}
      >
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={{ color: "white", fontSize: 22 }}>{title}</Text>
          </View>

          <View style={styles.rate}>
            <Text style={{ color: "gold", fontSize: 29, marginRight: 10 }}>
              {rate}
            </Text>

            <Star popularity={rate} size={25} />
          </View>

          <ScrollView style={styles.description}>
            <Text
              numberOfLines={line}
              style={{ color: "rgba(255,255,255,0.6)", fontSize: 17 }}
            >
              {description}
            </Text>
          </ScrollView>

          <TouchableOpacity onPress={() => setline(15)}>
            <Text style={{ color: "gold" }}>more</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: Dimensions.get("screen").height * 0.55,

    width: Dimensions.get("screen").width,

    alignItems: "center",

    marginTop: 25,
  },

  container: {
    //  height:Dimensions.get('screen').height*0.34,

    width: Dimensions.get("screen").width * 0.95,

    backgroundColor: "rgb(100,0,100)",

    marginTop: 250,

    borderRadius: 10,

    alignItems: "center",

    padding: 5,
  },

  title: {
    height: "15%",

    width: "98%",

    // borderWidth:1
  },

  rate: {
    height: "16%",

    width: "98%",

    // borderWidth:1,

    flexDirection: "row",

    alignItems: "center",

    marginTop: 15,
  },

  description: {
    marginTop: 35,

    marginRight: 5,

    marginBottom: 40,

    height: 150,
  },

  star: {
    borderWidth: 1,

    justifyContent: "center",

    marginLeft: 3,
  },
});

export default DetailComponents;
