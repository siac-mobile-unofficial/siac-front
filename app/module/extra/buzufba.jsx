import {SafeAreaView, View} from "react-native";
import IconBack from "../../components/iconBack";
import IconUfba from "../../components/iconUfba";
import ByName from "../../components/byName";
import {theme} from "../../utils/theme";
import MapView, {Marker} from "react-native-maps";
import {BACK_END} from "@env";
import React, {useState} from "react";
import PointUFBA from "../../dto/Point";

const ws = new WebSocket(`ws://${BACK_END}/maps`)
ws.onerror = (e) => {
    console.log(e)
}
ws.onclose = () => {
    console.log('fechado')
}
ws.onopen = () => {
    console.log('entrou')
}
export default function Buzufba() {
    const [isPoint, setPoint] = useState([]);
    const [isBus, setBus] = useState();
    const [isCard,setCard] = useState()
    const MarkePoints =({userPosition}) =>{
        console.log(userPosition)
        return <Marker  coordinate={{latitude:userPosition.locale.latitude,longitude:userPosition.locale.longitude}} icon={require("../../../assets/onibus.png")}
                       tracksViewChanges={false} title={userPosition.name}
        onPress={}

        />
    }
    const CardPointToBus = ({})=>{}



    ws.onmessage = (ev) => {
      const value = JSON.parse(ev.data)
        switch (value.type){
            case 'POINT': {
                setPoint(value.data)
                return
            }
            case 'BUS':{
                setBus(value.data)
                return;
            }
        }


    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{
                position: "absolute",
                zIndex: 5,
                width: "100%",
                height: "12%",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                paddingLeft: 25,
                paddingRight: 25,
                paddingBottom: 0,
            }}>
                <View
                    style={{
                        backgroundColor: theme.secondColor,
                        borderRadius: 30,
                        elevation: 6,
                        width: 40,
                        height: 40,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: 6,
                        paddingRight: 2,
                    }}
                >
                    <IconBack color={theme.primaryColor}/>
                </View>
                <View style={{padding: 2, elevation: 6, backgroundColor: theme.secondColor, borderRadius: 30}}>
                    <IconUfba sizeU={48} sizeFBA={24} color={theme.primaryColor}/>
                </View>
            </View>

            <MapView style={{flex: 1, position: "relative"}}
                     followsUserLocation={false}
                     showsUserLocation={false}
                     renderToHardwareTextureAndroid={true}
                     showsMyLocationButton={false}
                     showsIndoors={false}
                     showsTraffic={false}
                     showsPointsOfInterest={false}
                     showsBuildings={false}
                     showsScale={false}
                     showsCompass={false}
                     showsIndoorLevelPicker={false}
                     cacheEnabled={false}
                     maxZoomLevel={17}
                     minZoomLevel={15}
                     region={{
                         latitude: -13.0024, //TODO valores para teste
                         longitude: -38.5089, //TODO valores para teste
                         latitudeDelta: 2,
                         longitudeDelta: 1
                     }}
                     onRegionChangeComplete={region => {
                        const data = JSON.stringify(new PointUFBA(region.latitude,region.longitude,"X1"))
                         ws.send(data)


                     }}
            >
                {isPoint.map(point => {
                    return <MarkePoints  key={point.id} userPosition={point}/>
                })}
            </MapView>
            <ByName name={"VitaminaB3"} color={theme.primaryColor}/>
        </SafeAreaView>
    )
}
