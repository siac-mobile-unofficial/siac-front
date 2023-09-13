import { View,Text,StyleSheet } from "react-native"
import { theme } from "../theme"

export default function IconUfba({color}){

    const style = StyleSheet.create({
        logo:{
            flex:1, 
            marginTop:10,
            justifyContent:"center"
          },
          logoU:{
              fontSize:64,
              fontWeight:"800",
              color:color
          },
          logoFBA:{
              fontWeight:"400",
              fontSize:32,
              color:color
          },
    })
return <View style={style.logo}>
<Text style={style.logoU}>U<Text style={style.logoFBA}>fba</Text></Text>
</View>
}

