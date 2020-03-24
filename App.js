import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppScreen from './Navigation/NavigationBase';
import { combineReducers,createStore,applyMiddleware } from 'redux';
import { Provider, useSelector } from 'react-redux';
import store1 from './store/reducers/login';
import store2 from './store/reducers/PrimeScreen';
import reduxThunk from 'redux-thunk';


const fetchReducer=combineReducers({
  store1:store1,
  store2:store2
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
