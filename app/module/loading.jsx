import { ActivityIndicator, StyleSheet, View,Text } from "react-native"
import { theme } from "../theme"
import Authentication from "../services/AuthorizationService"
import {useRouter , useLocalSearchParams } from "expo-router";
import Information from "../services/UserServices";
import User from "../dto/User";

export default   function Loading(){
    const router = useRouter();
    const {register,password} = useLocalSearchParams()
    async function verifyAuth(){
        const auth = await Authentication(register,password)
        if (auth) {
            const infos =  await  Information()
            User.getInstance().setName(infos.name);
            User.getInstance().setRegister(infos.register);
            User.getInstance().setCourse(infos.couser);
            User.getInstance().setCR(infos.cr);
            User.getInstance().setSemester(infos.semester);
            router.replace("/module/main")
        }else{
            router.replace("/module/login");
        }
    }
    verifyAuth();
    
    
    return(
        <View style={style.body}>
            <View style={style.logo}>
              <Text style={style.logoU}>U<Text style={style.logoFBA}>fba</Text></Text>
            </View>
            <ActivityIndicator style={{flex:3}} size={72} 
            color={theme.secondColor}/>
        </View>
    )
}



const style = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:theme.primaryColor,
        alignItems:"center",
        justifyContent:"center"
    },
    logo:{
        
        flex:1, 
        marginTop:10,
        justifyContent:"center"
      },
      logoU:{
          fontSize:64,
          fontWeight:"800",
          color:theme.secondColor
      },
      logoFBA:{
          fontWeight:"400",
          fontSize:32,
          color:theme.secondColor
      }
})