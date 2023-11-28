import { SafeAreaView, View, Text } from "react-native";
import { global, theme } from "../utils/theme";
import Header from "../components/header";
import ByName from "../components/byName";
import { StatusBar } from "expo-status-bar";

export default function Events() {
  return (
    <SafeAreaView style={global.body}>
      <Header />
      <View style={global.bigBody}>
        <View style={global.infoView}>
          <Text>EM DESENVOLVIMENTO</Text>
        </View>
      </View>
      <ByName color={theme.secondColor} name={"VitaminaNescau"} />
      <StatusBar backgroundColor={theme.primaryColor} style="light" />
    </SafeAreaView>
  );
}
