import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import Route from './components/route';

const store = createStore(reducer);
console.log("STORE == ", store.getState());

export default function MainScreen() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

