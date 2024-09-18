import { ActivityIndicator, View } from "react-native";

import { SafeScreen } from "@/components/layout/SafeScreen";

export function Startup() {
  return (
    <SafeScreen>
      <View className="bg-red-500">
        <ActivityIndicator size="large" />
      </View>
    </SafeScreen>
  );
}
