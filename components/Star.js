import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Star = (props) => {
  const { size } = props;
  const { popularity } = props;
  const starSize = size;
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

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 2 }}>
        <Ionicons name={stars(popularity, 0)} size={starSize} color="gold" />
      </View>
      <View style={{ marginLeft: 2 }}>
        <Ionicons name={stars(popularity, 1)} size={starSize} color="gold" />
      </View>
      <View style={{ marginLeft: 2 }}>
        <Ionicons name={stars(popularity, 2)} size={starSize} color="gold" />
      </View>
      <View style={{ marginLeft: 2 }}>
        <Ionicons name={stars(popularity, 3)} size={starSize} color="gold" />
      </View>

      <View style={{ marginLeft: 2 }}>
        <Ionicons name={stars(popularity, 4)} size={starSize} color="gold" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: "row",
  },
});

export default Star;
