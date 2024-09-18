/**
 * @format
 */

import { AppRegistry } from "react-native";
import { Main } from "./src/main";
import { name as appName } from "./app.json";

if (__DEV__) {
  import("@/reactotron.config");
}

AppRegistry.registerComponent(appName, () => Main);
