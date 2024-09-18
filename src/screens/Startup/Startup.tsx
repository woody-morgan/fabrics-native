import { View } from "react-native";

import { SafeScreen } from "@/components/layout/SafeScreen";

function Startup() {
  return (
    <SafeScreen>
      <View>{/* <ActivityIndicator size="large" /> */}</View>
    </SafeScreen>
  );
}

export default Startup;
