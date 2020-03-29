import React from "react";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import AppScreen from "./Navigation/NavigationBase";
import store1 from "./store/reducers/login";
import movieReducer from "./store/reducers/movies";
import tvReducer from "./store/reducers/tv";
// import { NavigationContainer, useLinking } from "@react-navigation/native"

const fetchReducer = combineReducers({
  store1,
  movie: movieReducer,
  tv: tvReducer,
});

const preparedStore = createStore(fetchReducer, applyMiddleware(reduxThunk));

export default function App() {
  return (
    <Provider store={preparedStore}>
      <AppScreen />
    </Provider>
  );
}
