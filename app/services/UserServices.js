
import User from "../dto/User";

const urlInfo = "http://192.168.0.153:8080/user/info";
const urlCurriculum = "http://192.168.0.153:8080/user/curriculum"
const urlClassroom = "http://192.168.0.153:8080/user/classroom"
async function Information(){
    var body={
        cookies:User.getInstance().getCookies(),
        headers:User.getInstance().getHeaders()
    }
    const response = await fetch(urlInfo,{
        method:"POST",
        body:JSON.stringify(body),
        headers:{
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
            "Content-Type":"application/json"
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
            "Content-Type":"application/json"
        }
    }).catch(error=>{
        Alert.alert("Error","Tente mais tarde, problemas no servidor")
        return console.error("Error",error)});
        if (response !== undefined) {
        const result = await response.json(); 
        return result; 
    }
}

export default Information;