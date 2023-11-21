import { SafeAreaView, useWindowDimensions, View } from "react-native";
import { global } from "../../utils/theme";
import Header from "../../components/header";
import Pdf from "react-native-pdf";
import { pdfhistory } from "../../services/UserServices";
import { useEffect, useState } from "react";

export default function History() {
  const [isPDF, setPDF] = useState();
  setPDF(pdfhistory);
  return (
    <SafeAreaView style={global.body}>
      <Header />
      <View style={global.bigBody}>
        <View style={global.infoView}>
          <Pdf
            trustAllCerts={false}
            source={{ uri: isPDF }}
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
