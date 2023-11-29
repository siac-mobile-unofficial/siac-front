import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function ByName({ name, color }) {
  return (
    <View style={{ flex: 0, padding: 12 }}>
      <Pressable
        onPress={() => {
          useRouter().push("components/webView");
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: color,
            fontSize: 12,
            fontWeight: "500",
          }}
        >
          by @{name}
        </Text>
      </Pressable>
    </View>
  );
}
