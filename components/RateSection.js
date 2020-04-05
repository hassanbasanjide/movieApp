import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { reciveRate, deleteRate, setRateMovie } from "../store/actions/Rate";

const RateSection = (props) => {
  const [star1, setStar1] = useState("ios-star-outline");
  const [star2, setStar2] = useState("ios-star-outline");
  const [star3, setStar3] = useState("ios-star-outline");
  const [star4, setStar4] = useState("ios-star-outline");
  const [star5, setStar5] = useState("ios-star-outline");

  let Rate;

  const getRates = async () => {
    try {
      const data = await reciveRate(props.type);
      if (data.length !== 0) {
        const target = data.find((item) => item.id === props.id);

        if (target) {
          Rate = target.account_rating.value;
       
          initialTurnOnStars(Rate, "INIT");
        } else {
          Rate = 0;
        }
      }
    } catch (error) {
      Alert.alert("Error!", "Some Thing Is wrong", [{ text: "ok" }]);
    }
  };

  const initialTurnOnStars = (rate, type) => {
    const finalRate = Math.floor(rate / 2);
    if (type === "SET") {
      setRateMovie(rate, props.id, props.type);
    }

    switch (finalRate) {
      case 1:
        setStar1("ios-star");
        setStar2("ios-star-outline");
        setStar3("ios-star-outline");
        setStar4("ios-star-outline");
        setStar5("ios-star-outline");
        break;
      case 2:
        setStar1("ios-star");
        setStar2("ios-star");
        setStar3("ios-star-outline");
        setStar4("ios-star-outline");
        setStar5("ios-star-outline");
        break;
      case 3:
        setStar1("ios-star");
        setStar2("ios-star");
        setStar3("ios-star");
        setStar4("ios-star-outline");
        setStar5("ios-star-outline");
        break;
      case 4:
        setStar1("ios-star");
        setStar2("ios-star");
        setStar3("ios-star");
        setStar4("ios-star");
        setStar5("ios-star-outline");

        break;
      default:
        setStar1("ios-star");
        setStar2("ios-star");
        setStar3("ios-star");
        setStar4("ios-star");
        setStar5("ios-star");
        break;
    }
  };

  const removeStar = async () => {
    try {
      await deleteRate(props.id, props.type);
      setStar1("ios-star-outline");
      setStar2("ios-star-outline");
      setStar3("ios-star-outline");
      setStar4("ios-star-outline");
      setStar5("ios-star-outline");
    } catch (error) {
      Alert.alert(error.message, "Some Thing Is wrong", [{ text: "ok" }]);
    }
  };

  useEffect(() => {
    props.dynamicRate(getRates());
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeStar()}
      >
        <Ionicons name="ios-remove" size={30} color="red" />
      </TouchableOpacity>
      <View style={styles.starContainer}>
        <TouchableOpacity
          style={{ marginLeft: 2 }}
          onPress={() => initialTurnOnStars(2, "SET")}
        >
          <Ionicons name={star1} size={30} color="gold" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 2 }}
          onPress={() => initialTurnOnStars(4, "SET")}
        >
          <Ionicons name={star2} size={30} color="gold" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 2 }}
          onPress={() => initialTurnOnStars(6, "SET")}
        >
          <Ionicons name={star3} size={30} color="gold" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 2 }}
          onPress={() => initialTurnOnStars(8, "SET")}
        >
          <Ionicons name={star4} size={30} color="gold" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginLeft: 2 }}
          onPress={() => initialTurnOnStars(10, "SET")}
        >
          <Ionicons name={star5} size={30} color="gold" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  removeButton: {
    backgroundColor: "hsl(290, 20%, 20%)",
    height: Dimensions.get("screen").height * 0.05,
    width: Dimensions.get("screen").height * 0.05,
    borderRadius: Dimensions.get("screen").height * 0.05,
    alignItems: "center",
    justifyContent: "center",

    marginTop: 5,
  },
  starContainer: {
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 16,
  },
});

export default RateSection;
