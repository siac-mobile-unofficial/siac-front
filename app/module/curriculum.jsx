import {  Pressable, View, Text, StyleSheet, FlatList, SafeAreaView, ActivityIndicator} from "react-native";
import { infoCurriculum } from "../services/UserServices";
import { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { theme } from "../theme";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import User from "../dto/User";

export default function Curriculum() {
  const [items, setItems] = useState([{label:"null",value:"null"}]);
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [statusDesc,setStatusDesc] = useState(false);
  const [statusData,setStatusData] = useState(User.getInstance().getData());
  const router = useRouter();
  useEffect( ()=>{
    async function api(){
      User.getInstance().setData(await infoCurriculum())  
      setStatusData(User.getInstance().getData())    
   }
    if (User.getInstance().getData() === undefined) {
      api()
    }  
  },[]) 
  useEffect(() => {
    if (statusData) {
        const uniqueValues = new Set(statusData.map(obj => obj[Object.keys(obj)[0]]));
        const objItems = Array.from(uniqueValues, valorUnico => ({
            label: valorUnico,
            value: valorUnico,
        }));
        setValue(objItems[0])
        setItems(objItems);
    }
}, [statusData]);
    return (
      <SafeAreaView style={{flex: 1 }}>
        <StatusBar backgroundColor={theme.primaryColor} style="light"/>
        <View style={style.cardTop}> 
        <Pressable style={style.exit} onPress={()=>{router.back()}} />
          <DropDownPicker placeholder={"Selecione o semestre"}
          style={{borderWidth:0,width:"90%",borderRadius:30,marginLeft:"5%"}}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          maxHeight={500}/>
        </View>
      
       <View style={style.body}> 
       {statusData != null? 
          <FlatList 
            data={statusData}
            renderItem={({item})=>{
              if (item.semester == value ) {    
              return(
              <Pressable
              onPress={()=>{statusDesc? setStatusDesc(false):setStatusDesc(true)}} >
                <View style={style.matter}>
                  <Text>{item.semester}</Text>
                  <Text style={{fontSize:22}}>{item.code}</Text>
                  <Text style={{maxWidth:"40%",overflow:"hidden",fontSize:12}}>{item.name}</Text>
                  <Text>{item.type}</Text>
                </View>
                {statusDesc?<Description/>:null}
        </Pressable>) }}}
        />  
       
         : <ActivityIndicator style={{flex:1}} size={72} 
        color={theme.primaryColor}/> 
      }
        </View>
      </SafeAreaView>
    );
  }
  const Description = ()=>{
    return(
      <View style={{backgroundColor:"red",width:30,height:30}}></View>
    )
  }
  const style = StyleSheet.create({
    cardTop:{
        flex:1,
        width:"100%",
        borderBottomEndRadius:30,
        borderBottomStartRadius:30,
        backgroundColor:theme.primaryColor,
        zIndex:5,
        justifyContent:"flex-end",
        padding:8
    },
    body:{
        flex:5,
        backgroundColor:theme.secondColor,
        justifyContent:"flex-end"
        
    },
    matter:{
        width:"100%",
        height:80,
        borderBottomColor:theme.primaryColor,
        borderBottomWidth:5,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:8,
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
  })
