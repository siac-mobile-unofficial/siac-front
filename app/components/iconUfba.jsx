import { View,Text,StyleSheet } from "react-native"
import { theme } from "../theme"

export default function IconUfba({color,sizeU,sizeFBA}){

    const style = StyleSheet.create({
        logo:{
            alignItems:"center",
            justifyContent:"center",
            alignContent:"center",
            marginLeft:10,
            marginRight:10,
          },
          logoU:{
            fontSize:sizeU,
            fontWeight:"700",
            fontFamily:"Inter",
            color:color
          },
          logoFBA:{
            fontWeight:"300",
            fontSize:sizeFBA,
            color:color,
            fontStyle:"italic",
            fontFamily:"Inter",   
            },
    })
return <View style={style.logo}>
<Text style={style.logoU}>U<Text style={style.logoFBA}>fba</Text></Text>
</View>
}

