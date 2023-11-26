import { SafeAreaView, useWindowDimensions, View } from "react-native";
import { global } from "../../utils/theme";
import Header from "../../components/header";
import Pdf from "react-native-pdf";
import { pdfhistory } from "../../services/UserServices";
import { BACK_END } from "@env";

export default function History() {
  return (
    <SafeAreaView style={global.body}>
      <Header />
      <View style={global.bigBody}>
        <View style={global.infoView}>
          <Pdf
            trustAllCerts={false}
            source={{ uri: `http://${BACK_END}/user/history`, cache: true }}
            style={{
              flex: 1,
              width: "100%",
            }}
            onError={(error) => {
              console.error(error);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
