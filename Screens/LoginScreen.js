/* eslint-disable no-use-before-define */
import { useLinking } from '@react-navigation/native';
import { Linking as l } from 'expo';
import React, { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
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
  Text
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {} from 'redux';
import { primeFunc, primefunc2 } from '../store/actions/newLogin';

const Login = props => {
  const [loading, setloading] = useState(true);
  const [componets, setComponents] = useState(
    <Text style={styles.start}>MovieDB</Text>
  );
  const [resultValidate, setResultValidate] = useState(true);
  let content;
  const Dispatch = useDispatch();

  const LoginFunc = async () => {
    //setloading(false);
    const reqtoken = await SecureStore.getItemAsync('req_token');
    let validationResult;
    try {
      validationResult = await primefunc2(reqtoken);
    } catch (error) {
      validationResult = false;
    }

    if (validationResult) {
      props.navigation.navigate('categories');
    } else {
      setComponents(<View style={styles.button}>
        <Button color="darkred" title="login" onPress={()=>Loginfunc2()} />
      </View>)
    }
  

    
  };

  const Loginfunc2 = async () => {
    setComponents(<ActivityIndicator size="large" color="gold"/>)
    try {
      await Dispatch(primeFunc());
    } catch (error) {
      Alert.alert(error.message, 'please handle errors.', [{ text: 'ok' }]);
    }
  };

  const ref = React.useRef();
  const prefix = l.makeUrl('/');

  const { getInitialState } = useLinking(ref, {
    prefixes: [prefix]
  });

  const navigate = () => {
    
    props.navigation.navigate('categories');
  };

  useEffect(() => {
    l.addEventListener('url', c => {
      if (c) {
        navigate();
      }
    });
    getInitialState()
      .catch(() => console.log('Error'))
      .then(state => {
        if (state) {
          navigate();
        }
      });

    LoginFunc();
    console.log('returend')

    return () =>
      l.removeAllListeners('url');
      
    
  });

  if (resultValidate) {
    content = <Text style={styles.start}>MovieDB</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'hsl(290, 20%, 20%)' }}>
      <View style={styles.container}>{componets}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(290, 20%, 20%)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: Dimensions.get('screen').height * 0.06,
    width: '90%',
    margin: 20
  },
  button: {
    width: '85%',
    marginTop: 20,
  
  },
  inputText: {
    color: 'white',
    marginLeft: 7
  },
  start: {
    color: 'white',
    fontSize: 30
  }
});

export default Login;
