
import { Platform } from "react-native";
import User from "../dto/User";
import * as FileSystem from 'expo-file-system';
import { requestPermissionsAsync } from "expo-media-library";
import * as Sharing from 'expo-sharing';

const ip = "192.168.0.153"
const urlInfo = `http://${ip}:8080/user/info`;
const urlCurriculum = `http://${ip}:8080/user/curriculum`;
const urlClassroom = `http://${ip}:8080/user/classroom`;
const urlPdf = `http://${ip}:8080/user/pdf`;
async function Information(){
    var body={
        cookies:User.getInstance().getCookies(),
        headers:User.getInstance().getHeaders()
    }
    const response = await fetch(urlInfo,{
        method:"POST",
        body:JSON.stringify(body),
        headers:{
            "Origin":"http://dev.com",
            "Content-Type":"application/json"
        }
    }).catch(error=>{
        Alert.alert("Error","Tente mais tarde, problemas no servidor")
        return console.error("Error",error)});
    if (response !== undefined) {
        
        const result = await response.json();
        const resultInfo = {
        name:result.name,
        couser:result.couser,
        year:result.year,
        cr:result.cr,
        register:result.register,
        semester:result.semester

    }
   
    return resultInfo;
    }
        

}

export async function infoCurriculum(){
    var body={
        cookies:User.getInstance().getCookies(),
        headers:User.getInstance().getHeaders()
    }
    const response = await fetch(urlCurriculum,{
        method:"POST",
        body:JSON.stringify(body),
        headers:{
            "Content-Type":"application/json",
            "Origin":"http://dev.com"

        }
    }).catch(error=>{
        Alert.alert("Error","Tente mais tarde, problemas no servidor")
        return console.error("Error",error)});
        if (response !== undefined) {
        const result = await response.json(); 
        return result; 
    }
}
export async function infoClassroom(){
    var body={
        cookies:User.getInstance().getCookies(),
        headers:User.getInstance().getHeaders()
    }
    const response = await fetch(urlClassroom,{
        method:"POST",
        body:JSON.stringify(body),
        headers:{
            "Content-Type":"application/json",
            "Origin":"http://dev.com"

        }
    }).catch(error=>{
        Alert.alert("Error","Tente mais tarde, problemas no servidor")
        return console.error("Error",error)});
        if (response !== undefined) {
        const result = await response.json(); 
        return result; 
    }
}
export async function PDF(){
    if (Platform.OS === "android" && Platform.Version >= "11") {
       requestPermissionsAsync()
       
    }
    var body={
        cookies:User.getInstance().getCookies(),
        headers:User.getInstance().getHeaders()
    }
    const response = await fetch(urlPdf,{
        method:"POST",
        body:JSON.stringify(body),
        headers:{
            "Content-Type":"application/json",
            "Origin":"http://dev.com"

        }
    }).catch(error=>{
        Alert.alert("Error","Tente mais tarde, problemas no servidor")
        return console.error("Error",error)});

        if (response !== undefined) {
        const result = await  response.blob();
        
       
       try{
            const fileUri = `${FileSystem.documentDirectory}${response.headers.get("Content-Disposition").split("filename=")[1]}`
            const fileReaderInstance = new FileReader();
            fileReaderInstance.readAsDataURL(result);
            fileReaderInstance.onload = async () => {
                const base64data = fileReaderInstance.result.split(',');
                const pdfBuffer = base64data[1];
                await FileSystem.writeAsStringAsync(fileUri, pdfBuffer, {
                  encoding: FileSystem.EncodingType.Base64,
                });
            }
         console.log('Arquivo baixado com sucesso:', fileUri);
          if (await Sharing.isAvailableAsync()) {
            Sharing.shareAsync(fileUri,{mimeType:'application/pdf'})
          }
       }catch(error){
        console.error('Erro ao baixar o arquivo:', error);

       }
       
       
    }
}
export default Information;