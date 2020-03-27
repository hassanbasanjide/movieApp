import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppScreen from './Navigation/NavigationBase';
import { combineReducers,createStore,applyMiddleware } from 'redux';
import { Provider, useSelector } from 'react-redux';
import store1 from './store/reducers/login';
import movieReducer from './store/reducers/movies';
import tvReducer from './store/reducers/tv';
import reduxThunk from 'redux-thunk';


const fetchReducer=combineReducers({
  store1:store1,
  movie: movieReducer,
  tv: tvReducer
});

const preparedStore=createStore(fetchReducer,applyMiddleware(reduxThunk));


export default function App() {

  
  return (
   <Provider store={preparedStore}>
     <AppScreen/>
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
