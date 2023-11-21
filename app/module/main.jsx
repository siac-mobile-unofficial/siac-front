import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  SafeAreaView,
} from "react-native";
import { theme } from "../utils/theme";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import IconUfba from "../components/iconUfba";
import ByName from "../components/byName";

const urlInfo = "http://192.168.0.153:8080/user/info";

export default function Main() {
  var option = ["MATRICULA", "NOTAS", "CURRICULO", "EVENTOS", "SERVIÇOS"];
  return (
    <SafeAreaView style={style.body}>
      <View style={style.header}>
        <IconUfba color={theme.secondColor} sizeU={40} sizeFBA={20} />
      </View>
      <View style={style.bigView}>
        <View style={style.infoView}>
          <Text> EM DESENVOLVIMENTO</Text>
        </View>
      </View>
      <View style={style.littleView}>
        <ScrollView style={style.scrollView}>
          {option.map((item, index) => {
            return (
              <Pressable
                key={index}
                onPress={() => {
                  switch (item) {
                    case "MATRICULA":
                      useRouter().push("/module/matricula");
                      break;
                    case "NOTAS":
                      useRouter().push("/module/notas");
                      break;
                    case "CURRICULO":
                      useRouter().push("/module/curriculo");
                      break;
                    case "SERVIÇOS":
                      useRouter().push("/module/servicos");
                      break;
                    case "EVENTOS":
                      useRouter().push("/module/eventos");
                      break;
                    case "SUPORTE":
                      useRouter().push("/module/suporte");
                      break;
                    default:
                      break;
                  }
                }}
                style={style.optionBody}
              >
                <Text>{item}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
      <ByName color={theme.secondColor} name={"VitaminaNescau"} />
      <StatusBar
        hidden={false}
        style="light"
        backgroundColor={theme.primaryColor}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: theme.primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 0.5,
    padding: 4,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    width: "100%",
  },
  bigView: {
    flex: 2,
    padding: 16,
    paddingTop: 2,
    backgroundColor: theme.primaryColor,
    width: "100%",
  },
  infoView: {
    backgroundColor: theme.secondColor,
    flex: 1,
    borderRadius: 10,
    elevation: 3,
  },
  littleView: {
    flex: 4,
    width: "100%",
  },
  optionBody: {
    backgroundColor: theme.secondColor,
    borderRadius: 10,
    flex: 1,
    padding: 16,
    elevation: 3,
    marginBottom: 10,
  },
  scrollView: {
    padding: 16,
  },
});
