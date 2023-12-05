import {
  Dimensions,
  PermissionsAndroid,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { global, theme } from "../../utils/theme";
import Header from "../../components/header";
import MapView, { Marker, Polyline } from "react-native-maps";
import React, { useState } from "react";
import { pointBusPositionGoing, routerExpress } from "../../utils/teste";
import CardBus from "../../components/cardBus";
import ByName from "../../components/byName";
import * as teste from "../../utils/teste";
import IconBack from "../../components/iconBack";
import IconUfba from "../../components/iconUfba";
import { StatusBar } from "expo-status-bar";

class localePosition {
  constructor(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export default function Busufba() {
  //const [isPosiction, setPosiction] = useState(new localePosition(0, 0));
  const [isCard, setCard] = useState();
  const [isRouter, setRouter] = useState(null);
  requestLocale();

  function CardBus({ point, visibility, bus }) {
    const style = StyleSheet.create({
      bodyCard: {
        width: "100%",
        height: "40%",
        backgroundColor: theme.primaryColor,
        padding: 16,
        position: "absolute",
        zIndex: 5,
        bottom: 0,
        opacity: visibility,
        alignSelf: "center",
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
      },
    });
    const statusTest = true;
    return (
      <View style={style.bodyCard}>
        <Text
          style={{
            color: theme.secondColor,
            fontSize: 24,
            fontFamily: "Inter",
            fontWeight: "800",
            marginBottom: 5,
          }}
        >
          {point}
        </Text>
        {statusTest ? (
          <FlatList
            data={bus}
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  style={{
                    flexDirection: "row",
                    backgroundColor: theme.secondColor,
                    borderRadius: 20,
                    padding: 12,
                    marginBottom: 10,
                    justifyContent: "space-around",
                  }}
                  onPress={() => {
                    teste.bus
                      .filter((busRouter) => busRouter.name == item)
                      .map((busFinaly) => {
                        busFinaly.router
                          ? setRouter(
                              <Polyline
                                renderToHardwareTextureAndroid={true}
                                coordinates={busFinaly.router}
                                strokeColor={theme.primaryColor}
                                strokeWidth={4}
                              />,
                            )
                          : setRouter(false);
                      });
                  }}
                >
                  <Text>{item}</Text>
                  <Text>10:45</Text>
                </Pressable>
              );
            }}
          />
        ) : (
          <ActivityIndicator color={theme.primaryColor} size={"large"} />
        )}
      </View>
    );
  }

  const PointBus = ({ locale }) => (
    <Marker
      onPress={(item) => {
        setCard(
          CardBus({ point: locale.name, visibility: 1, bus: locale.bus }),
        );
      }}
      image={require("../../../assets/onibus.png")}
      title={locale.name}
      coordinate={{ latitude: locale.latitude, longitude: locale.longitude }}
    />
  );
  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <StatusBar style={"light"} backgroundColor={theme.primaryColor} />
      <View
        style={{
          position: "absolute",
          top: 0,
          zIndex: 5,
          width: "100%",
          height: 100,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          padding: 16,
          paddingLeft: 24,
        }}
      >
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
          <IconBack color={theme.primaryColor} />
        </View>
        <View
          style={{
            backgroundColor: theme.secondColor,
            borderRadius: 30,
            elevation: 6,
            padding: 2,
          }}
        >
          <IconUfba color={theme.primaryColor} sizeFBA={20} sizeU={40} />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1, position: "relative", zIndex: 1 }}
          followsUserLocation={true}
          showsUserLocation={true}
          renderToHardwareTextureAndroid={true}
          showsMyLocationButton={false}
          showsIndoors={false}
          showsTraffic={false}
          showsPointsOfInterest={false}
          showsBuildings={false}
          showsScale={false}
          showsCompass={false}
          showsIndoorLevelPicker={false}
          region={{
            latitude: -13.0024, //TODO valores para teste
            longitude: -38.5089, //TODO valores para teste
            latitudeDelta: requestDelta().latitudedelta,
            longitudeDelta: requestDelta().longitudedelta,
          }}
        >
          {pointBusPositionGoing.map((item) => {
            return <PointBus key={item.name} locale={item} />;
          })}
          {isRouter ? isRouter : <></>}
        </MapView>
        {isCard}
      </View>
      <ByName name={"VitaminaNescau"} color={theme.primaryColor} />
    </SafeAreaView>
  );
}

const requestLocale = async () => {
  if (
    !(await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )) ||
    !(await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    ))
  );
  {
    await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    ]);
  }
};

const requestDelta = () => {
  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const northeastLat = parseFloat("24.259769");
  const southwestLat = parseFloat("24.234631");
  const latitudedelta = northeastLat - southwestLat;
  const longitudedelta = latitudedelta * ASPECT_RATIO;
  return { latitudedelta, longitudedelta };
};
