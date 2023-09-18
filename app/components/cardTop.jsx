import { StyleSheet, View } from "react-native";
import { theme } from "../theme";
import IconBack from "./iconBack";
export default function CardTop({Values,Return}){
    return(<View style={style.body}>
        {Return?<IconBack color={theme.secondColor}/>:<></>}
        {Values}
        </View>)
}

const style = StyleSheet.create({
    body:{
        minHeight:"30%",    
        maxHeight:"40%",
        backgroundColor:theme.primaryColor,
        zIndex:2,
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
        padding:24,
        alignItems:"flex-start",
        justifyContent:"center",
        shadowColor: "black",
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    }
})