import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View, Text, FlatList } from "react-native";
import { global, theme } from "../utils/theme";
import Header from "../components/header";
import ByName from "../components/byName";

export default function Support() {
  const teste = [1, 2, 3, 4, 5, 5];
  return (
    <SafeAreaView style={global.body}>
      <Header />
      <View style={global.bigBody}>
        <View style={global.infoView}></View>
      </View>
      <ByName color={theme.secondColor} name={"VitaminaNescau"} />
      <StatusBar backgroundColor={theme.primaryColor} style="light" />
    </SafeAreaView>
  );
}
