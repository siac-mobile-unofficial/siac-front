import { StyleSheet } from "react-native"

export const theme={
    primaryColor: "#291E67",
    secondColor: "#FFF"
} 
export const global = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:theme.primaryColor
    },
    bigBody:{
        flex:10,
        padding:16,
        marginBottom:4,
        paddingTop:2,
    },
    infoView:{
        flex:1,
        backgroundColor:theme.secondColor,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center",
        padding:8
      },


})