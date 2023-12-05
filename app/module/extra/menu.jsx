import { useRouter } from "expo-router";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { theme } from "../../utils/theme";

const Menu = () => {
  const router = useRouter();
  const options = ["Ondina", "Canela", "São Lazaro"];
  const cards = ["opt1", "opt2", "opt3", "sal1", "sal2", "sobremesa"];
  return (
    <View style={style.body}>
      <Pressable
        style={style.exit}
        onPress={() => {
          router.back();
        }}
      />
      <View style={style.body_option}>
        {options.map((item) => {
          return (
            <Pressable key={item}>
              <Text style={style.option}>{item}</Text>
            </Pressable>
          );
        })}
      </View>
      <View style={style.body_info}>
        <Text
          style={{
            flex: 1,
            width: "100%",
            textAlign: "center",
            padding: 8,
            fontSize: 16,
            color: theme.secondColor,
          }}
        >
          Status do R.u
        </Text>
        {cards.map((item) => {
          return (
            <View style={style.cardBody}>
              <Text>Titulo</Text>
              <Text>Ingredientes</Text>
              <Text>status</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  body: {
    backgroundColor: theme.primaryColor,
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  exit: {
    width: 15,
    height: 15,
    borderColor: theme.secondColor,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    transform: [{ rotateZ: "45deg" }],
    position: "absolute",
    top: "3%",
    left: "5%",
    padding: 7,
  },
  body_option: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    gap: 45,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 16,
  },
  option: {
    color: theme.secondColor,

    fontSize: 18,
    textAlign: "center",
  },
  body_info: {
    flex: 10,
    width: "100%",
  },
  cardBody: {
    padding: 8,
    flex: 1,
  },
});
export default Menu;
