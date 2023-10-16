import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet,View,Text,FlatList } from "react-native";
import { theme } from "../theme";
import Header from "../components/header";

export default function Support() {
    const teste = [1,2,3,4,5,5]
    return(<SafeAreaView style={style.body}>
            <Header/>
            <View style={style.bigBody}>
                <FlatList
                    data={teste}
                    renderItem={({item})=>{return <View><Text>{item}</Text></View>}}
                />
                
            </View>
        <StatusBar hidden={false} backgroundColor={theme.primaryColor} style="light"/>
    </SafeAreaView>)
}
const style = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:theme.primaryColor
    },
    bigBody:{
        flex:10,
        padding:16,
    }
})