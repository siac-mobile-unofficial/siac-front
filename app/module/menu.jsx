import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View,Text } from "react-native";
import { theme } from "../theme";

const Menu = ()=>{
    
    const router = useRouter();
    return(
        <View style={style.body}>
            <TouchableOpacity style={style.exit} onPress={()=>{router.back()}} />
            <Text>Cardapio</Text>
        </View>

    )
}

const style = StyleSheet.create({
    body:{
        backgroundColor:theme.primaryColor,
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    exit:{
        width:15,
        height:15,
        borderColor:theme.secondColor,
        borderBottomWidth:5,
        borderLeftWidth:5,
        transform:[{rotateZ:"45deg"}],
        position:"absolute",
        top:"3%",
        left:"5%",
        padding:7


    }
})
export default Menu;