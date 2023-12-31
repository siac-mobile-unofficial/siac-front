import { Alert } from "react-native";
import User from "../dto/User";
import { MMKV } from "react-native-mmkv";
import { BACK_END } from "@env";

const forbidden = 403;
const unathorized = 401;
const urlAuthentication = `http://${BACK_END}/auth/login`;

async function Authentication(register, password) {
  console.log(BACK_END);
  var data = {
    register: register,
    password: password,
  };
  const response = await fetch(urlAuthentication, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => {
    return Alert.alert(
      `Erro${error}`,
      `Tente mais tarde, problemas no servidor`,
    );
  });

  if (response !== undefined) {
    if (response.ok) {
      return true;
    }
    if (response.status == unathorized) {
      let result = await response.json();
      Alert.alert("Erro", result.message);
      return false;
    }
    Alert.alert(
      `Erro ${response.status}`,
      `Problemas de conexão com o servidor`,
    );
    return false;
  }
  return false;
}
export async function PasswordRecovery() {}

export function SaveUser() {
  const save = new MMKV({
    id: `user-register-storage`,
    encryptionKey: "seguro",
  });
  if (!save.contains("userCheck")) {
    save.set("userCheck", false);
  } else {
    save.set("userCheck", save.getBoolean("userCheck"));
  }
  return save;
}

export default Authentication;
