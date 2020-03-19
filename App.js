import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppScreen from './Navigation/NavigationBsae';
import { combineReducers,createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import store1 from './store/reducers/login';
import reduxThunk from 'redux-thunk';

const fetchReducer=combineReducers({
  store1:store1
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
