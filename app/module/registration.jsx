import User from "../dto/User"
import { StyleSheet, View,Text,Pressable, ActivityIndicator, FlatList } from "react-native"
import { theme } from "../theme"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { useEffect } from "react"
import { PDF, infoClassroom } from "../services/UserServices"
import { router } from "expo-router"
export default function Registration(){
    const [data,setData] = useState(null);
    useEffect(()=>{
        async function api(){
            setData(await infoClassroom())
        }
        api()
    },[])
    const matter = [1,2]
    return(
        <View style={{flex:1}}>
            <View style={style.cardTop}>
            <Pressable style={style.exit} onPress={()=>{router.back()}} />
                <Text style={style.info}><Text style={{fontWeight:"700",fontSize:16}}>Nome:</Text> {User.getInstance().getName()}</Text>
                <Text style={style.info}><Text style={{fontWeight:"700",fontSize:16}}>Matricula:</Text> {User.getInstance().getRegister()}</Text>
                <Text style={style.info}><Text style={{fontWeight:"700",fontSize:16}}>Curso:</Text> {User.getInstance().getCourse()}</Text>
                <Text style={style.info}><Text style={{fontWeight:"700",fontSize:16}}>Semestre:</Text> {User.getInstance().getSemester()}</Text>
                <Text style={style.info}><Text style={{fontWeight:"700",fontSize:16}}>CR:</Text> {User.getInstance().getCR()}</Text>
            </View>
            <View style={style.body}>
                {data ? (
                <FlatList
                 data={data}
                 renderItem={({item})=>{
                    const hours = item.classhours.split("/");
                    return(<Pressable style={style.cardMatter}>
                    <Text style={{fontSize:28,fontWeight:"700"}}>{hours[0]}<Text>/</Text><Text style={{fontSize:16,fontWeight:"500"}}>{hours[1]}</Text></Text>
                    <Text>{item.date}</Text><Text>{item.local}</Text><Text style={{fontSize:16,width:"30%"}}>{item.name}</Text>
                    </Pressable>)
                 }}
                />
                )
                : <ActivityIndicator style={{flex:1}} size={72} color={theme.primaryColor}/> 
                }
               
            </View>
                <Pressable onPress={()=>{console.log(PDF());}} style={style.pdf}>
                    <Text style={{fontSize:18,color:theme.secondColor,fontWeight:"700"}}>PDF</Text>
                </Pressable>
            <StatusBar backgroundColor={theme.primaryColor} style="light"/>
        </View>
    )
}

const style = StyleSheet.create({
    cardTop:{
        flex:1,
        backgroundColor:theme.primaryColor,
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
        padding:14,
        gap:5,
        alignItems:"left",
        justifyContent:"center"
    },
    body:{
        flex:3,
        marginTop:10
    },
    info:{
        fontSize:14,
        color:theme.secondColor,
    },
    cardMatter:{
        borderBottomColor:theme.primaryColor,
        borderBottomWidth:5,
        height:80,
        padding:8,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"flex-end"
    },
    exit:{
        width:10,
        height:10,
        borderColor:theme.secondColor,
        borderBottomWidth:5,
        borderLeftWidth:5,
        transform:[{rotateZ:"45deg"}],
        position:"absolute",
        top:"8%",
        left:"5%",
        padding:6, 
    },
    pdf:{
        zIndex:5,
        position:"absolute",
        width:80,
        height:40,
        backgroundColor:theme.primaryColor,
        bottom:10,
        right:10,
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center"
    }
})