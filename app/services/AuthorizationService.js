import { router } from "expo-router";
import { Alert } from "react-native";
import User from "../dto/User";

const urlAuthentication = "http://192.168.0.153:8080/auth/login";
async  function Authentication (register,password){
    var data = {
    register:register,
    password:password
    }
    
    const response = await fetch(urlAuthentication,{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
          },
          body:JSON.stringify(data)
    })
    .catch(error=>{
        console.error(error);
        return Alert.alert("Erro","Tente mais tarde, problemas no servidor")
      });
  
    if (response !== undefined) {
        if (response.ok) {
        const result = await response.json();
        User.getInstance().setCookies(result[0]);
        User.getInstance().setHeaders(result[1]);
        return true;    
    }
    Alert.alert("Erro","Matricula ou senha incorreta")
    return false
    }
    return false;
  

     
}


export default Authentication;