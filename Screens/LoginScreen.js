/* eslint-disable no-use-before-define */
import { useLinking } from "@react-navigation/native";
import { Linking as l } from "expo";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {} from "redux";
import { primeFunc, primefunc2 } from "../store/actions/newLogin";

const Login = (props) => {
  const [loading, setloading] = useState(true);
  const Dispatch = useDispatch();
  const reqToken = useSelector((state) => state.store1.request_token);

  const LoginFunc = async () => {
    setloading(false);
    try {
      await Dispatch(primeFunc());
    } catch (error) {
      Alert.alert(error.message, "please handle errors.", [{ text: "ok" }]);
    }
    setloading(true);
  };

  const ref = React.useRef();
  const prefix = l.makeUrl("/");

  const { getInitialState } = useLinking(ref, {
    prefixes: [prefix],
  });

  const navigate = () => {
    console.log(reqToken);
    primefunc2(reqToken);
    props.navigation.navigate("categories");
  };

  useEffect(() => {
    l.addEventListener("url", (c) => {
      if (c) {
        navigate();
      }
    });
    getInitialState()
      .catch(() => console.log("Error"))
      .then((state) => {
        if (state) {
          navigate();
        }
      });

    return () => {
      l.removeAllListeners("url");
    };
  });
  // const test=async()=>{

  //   //await SecureStore.setItemAsync('number', '44')

  //   const test= await SecureStore.getItemAsync('number')
  // console.log(test);
  // }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "hsl(290, 20%, 20%)" }}
        behavior="padding"
        keyboardVerticalOffset={10}
      >
        <View style={styles.container}>
          <View style={styles.button}>
            {loading ? (
              <Button title="Login" color="#ff4d4d" onPress={LoginFunc} />
            ) : (
              <ActivityIndicator size="large" color="gold" />
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(290, 20%, 20%)",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: Dimensions.get("screen").height * 0.06,
    width: "90%",
    margin: 20,
  },
  button: {
    width: "85%",
    marginTop: 20,
  },
  inputText: {
    color: "white",
    marginLeft: 7,
  },
});

export default Login;
