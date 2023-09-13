
import { View,Modal,StyleSheet,Text,Pressable } from "react-native";
import { theme } from "../theme";
import { useEffect, useState } from "react";
import { SaveUser } from "../services/AuthorizationService";
export default function AuthorizedAlert(){
    const [isAuthorized,setAuthorized] = useState(true);
 

    return (
    SaveUser().getBoolean('user.authorized')?<></>:
    
    <Modal visible={isAuthorized} statusBarTranslucent={true} transparent={true} >
        <View style={style.authorized}>
            <View style={style.authorized_body}>
                <Text style={{fontSize:18,}}>Esse aplicativo foi desenvolvido de um estudante para outros 
                estudantes, seus dados não são amarzenados em nenhum sistema.</Text>
                
                <Pressable style={{padding:12,backgroundColor:theme.primaryColor,borderRadius:10}}
                 onPress={()=>{
                    SaveUser().set('user.authorized',true)
                    
                    setAuthorized(false)}}>
                    <Text style={{fontSize:22,fontWeight:"700",color:theme.secondColor}}>OK</Text>
                    </Pressable>
            </View>
        </View>
    </Modal>)
}

const style = StyleSheet.create({
    authorized:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
        padding:8,
        
    },
    authorized_body:{
        backgroundColor:theme.secondColor,
        width:"80%",
        padding:12,
        height:200,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        gap:20,
        marginBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    }
})