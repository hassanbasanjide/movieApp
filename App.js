import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppScreen from './Navigation/NavigationBase';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider, useSelector } from 'react-redux';
import store1 from './store/reducers/login';
import movieReducer from './store/reducers/movies';
import tvReducer from './store/reducers/tv';
import reduxThunk from 'redux-thunk';
import { NavigationContainer, useLinking } from "@react-navigation/native"
import { Linking as l } from "expo";


const fetchReducer = combineReducers({
  store1: store1,
  movie: movieReducer,
  tv: tvReducer
});

const preparedStore = createStore(fetchReducer, applyMiddleware(reduxThunk));

const prefix = l.makeUrl('/');

export default function App() {

  // const ref = React.useRef();

  // console.log(prefix);


  // const { getInitialState } = useLinking(ref, {
  //   prefixes: [prefix],
  // });



  React.useEffect(() => {
    l.addEventListener('url', (c) => {
      console.log(c);
      const {path, queryParams} = l.parse(c);
      console.log(queryParams);
    });
    // getInitialState().catch((e) => log("Error")).then(state => {

    //   console.log(state);
    // });
  })


  return (
    <Provider store={preparedStore}>
      <AppScreen />
    </Provider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
