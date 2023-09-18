import { useRouter } from "expo-router";
import { View,Pressable,StyleSheet } from "react-native";


export default function IconBack({color}){
  
const style = StyleSheet.create({
    exit:{
        width:10,
        height:10,
        borderColor:color,
        borderBottomWidth:5,
        borderLeftWidth:5,
        transform:[{rotateZ:"45deg"}],
     
        padding:6, 
    },
}) 
   
   return <View style={{width:12,height:12, position:"absolute",
   top:"13%",
   left:"6%",}}>
             <Pressable style={style.exit} onPress={()=>{useRouter().back()}} />
        </View>
}

