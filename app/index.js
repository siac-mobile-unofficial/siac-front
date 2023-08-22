import { StyleSheet, Text, View } from "react-native";
import Login from "./module/login";
import { StatusBar } from "expo-status-bar";

export default function Page() {
  return (
    <View style={styles.container}>
       <Login/>
       
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  }
});
