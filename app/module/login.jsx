import { Alert, Pressable, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { theme } from "../utils/theme";
import { TextInput } from "react-native-gesture-handler";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import AuthorizedAlert from "../components/alert";
import Checkbox from "expo-checkbox";
import { SaveUser } from "../services/AuthorizationService";
import IconUfba from "../components/iconUfba";
import { StatusBar } from "expo-status-bar";
import ByName from "../components/byName";

export default function Login() {
  const [isRegister, setRegister] = useState();
  const [isPassword, setPassword] = useState("Brasil@2911");
  const [isCheck, setCheck] = useState(SaveUser().getBoolean("userCheck"));

  useEffect(() => {
    if (!isCheck) {
      if (SaveUser().contains("user.register")) {
        SaveUser().delete("user.register");
      }
      SaveUser().set("userCheck", isCheck);
    } else {
      if (SaveUser().getString("user.register") && isRegister === undefined) {
        SaveUser().set("userCheck", isCheck);
        setRegister(SaveUser().getString("user.register"));
      } else {
        SaveUser().delete("user.register");
        if (isRegister) {
          SaveUser().set("user.register", isRegister);
          SaveUser().set("userCheck", isCheck);
        }
      }
    }
  }, [isCheck, isRegister]);

  return (
    <SafeAreaView style={style.body}>
      <IconUfba color={theme.primaryColor} sizeU={64} sizeFBA={36} />
      <AuthorizedAlert />
      <View style={style.infos}>
        <View style={style.bodyInput}>
          <TextInput
            autoCorrect={false}
            value={isRegister}
            onChangeText={(register) => {
              setRegister(register);
            }}
            style={style.input}
            placeholder="CPF"
            textContentType="username"
          />
          <TextInput
            autoCorrect={false}
            onChangeText={(password) => {
              setPassword(password);
            }}
            style={style.input}
            placeholder="Senha"
            secureTextEntry={true}
            textContentType="password"
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "95%",
              alignItems: "flex-end",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Checkbox
                style={{ width: 13, height: 13 }}
                color={theme.primaryColor}
                value={isCheck}
                onValueChange={setCheck}
              />
              <Text style={{}}>Lembre me</Text>
            </View>
            <Link href="/module/passwordRecovery">
              <Text
                style={{
                  left: "22%",
                  fontSize: 10,
                  color: theme.primaryColor,
                  fontFamily: "Inter",
                  fontStyle: "italic",
                  fontWeight: "600",
                }}
              >
                Esqueceu sua senha?
              </Text>
            </Link>
          </View>
          <Pressable
            onPress={() => {
              isRegister == null || isPassword == null
                ? Alert.alert("ERRO", "Falta de dados")
                : router.replace({
                    params: { register: isRegister, password: isPassword },
                    pathname: "/module/loading",
                  });
            }}
            style={style.loginBT}
          >
            <Text
              style={{
                fontSize: 20,
                fontStyle: "italic",
                fontWeight: "500",
                color: theme.secondColor,
                fontFamily: "Inter",
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
        {/* <View style={{flex:.5,width:"100%",justifyContent:"center",alignItems:"center",flexDirection:"row",gap:20}}>
                    <Link href="/module/menu" style={style.ruBT}>
                        <Text style={{fontSize:24,color:theme.secondColor,fontWeight:"700"}}>R.U</Text>
                     </Link>
                     <Link href="/module/menu" style={style.ruBT}>
                        <Text style={{fontSize:24,color:theme.secondColor,fontWeight:"700"}}>BusUFBA</Text>
                     </Link>
                    </View>     */}
      </View>
      <ByName name={"VitaminaNescau"} color={theme.primaryColor} />
      <StatusBar
        style="dark"
        backgroundColor={theme.secondColor}
        translucent={true}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  body: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 18,
  },
  infos: {
    width: "100%",
    flex: 3,
    gap: 20,
    padding: 12,
  },
  bodyInput: {
    flex: 1,
    gap: 3,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    width: "100%",
  },
  input: {
    width: "100%",
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.40)",
    padding: 8,
    paddingLeft: 12,
    backgroundColor: "#FFF",
    margin: 1,
    fontSize: 12,
  },
  loginBT: {
    backgroundColor: theme.primaryColor,
    width: "50%",
    borderRadius: 20,
    padding: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    top: 30,
  },
  ruBT: {
    backgroundColor: theme.primaryColor,
    marginTop: 20,
    width: "45%",
    borderRadius: 20,
    padding: 12,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
