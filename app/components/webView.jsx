import WebView from "react-native-webview";

export default function Web() {
  return (
    <WebView
      source={{ uri: "https://github.com/VitaminaNescau" }}
      useWebView2={true}
      androidLayerType={"hardware"}
      cacheEnabled={true}
    />
  );
}
