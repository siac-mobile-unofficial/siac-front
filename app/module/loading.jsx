import { ActivityIndicator, StyleSheet, View,Text } from "react-native"
import { theme } from "../theme"
import Authentication from "../services/AuthorizationService"
import {useRouter , useLocalSearchParams } from "expo-router";
import Information from "../services/UserServices";
import User from "../dto/User";
import { StatusBar } from "expo-status-bar";
import IconUfba from "../components/iconUfba";

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
            <IconUfba color={theme.secondColor} sizeU={64} sizeFBA={36} />
            <ActivityIndicator style={{flex:3}} size={72} 
            color={theme.secondColor}/>
            <StatusBar backgroundColor={theme.primaryColor} style="light"/>
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

})