import { View, Text, ScrollView } from "react-native";
import { useTranslation } from "react-i18next";
import { SafeScreen } from "@/components/layout/SafeScreen";

export function Example() {
  const { t } = useTranslation(["example", "welcome"]);

  return (
    <SafeScreen>
      <ScrollView>
        <View>
          <View>
            <Text>{t("welcome:description")}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeScreen>
  );
}
