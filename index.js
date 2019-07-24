/**
 * @format
 */

import React from "react";
import { AppRegistry } from "react-native";
import App from "./src/App";
import createStore from "./src/utils/store";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";

const store = createStore();

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
