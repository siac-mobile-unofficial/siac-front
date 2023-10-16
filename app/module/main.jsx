import { StyleSheet, View,Text, BackHandler, ScrollView, Pressable, SafeAreaView, ScrollViewBase } from "react-native";
import { theme } from "../theme";
import User from "../dto/User";
import { router, useRouter,Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CardTop from "../components/cardTop";
import IconUfba from "../components/iconUfba";
import { FlatList } from "react-native-gesture-handler";
import ByName from "../components/byName";

const urlInfo = "http://192.168.0.153:8080/user/info" ;


export default function Main(){
    var option = ["MATRICULA","NOTAS","CURRICULO","SERVIÇOS","EVENTOS","SUPORTE"]
    return(
        <SafeAreaView style={style.body}>
            <View style={style.header}>
                <IconUfba color={theme.secondColor} sizeU={40} sizeFBA={20}/>
            </View>
           <View style={style.bigView}>
                <View style={style.infoView}>

                </View>
           </View>
           <View  style={style.littleView}>
                <ScrollView  style={style.scrollView}>
                    {option.map((item)=>{return(<Pressable onPress={()=>{useRouter().push(`/module/${item.toLocaleLowerCase()}`)}} style={style.optionBody}>
                        <Text>{item}</Text>
                    </Pressable>)})}
                </ScrollView>
           </View>
            <ByName color={theme.secondColor} name={"VitaminaNescau"}/>
           <StatusBar hidden={false} style="light" backgroundColor={theme.primaryColor} />
        </SafeAreaView>
        
    )
}


const style = StyleSheet.create({
body:{
    flex:1,
    flexDirection:"column",
    backgroundColor:theme.primaryColor,
    justifyContent:"center",
    alignItems:"center" 
},
header:{
    flex:.5,
    padding:4,
    alignItems:"flex-start", 
    justifyContent: "flex-start",
    alignContent:"flex-start",
    width:"100%"
},
bigView:{
    flex:2,
    padding:16,
    paddingTop:2,
    backgroundColor:theme.primaryColor,
    width:"100%",
},
infoView:{
    backgroundColor:theme.secondColor,
    flex:1,
    borderRadius:10,
    backgroundColor: "#FFFFFF",
    elevation:3,
},
littleView:{
    flex:4,
    width:"100%",    
    
},
optionBody:{
    backgroundColor:theme.secondColor,
    borderRadius:10,
    flex:1,
    padding:16,
    
    backgroundColor: "#FFFFFF",
    elevation:3,
    marginBottom:10
},
scrollView:{
    padding:16,
}
})

