import {
  Pressable,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import Header from "../../components/header";
import { global, theme } from "../../utils/theme";
import ByName from "../../components/byName";
import { useState } from "react";
import { expandFAQ } from "../../utils/utils";
import { Tabs } from "expo-router";

export default function Lock() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const valuesTest = [1, 5, 5, 5, 5, 5, 5, 5, 5, 5, , 5];
  const hiddenFAQ = (
    <View>
      <Text>Perguntas frequentes</Text>
    </View>
  );

  const [FAQ, setFAQ] = useState(hiddenFAQ);
  const notLock = (
    <View style={{ flex: 5, padding: 20, gap: 20, alignItems: "center" }}>
      <Text
        style={{
          fontSize: 14,
          textAlign: "center",
          fontWeight: "600",
          fontFamily: "Inter",
        }}
      >
        A solicitação de trancamento pela web só pode ser realizada dentro do
        período estabelecido no Calendário Acadêmico.
      </Text>

      <Pressable
        disabled={modal}
        style={styles.FAQ}
        onPress={() => {
          if (open) {
            setOpen(false);
            setFAQ(hiddenFAQ);
          } else {
            setOpen(true);
            setFAQ(expandFAQ);
            setModal(true);
          }
        }}
      >
        {FAQ}
      </Pressable>
    </View>
  );
  const Lock = (
    <View style={{ flex: 10, width: "100%", alignItems: "center", gap: 20 }}>
      <Text>Selecione uma ou mais disciplinas</Text>
      <View
        style={{
          backgroundColor: theme.secondColor,
          elevation: 3,
          padding: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "85%",
        }}
      >
        <Text
          style={{
            width: "80%",
            textAlign: "left",
          }}
        >
          Disciplina
        </Text>
        <Text
          style={{
            width: "20%",
            textAlign: "center",
          }}
        >
          CH
        </Text>
      </View>
      <FlatList
        data={valuesTest}
        keyExtractor={(item, index) => index.toString()}
        style={{
          backgroundColor: theme.secondColor,
          elevation: 3,
          width: "85%",
          maxHeight: "50%",
          flexGrow: 0,
          minHeight: "00%",
        }}
        contentContainerStyle={{
          gap: 30,
          justifyContent: "center",
          alignItems: "center",
          padding: 12,
        }}
        ListEmptyComponent={() => {
          return <></>;
        }}
        renderItem={() => {
          return (
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 4,
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <Text
                style={{
                  width: "80%",
                  textAlign: "left",
                }}
              >
                Logica de programação
              </Text>
              <Text
                style={{
                  width: "20%",
                  textAlign: "center",
                }}
              >
                68
              </Text>
            </Pressable>
          );
        }}
      />
      <View style={{ width: "80%", alignItems: "center", gap: 10, padding: 8 }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              width: "80%",
              textAlign: "left",
              fontFamily: "Inter",
              fontWeight: "700",
            }}
          >
            Carga horaria disponivel
          </Text>
          <Text
            style={{
              width: "20%",
              textAlign: "center",
              fontFamily: "Inter",
              fontWeight: "700",
            }}
          >
            1050
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              width: "80%",
              textAlign: "left",
              fontFamily: "Inter",
              fontWeight: "700",
            }}
          >
            Carga horaria consumida
          </Text>
          <Text
            style={{
              width: "20%",
              textAlign: "center",
              fontFamily: "Inter",
              fontWeight: "700",
            }}
          >
            210
          </Text>
        </View>
      </View>
      <Pressable
        style={{
          padding: 18,
          backgroundColor: theme.secondColor,
          elevation: 6,
          borderRadius: 10,
          paddingHorizontal: 64,
        }}
      >
        <Text style={{ fontFamily: "Inter", fontWeight: "700" }}>
          Trancar disciplina
        </Text>
      </Pressable>
    </View>
  );

  const valid = true;
  return (
    <SafeAreaView style={global.body}>
      <Header />
      <View style={global.bigBody}>
        <View style={global.infoView}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              fontFamily: "Inter",
              flex: 1,
              padding: 12,
            }}
          >
            Trancamento de Matricula
          </Text>
          {valid ? Lock : notLock}
        </View>
      </View>
      <ByName name={"VitaminaNescau"} color={theme.secondColor} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  FAQ: {
    elevation: 4,
    backgroundColor: theme.secondColor,
    padding: 18,
    borderRadius: 10,
    marginTop: 50,
  },
});
