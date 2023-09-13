import { KeyboardAvoidingView, Platform, StyleSheet,Text, TextInput } from "react-native";
import { View } from "react-native";
import { theme } from "../theme";
import { useEffect, useState } from "react";
import { Pressable,SafeAreaView } from "react-native";
import { router, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import IconUfba from "../components/iconUfba";


var choice = false

export default function PasswordRecovery(){
    const [isChoice,setChoice] = useState(false);
    const [isOption,setOption] = useState(null);
    function ChangePassword(){
        const [isCPF,setCPF] = useState(null);
        const [isPass,setPass] = useState(null);
        const [isNewPass,setNewPass] = useState(null);
        const [isTir,setTir] = useState(null);
        const [isAlert,setAlert] = useState(null);
        return(
            <SafeAreaView style={style.body}> 
                <Pressable onPress={()=>{setChoice(false)}}><Text>Voltar</Text></Pressable>
                <Text>Troca de senha</Text>
                <TextInput placeholder="CPF" onChange={(cpf)=>{setCPF(cpf)}} nu textContentType="none" keyboardType="number-pad" style={style.input}/>
                <TextInput placeholder="Senha atual" onChange={(pass)=>{setPass(pass)}} secureTextEntry={true} textContentType="password" style={style.input}/>
                <TextInput placeholder="Nova senha" onChangeText={(pass)=>{setNewPass(pass)/ console.log(isNewPass);}}  secureTextEntry={true}  textContentType="password" style={style.input}/>           
                <TextInput placeholder="Repita nova senha" onChangeText={(pass)=>{pass!=isNewPass? setAlert("Senha errada"): setAlert("Correta")}}  secureTextEntry={true} textContentType="password" style={style.input}/>
                <Text>testando:{isAlert}</Text>
                <TextInput placeholder="Dica" onChange={(cpf)=>{setCPF(cpf)}} style={style.input}/>
                <Text>{}</Text>
                <Pressable><Text>Troca senha</Text></Pressable>
                <StatusBar backgroundColor={theme.primaryColor} style="light"/>
            </SafeAreaView>
        )
    }
    function ResetPassword(){
        return(<SafeAreaView></SafeAreaView>)
    }
    
    return isChoice?
            isOption
            :
            (<View style={style.body}>
                <IconUfba color={theme.secondColor} />

            <View style={{flex:2,gap:15,width:"100%",alignItems:"center",padding:8}}>
                <Pressable style={style.optionBT} onPress={()=>{setChoice(true)
            setOption(<ChangePassword/>)}}>
                <Text>Troca senha</Text>
            </Pressable>
            <Pressable style={style.optionBT} onPress={()=>{setChoice(true)}} >
                <Text>Resetar senha</Text>
            </Pressable>
            </View>
            
            </View>)
       
       
    
}



const style = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:theme.primaryColor,
        padding:8,
        gap:20,
        justifyContent:"center",
        alignItems:"center",
        width:"100%"
    },
    input:{
        backgroundColor:theme.secondColor,
        padding:8,
        borderRadius:10
    
    },
    optionBT:{
        padding:12,
        backgroundColor:theme.secondColor,
        alignItems:"center",
        width:"40%",
        borderRadius:10,
    }

})