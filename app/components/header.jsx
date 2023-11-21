import { StyleSheet, View } from "react-native";
import IconBack from "./iconBack";
import IconUfba from "./iconUfba";
import { theme } from "../utils/theme";
import { StatusBar } from "expo-status-bar";
export default function Header() {
  return (
    <View style={style.header}>
      <IconBack color={theme.secondColor} />
      <IconUfba sizeFBA={24} sizeU={48} color={theme.secondColor} />
      <StatusBar style={"light"} backgroundColor={theme.primaryColor} />
    </View>
  );
}
const style = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
  },
});
