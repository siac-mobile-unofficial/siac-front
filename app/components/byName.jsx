
import { View,Text } from "react-native" 
import { theme } from "../theme"

export default function ByName({name,color}){
    return(<View style={{flex:0,padding:12}}>
        <Text style={{textAlign:"center",color:color,fontSize:12,fontWeight:"500"}}>by @{name}</Text>
    </View>)
}