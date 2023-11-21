import {
  Pressable,
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { infoCurriculum } from "../services/UserServices";
import { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { global, theme } from "../utils/theme";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import User from "../dto/User";
import ByName from "../components/byName";
import Header from "../components/header";

export default function Curriculum() {
  const [items, setItems] = useState([{ label: "null", value: "null" }]);
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [statusDesc, setStatusDesc] = useState(-1);
  const [statusData, setStatusData] = useState(User.getInstance().getData());
  const router = useRouter();
  useEffect(() => {
    async function api() {
      User.getInstance().setData(await infoCurriculum());
      setStatusData(User.getInstance().getData());
    }
    if (User.getInstance().getData() === undefined) {
      api();
    }
  }, []);
  useEffect(() => {
    if (statusData) {
      const uniqueValues = new Set(
        statusData.map((obj) => obj[Object.keys(obj)[0]]),
      );
      const objItems = Array.from(uniqueValues, (valorUnico) => ({
        label: valorUnico,
        value: valorUnico,
      }));
      setValue(objItems[0]);
      setItems(objItems);
    }
  }, [statusData]);
  const infos = (
    <DropDownPicker
      placeholder={"Selecione o semestre"}
      style={{
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: theme.secondColor,
        elevation: 6,
        marginBottom: 8,
      }}
      ListEmptyComponent={() => {
        return (
          <View style={{ flex: 1 }}>
            <Text>Nenhum dado</Text>
          </View>
        );
      }}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      maxHeight={500}
    />
  );
  return (
    <SafeAreaView style={global.body}>
      <StatusBar backgroundColor={theme.primaryColor} />
      <Header />
      <View style={global.bigBody}>
        <View style={global.infoView}>
          {infos}
          {statusData != null ? (
            <FlatList
              data={statusData}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              renderItem={({ item, index }) => {
                if (item.semester == value) {
                  return (
                    <Pressable
                      onPress={() => {
                        statusDesc == index
                          ? setStatusDesc(-1)
                          : setStatusDesc(index);
                      }}
                      style={style.curriView}
                    >
                      <View style={style.curri}>
                        <Text>{item.code}</Text>
                        <Text>{item.name}</Text>
                      </View>
                      {statusDesc == index ? <Description data={item} /> : null}
                    </Pressable>
                  );
                }
              }}
            />
          ) : (
            <ActivityIndicator
              style={{ flex: 1 }}
              size={72}
              color={theme.primaryColor}
            />
          )}
        </View>
      </View>
      <ByName name={"VitaminaNescau"} color={theme.secondColor} />
    </SafeAreaView>
  );
}
const Description = ({ data }) => {
  return (
    <View style={style.extraView}>
      <Text>{data.type}</Text>
      <Text>Requisitos: {data.requirement}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  matter: {
    width: "100%",
    height: 80,
    borderBottomColor: theme.primaryColor,
    borderBottomWidth: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    alignItems: "flex-end",
  },
  curri: {
    padding: 6,
    flexDirection: "row",
    gap: 20,
    maxWidth: "100%",
    flexWrap: "wrap",
  },
  curriView: {
    padding: 14,
    backgroundColor: theme.secondColor,
    margin: 4,
    marginBottom: 15,
    elevation: 2,
  },
  extraView: { padding: 12, gap: 10, flexDirection: "row", flexWrap: "wrap" },
});
