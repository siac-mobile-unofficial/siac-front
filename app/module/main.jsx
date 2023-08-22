import { StyleSheet, View,Text, BackHandler, ScrollView, Pressable } from "react-native";
import { theme } from "../theme";
import User from "../dto/User";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const urlInfo = "http://192.168.0.153:8080/user/info" ;


export default function Main(){
    var option = ["MATRICULA","NOTAS","CURRICULO","SERVIÇOS","EVENTO"]
    return(
        <View style={style.body}>
             <StatusBar backgroundColor={theme.primaryColor} style="light"/>
            <View style={style.user}>
                <Text style={{fontSize:32,color:theme.secondColor,fontWeight:"500"}}>Olá,<Text style={{fontSize:26,fontWeight:"400"}}>{User.getInstance().getName()}</Text></Text>
                <Text style={{fontSize:18,color:theme.secondColor,padding:8,marginTop:10}}>Restaurante:{}</Text>
            </View>
            <View style={style.optionScreen}>
                {option.map((item)=>{
                    return(
                        <Pressable key={item} onPress={()=>{
                            switch (item) {
                                case option[0]:
                                    router.push("/module/registration")
                                    break;
                                case option[1]:
                                    console.log(option[1]);
                                    break;
                                case option[2]:
                                   router.push("/module/curriculum")
                                    break;
                                default:
                                    break;
                            }
                        }} style={style.option}>
                            <Text>{item}</Text>
                        </Pressable>
                    )
                })}
            </View>
        </View>
    )
}



const style = StyleSheet.create({
    body:{
        backgroundColor:theme.secondColor,
        display:"flex",
        flex:1,
    },
    user:{
        flex:1,
        backgroundColor:theme.primaryColor,
        zIndex:2,
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
        padding:24,
        alignItems:"flex-start",
        justifyContent:"center"

    },
    optionScreen:{
        flex:3,
        backgroundColor:theme.secondColor,
        zIndex:1,
        display:"flex",
        flexDirection:"row",
        gap:20,
        padding:12,
        flexWrap:"wrap"
        
    },
    option:{
        flex:1,
        alignItems:"center",
        backgroundColor:"red",
        padding:8,
        minWidth:"40%",
        height:"30%"

    }
    
})

