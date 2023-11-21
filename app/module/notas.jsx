import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { theme } from "../utils/theme";
import { StatusBar } from "expo-status-bar";
import Header from "../components/header";
import { useEffect, useState } from "react";
import { infosNotes } from "../services/UserServices";
import ByName from "../components/byName";

export default function Notes() {
  const [data, setData] = useState();
  useEffect(() => {
    async function teste() {
      setData(await infosNotes());
    }
    teste();
  }, []);
  const Empty = () => {
    return (
      <View style={{ padding: 8 }}>
        <Text>Nenhuma nota registrada</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={style.body}>
      <Header />
      <View style={style.bodyView}>
        <View style={style.bigView}>
          <View style={style.infoView}>
            {!data ? (
              <ActivityIndicator
                color={theme.primaryColor}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                }}
                size={64}
              />
            ) : (
              <FlatList
                data={data}
                style={{ padding: 4 }}
                ListHeaderComponent={() => {
                  return (
                    <View
                      style={{
                        padding: 16,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ fontSize: 18, fontWeight: "600" }}>
                        Notas
                      </Text>
                    </View>
                  );
                }}
                ItemSeparatorComponent={() => {
                  return <View style={{ height: 5 }}></View>;
                }}
                ListEmptyComponent={Empty}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                  return (
                    <View style={style.bodyNote}>
                      <Text style={{ width: "75%" }}>{item.name}</Text>
                      <Text
                        style={{
                          width: "20%",
                          textAlign: "center",
                          fontWeight: "600",
                        }}
                      >
                        {item.note}
                      </Text>
                    </View>
                  );
                }}
              />
            )}
            <Pressable style={style.pdfBT}>
              <Text style={{ fontWeight: "500" }}>PDF</Text>
            </Pressable>
          </View>
        </View>
        <ByName name={"VitaminaNescau"} color={theme.secondColor} />
      </View>

      <StatusBar backgroundColor={theme.primaryColor} style="light" />
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: theme.primaryColor,
  },
  bodyView: { flex: 10 },
  bigView: {
    flex: 2,
    padding: 16,
    marginBottom: 4,
    paddingTop: 0,
  },
  infoView: {
    backgroundColor: theme.secondColor,
    flex: 1,
    borderRadius: 10,
    alignItems: "flex-start",
    flexDirection: "column",
    padding: 12,
    gap: 5,
  },
  pdfBT: {
    elevation: 3,
    padding: 10,
    backgroundColor: theme.secondColor,
    borderRadius: 30,
    position: "absolute",
    zIndex: 5,
    bottom: 30,
    right: 30,
  },
  bodyNote: {
    elevation: 2,
    backgroundColor: theme.secondColor,
    padding: 16,
    margin: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    alignItems: "center",
  },
});
