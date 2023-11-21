import User from "../dto/User";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { global, theme } from "../utils/theme";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useEffect } from "react";
import { PDF, infoClassroom } from "../services/UserServices";
import IconBack from "../components/iconBack";
import IconUfba from "../components/iconUfba";
import ByName from "../components/byName";
import Header from "../components/header";

export default function Registration() {
  const [data, setData] = useState(null);
  const [expand, setExpand] = useState();
  useEffect(() => {
    async function api() {
      setData(await infoClassroom());
    }
    api();
  }, []);

  return (
    <SafeAreaView style={global.body}>
      <Header />
      <Pressable style={style.pdfBT} onPress={PDF}>
        <Text style={{ fontWeight: "600" }}>PDF</Text>
      </Pressable>
      <View style={global.bigBody}>
        <View style={style.infoView}>
          <Text style={style.info}>
            <Text style={style.infoName}>Nome:</Text>{" "}
            {User.getInstance().getName()}
          </Text>
          <Text style={style.info}>
            <Text style={style.infoName}>Matricula:</Text>{" "}
            {User.getInstance().getRegister()}
          </Text>
          <Text style={style.info}>
            <Text style={style.infoName}>Curso:</Text>{" "}
            {User.getInstance().getCourse()}
          </Text>
          <Text style={style.info}>
            <Text style={style.infoName}>Semestre:</Text>{" "}
            {User.getInstance().getSemester()}
          </Text>
          <Text style={style.info}>
            <Text style={style.infoName}>CR:</Text> {User.getInstance().getCR()}
          </Text>
          {data == null ? (
            <ActivityIndicator
              style={{
                flex: 5,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
              size={64}
              color={theme.primaryColor}
            />
          ) : (
            <FlatList
              style={style.infoClassroom}
              keyExtractor={(item, index) => index}
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <Pressable
                    onPress={() => {
                      expand === index ? setExpand(null) : setExpand(index);
                    }}
                    style={style.classroom}
                  >
                    <Text>{item.name}</Text>
                    {expand === index ? (
                      <View style={style.extraView}>
                        <Text style={style.title}>
                          Código:{" "}
                          <Text style={style.titleInfo}>{item.code}</Text>
                        </Text>
                        <Text style={style.title}>
                          Turma:{" "}
                          <Text style={style.titleInfo}>
                            {item.classcode} {item.classroom}
                          </Text>
                        </Text>
                        <Text style={style.title}>
                          Dia: <Text style={style.titleInfo}>{item.date}</Text>
                        </Text>
                        <Text style={style.title}>
                          CH: <Text style={style.titleInfo}>{item.hours}</Text>
                        </Text>
                        <Text style={style.title}>
                          Horário:{" "}
                          <Text style={style.titleInfo}>{item.classhours}</Text>
                        </Text>
                        <Text style={style.title}>
                          Local:{" "}
                          <Text style={style.titleInfo}>{item.local}</Text>
                        </Text>
                        <Text style={style.title}>
                          Docente:{" "}
                          <Text style={style.titleInfo}>{item.teacher}</Text>
                        </Text>
                      </View>
                    ) : (
                      <></>
                    )}
                  </Pressable>
                );
              }}
            />
          )}
        </View>
      </View>
      <ByName color={theme.secondColor} name={"VitaminaNescau"} />

      <StatusBar backgroundColor={theme.primaryColor} style="light" />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  body: {
    backgroundColor: theme.primaryColor,
    flex: 1,
  },
  pdfBT: {
    padding: 12,
    backgroundColor: theme.secondColor,
    borderRadius: 100,
    elevation: 10,
    zIndex: 5,
    position: "absolute",
    bottom: 80,
    right: 50,
  },
  bigView: {
    flex: 10,
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
  info: {
    borderBottomWidth: 2,
    fontSize: 12,
    padding: 2,
    paddingLeft: 0,
    paddingRight: 10,
  },
  infoClassroom: {
    flex: 5,
    marginTop: 5,
    padding: 6,
  },
  classroom: {
    padding: 14,
    backgroundColor: theme.secondColor,
    margin: 4,
    marginBottom: 15,
    elevation: 2,
  },
  infoName: {
    fontSize: 14,
  },
  extraView: {
    padding: 12,
    gap: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 14,
    fontFamily: "Inter",
    fontWeight: "700",
  },
  titleInfo: {
    fontWeight: "500",
    fontSize: 12,
  },
});
