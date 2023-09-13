import {  Alert, Modal, Pressable, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { theme } from "../theme";
import { TextInput } from "react-native-gesture-handler";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import AuthorizedAlert from "../components/alert";
import Checkbox from "expo-checkbox";
import { SaveUser } from "../services/AuthorizationService";
import IconUfba from "../components/iconUfba";


export default function Login(){
    const [isRegister,setRegister] =  useState(undefined);
    const [isPassword,setPassword] = useState();
    const [isCheck,setCheck] = useState(SaveUser().getBoolean('userCheck'));
    
    
    useEffect(()=>{  
        if (!isCheck) {
           if (SaveUser().contains('user.register')) {
                SaveUser().delete('user.register')
           } 
           SaveUser().set('userCheck',isCheck)
        }else{
             if(SaveUser().getString('user.register') && isRegister === undefined) {
                SaveUser().set('userCheck',isCheck)
                setRegister(SaveUser().getString('user.register'))
            }else{
                SaveUser().delete('user.register')
                if (isRegister) {
                     SaveUser().set('user.register',isRegister)
                     SaveUser().set('userCheck',isCheck)
                }
               
            }     
}  
    },[isCheck,isRegister])
    
    return(
        <SafeAreaView style={style.body}>
           <IconUfba color={theme.primaryColor} />
            <AuthorizedAlert/>
            <View style={style.infos}>
                <TextInput autoCorrect={false} value={isRegister} onChangeText={(register)=>{setRegister( register)}} style={style.input} placeholder="CPF" textContentType="username"/>
                <TextInput autoCorrect={false}  onChangeText={(password)=>{setPassword(password)}} style={style.input} placeholder="Senha" secureTextEntry={true} textContentType="password"/>
                <View style={{flexDirection:"row-reverse",justifyContent:"center",padding:2}}>
                    <Link href="/module/passwordRecovery" style={{left:"22%"}}>
                        <Text style={{left:"22%",fontSize:12,color:theme.primaryColor}} >Esqueceu sua senha?</Text>
                    </Link>
                    <Text style={{marginRight:80,marginLeft:3}}>Lembre me</Text>
                    <Checkbox style={{width:15,height:15}} color={theme.primaryColor} value={isCheck} onValueChange={setCheck}/>
                </View>
                <Pressable onPress={()=>{isRegister == null || isPassword == null ? 
                    Alert.alert("ERRO","Falta de dados"):
                     router.replace({params:{register:isRegister,password:isPassword},pathname:"/module/loading"})}} 
                style={style.loginBT} >
                    <Text style={{fontSize:20,fontStyle:"italic",fontWeight:"500",color:theme.secondColor}}>Login</Text>
                </Pressable>
                {/* <View style={{width:"100%",justifyContent:"center",alignItems:"center",flexDirection:"row",gap:20}}>
                    <Link href="/module/menu" style={style.ruBT}>
                        <Text style={{fontSize:24,color:theme.secondColor,fontWeight:"700"}}>R.U</Text>
                     </Link>
                     <Link href="/module/menu" style={style.ruBT}>
                        <Text style={{fontSize:24,color:theme.secondColor,fontWeight:"700"}}>BusUFBA</Text>
                     </Link>
                </View> */}
               
                
           </View> 
           
        </SafeAreaView>
    )
}



const style = StyleSheet.create({
    body:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        width:"100%", 
        gap:50
   
    },

    infos:{
        width:"100%",
        flex:2,
        alignItems:"center",
        gap:10,
        justifyContent:"center",
        padding:5,

    },
    input:{
        width: "85%",
        borderRadius:20,
        borderWidth:2,
        borderColor:"1px solid rgba(0, 0, 0, 0.50)",  
        padding:10,
       
    },
    loginBT:{
        backgroundColor:theme.primaryColor,
        marginTop:30,
        width:"45%",
        borderRadius:20,
        padding:8,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center"
    },
    ruBT:{
        backgroundColor:theme.primaryColor,
        marginTop:20,
        width:"45%",
        borderRadius:20,
        padding:12,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center"
    }
})