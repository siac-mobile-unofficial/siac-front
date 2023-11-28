import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { global, theme } from "../utils/theme";
import Header from "../components/header";
import ByName from "../components/byName";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

export default function Service() {
  const option = [
    "Trancamento de Matricula (EM DESENVOLVIMENTO)",
    "Histórico Escolar ",
    "Contatos",
  ];
  const choice = (item) => {
    switch (item) {
      case option[0]:
        useRouter().push("/module/service/lock");
        break;
      case option[1]:
        useRouter().push("/module/service/history");
        break;
      case option[2]:
        useRouter().push("/module/service/contact");
        break;
    }
  };
  return (
    <SafeAreaView style={global.body}>
      <Header />
      <View style={global.bigBody}>
        <View style={{ flex: 10 }}>
          <FlatList
            data={option}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={() => {
              return (
                <View style={style.bodyTitle}>
                  <Text style={style.title}>Serviços</Text>
                </View>
              );
            }}
            ItemSeparatorComponent={() => {
              return <View style={{ height: 20 }} />;
            }}
            renderItem={(item) => {
              return (
                <Pressable
                  onPress={() => {
                    choice(item.item);
                  }}
                  style={style.bodyOption}
                >
                  <Text style={style.bodyText}>{item.item}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
      <ByName color={theme.secondColor} name={"VitaminaNescau"} />
      <StatusBar backgroundColor={theme.primaryColor} style="light" />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  bodyTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },

  title: {
    color: theme.secondColor,
    fontSize: 20,
    fontWeight: "600",
  },
  bodyOption: {
    padding: 16,
    backgroundColor: theme.secondColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 4,
  },
  bodyText: {
    color: "black",
    fontWeight: "600",
    fontSize: 16,
  },
});
