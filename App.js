import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import Home from "./home";
import typesReducer from "./redux/reducers/types";

import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
