import { SafeAreaView, View } from "react-native";
import { global } from "../../utils/theme";
import Header from "../../components/header";

export default function Contact() {
  return (
    <SafeAreaView style={global.body}>
      <Header />
      <View style={global.bigBody}>
        <View style={global.infoView}></View>
      </View>
    </SafeAreaView>
  );
}
