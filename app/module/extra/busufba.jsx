// import {
//   Dimensions,
//   PermissionsAndroid,
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   ActivityIndicator,
//   Pressable,
// } from "react-native";
// import {  theme } from "../../utils/theme";
// import MapView, { Marker, Polyline } from "react-native-maps";
// import React, {useEffect, useState} from "react";
// import ByName from "../../components/byName";
// import IconBack from "../../components/iconBack";
// import IconUfba from "../../components/iconUfba";
// import { StatusBar } from "expo-status-bar";
// import { BACK_END } from "@env";
//
// const ws = new WebSocket(`ws://${BACK_END}/maps`);
// console.log(BACK_END)
// ws.onerror = (e)=>{
//     console.log(e)
// }
// ws.onclose = ()=>{
//     console.log('fechado')
// }
// ws.onopen = ()=>{
//     console.log('entrou')
// }
// export default function Busufba() {
//   //const [isPosiction, setPosiction] = useState(new localePosition(0, 0));
//   const [isCard, setCard] = useState();
//   const [isRouter, setRouter] = useState([]);
//   const [isPoints,setPoints] = useState([]);
//   const [isBus,setBus] = useState();
//   const [isBusView,setBusView] = useState([])
//   const [isZoom,setZoom] = useState('X1');
//   const [isRouterView,setRouterView] = useState()
//   requestLocale();
//       ws.onmessage =(ev)=>{
//         const infos = JSON.parse(ev.data);
//         //console.log(infos)
//         switch (infos.type) {
//             case 'POINT': {
//                 setPoints(infos.data)
//                 break;
//             }
//             case 'BUS': {
//                 setBus(infos.data)
//                 break;
//             }
//             case 'ROUTER': {
//                 setRouter(infos.data)
//                 break;
//             }
//         }
//     }
//   useEffect(() => {
//         var routerT = []
//         isRouter.filter(router => router.isPoint !== 1).map((router) => {
//          routerT.push({latitude:router.latitude,longitude:router.longitude})
//         });
//         setRouterView(
//             <Polyline
//                 renderToHardwareTextureAndroid={true}
//                 coordinates={routerT}
//                 strokeColor={theme.primaryColor}
//                 strokeWidth={4}
//             />,
//         )
//     }, [isRouter]);
//   const CardBus = async ({ point, visibility}) =>{
//     const style = StyleSheet.create({
//       bodyCard: {
//         width: "100%",
//         height: "40%",
//         backgroundColor: theme.primaryColor,
//         padding: 16,
//         position: "absolute",
//         zIndex: 5,
//         bottom: 0,
//         opacity: visibility,
//         alignSelf: "center",
//         borderTopStartRadius: 10,
//         borderTopEndRadius: 10,
//       },
//     }); setBus(null)
//
//     ws.send(JSON.stringify(new Bus(point)))
//
//     return (
//       <View style={style.bodyCard}>
//         <Text
//           style={{
//             color: theme.secondColor,
//             fontSize: 24,
//             fontFamily: "Inter",
//             fontWeight: "800",
//             marginBottom: 5,
//           }}
//         >
//           {point}
//
//         </Text>
//
//         {isBus ? (
//           <FlatList
//             data={isBus}
//             renderItem={({ item, index }) => {
//               return (
//                 <Pressable
//                   style={{
//                     flexDirection: "row",
//                     backgroundColor: theme.secondColor,
//                     borderRadius: 20,
//                     padding: 12,
//                     marginBottom: 10,
//                     justifyContent: "space-around",
//                   }}
//                   onPress={ () => {
//                        ws.send(JSON.stringify(new Router(item.router.id)))
//                   }}
//                 >
//                   <Text>{item.name}</Text>
//                   <Text>10:45</Text>
//                 </Pressable>
//               );
//             }}
//           />
//         ) : (
//           <ActivityIndicator color={theme.secondColor} size={"large"} />
//         )}
//       </View>
//     );
//   }
//
//   const PointBus = ({locale}) => (
//     <Marker
//       onPress={(item) => {
//         setCard(
//           CardBus({ point: locale.name, visibility: 1}),
//         );
//       }}
//       tracksViewChanges={false}
//       image={require("../../../assets/onibus.png")}
//       title={locale.name}
//       coordinate={{ latitude: locale.locale.latitude, longitude: locale.locale.longitude }}
//     />
//   );
//   return (
//     <SafeAreaView style={{ flex: 1, position: "relative" }}>
//       <StatusBar style={"light"} backgroundColor={theme.primaryColor} />
//       <View
//         style={{
//           position: "absolute",
//           top: 0,
//           zIndex: 5,
//           width: "100%",
//           height: 100,
//           justifyContent: "space-between",
//           alignItems: "center",
//           flexDirection: "row",
//           padding: 16,
//           paddingLeft: 24,
//         }}
//       >
//         <View
//           style={{
//             backgroundColor: theme.secondColor,
//             borderRadius: 30,
//             elevation: 6,
//             width: 40,
//             height: 40,
//             alignItems: "center",
//             justifyContent: "center",
//             paddingBottom: 6,
//             paddingRight: 2,
//           }}
//         >
//           <IconBack color={theme.primaryColor} />
//         </View>
//         <View
//           style={{
//             backgroundColor: theme.secondColor,
//             borderRadius: 30,
//             elevation: 6,
//             padding: 2,
//           }}
//         >
//           <IconUfba color={theme.primaryColor} sizeFBA={20} sizeU={40} />
//         </View>
//       </View>
//       <View style={{ flex: 1 }}>
//         <MapView
//           onRegionChangeComplete={(map, details) => {
//               switch (map.latitudeDelta.toFixed(2)) {
//                 case '0.01': {
//                     setZoom('X1')
//                     break;
//                 }
//                 case '0.02': {
//                      setZoom('X2')
//                     break;
//                 }
//                 case'0.03': {
//                     setZoom('X3')
//                       break}
//             }
//             const values = JSON.stringify(new Point(map.latitude,map.longitude,isZoom))
//               ws.send(values);
//           }}
//           style={{ flex: 1, position: "relative", zIndex: 1 }}
//           followsUserLocation={false}
//           showsUserLocation={false}
//           renderToHardwareTextureAndroid={true}
//           showsMyLocationButton={false}
//           showsIndoors={false}
//           showsTraffic={false}
//           showsPointsOfInterest={false}
//           showsBuildings={false}
//           showsScale={false}
//           showsCompass={false}
//           showsIndoorLevelPicker={false}
//           cacheEnabled={false}
//           maxZoomLevel={17}
//           minZoomLevel={15}
//           region={{
//             latitude: -13.0024, //TODO valores para teste
//             longitude: -38.5089, //TODO valores para teste
//             latitudeDelta: requestDelta().latitudedelta,
//             longitudeDelta: requestDelta().longitudedelta,
//           }}
//         >
//           {isPoints.map((item) => {
//             return <PointBus key={item.name} locale={item} />;
//           })}
//             {console.log("Renderizado")}
//           {isRouterView  ? isRouterView : console.log("sem rota")}
//         </MapView>
//         {isCard}
//       </View>
//       <ByName name={"VitaminaNescau"} color={theme.primaryColor} />
//
//     </SafeAreaView>
//   );
// }
//
// const requestLocale = async () => {
//   if (
//     !(await PermissionsAndroid.check(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//     )) ||
//     !(await PermissionsAndroid.check(
//       PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
//     ))
//   );
//   {
//     await PermissionsAndroid.requestMultiple([
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
//     ]);
//   }
// };
//
// const requestDelta = () => {
//   const { width, height } = Dimensions.get("window");
//   const ASPECT_RATIO = width / height;
//   const northeastLat = parseFloat("24.259769");
//   const southwestLat = parseFloat("24.234631");
//   const latitudedelta = northeastLat - southwestLat;
//   const longitudedelta = latitudedelta * ASPECT_RATIO;
//   return { latitudedelta, longitudedelta };
// };
//
// class Point{
//     constructor(lat,long,zoom) {
//         this.type = 'POINT';
//
//         this.data={
//             zoom: zoom,
//             lat:lat,
//             long: long
//         }
//
//     }
// }
// class Bus{
//     constructor(name) {
//         this.type = 'BUS';
//         this.data ={
//             name:name
//         }
//     }
// }
// class Router{
//     constructor(id) {
//         this.type = 'ROUTER';
//         this.data={
//             id:id
//
//         }
//     }
// }
// class localePosition {
//     constructor(latitude, longitude) {
//         this.latitude = latitude;
//         this.longitude = longitude;
//     }
// }