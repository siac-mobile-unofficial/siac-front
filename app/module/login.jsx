import {  Pressable, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { theme } from "../theme";
import { TextInput } from "react-native-gesture-handler";
import { Link } from "expo-router";
import { useState } from "react";



export default function Login(){
    
    return(
        <View style={style.body}>
            <View style={style.logo}>
              <Text style={style.logoU}>U<Text style={style.logoFBA}>fba</Text></Text>
            </View>
            <View style={style.infos}>
                <TextInput style={style.input} placeholder="Matricula" />
                <TextInput style={style.input} placeholder="Senha" secureTextEntry={true}/>
                <Text style={{left:"22%",fontSize:12,color:theme.primaryColor}} >Esqueceu sua senha?</Text>
                <Pressable style={style.loginBT}>
                    <Text style={{fontSize:20,fontStyle:"italic",fontWeight:"500",color:theme.secondColor}}>Login</Text>
                </Pressable>
                <Link href="/module/menu" style={style.ruBT}>
                    <Text style={{fontSize:24,color:theme.secondColor,fontWeight:"700"}}>R.U</Text>
                </Link>
           </View> 
           
        </View>
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
   
    },
    logo:{
        
      flex:1, 
      marginTop:10,
      justifyContent:"center"
    },
    logoU:{
        fontSize:64,
        fontWeight:"800",
        color:theme.primaryColor
    },
    logoFBA:{
        fontWeight:"400",
        fontSize:32,
        color:theme.primaryColor
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
        width: "80%",
        borderRadius:20,
        borderWidth:2,
        borderColor:"1px solid rgba(0, 0, 0, 0.50)",  
        padding:8,
       
    },
    loginBT:{
        backgroundColor:theme.primaryColor,
        marginTop:10,
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