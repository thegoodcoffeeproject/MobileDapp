import * as React from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

type ContainerType = {
  group1?: ImageSourcePropType;
};

const Container = ({ group1 }: ContainerType) => {
  return (
    <View style={styles.calendar}>
      <View style={[styles.bg, styles.bgPosition]}>
        <View style={[styles.bg1, styles.bgPosition]} />
      </View>
      <View style={[styles.weather, styles.parentPosition]}>
        <View style={[styles.parent, styles.parentPosition]}>
          <Text style={[styles.text, styles.textPosition]}>o</Text>
          <Text style={[styles.text1, styles.text1Typo]}>C</Text>
          <Text style={[styles.degrees, styles.text1Typo]}>{`27 `}</Text>
        </View>
        <Text style={[styles.date, styles.textPosition]}>
          Today, 17 Nov 2023
        </Text>
        <Image
          style={[styles.locationPin1Icon, styles.locationLayout]}
          contentFit="cover"
          source={require("../assets/locationpin-1.png")}
        />
        <Text style={[styles.location, styles.locationLayout]}>
          Nyungwe, Rwanda
        </Text>
      </View>
      <Image style={styles.calendarChild} contentFit="cover" source={group1} />
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    left: "0%",
    width: "100%",
  },
  parentPosition: {
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    textAlign: "left",
    color: Color.colorDarkslategray,
    top: "50%",
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    textAlign: "left",
    top: "50%",
  },
  locationLayout: {
    height: 17,
    position: "absolute",
  },
  bg1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  bg: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  text: {
    width: "9.41%",
    left: "33.61%",
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    height: 15,
    marginTop: -16.5,
  },
  text1: {
    marginTop: -15.5,
    width: "16.47%",
    left: "42.86%",
    height: 32,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    color: Color.colorDarkslategray,
    position: "absolute",
  },
  degrees: {
    letterSpacing: 1.6,
    height: 30,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    color: Color.colorDarkslategray,
    position: "absolute",
    marginTop: -16.5,
    left: "0%",
    width: "100%",
  },
  parent: {
    marginTop: 3,
    width: "54.09%",
    right: "37.27%",
    height: 33,
    left: "8.64%",
  },
  date: {
    marginTop: -14.4,
    width: "91.09%",
    left: "8.91%",
    fontSize: FontSize.size_2xs,
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    height: 14,
  },
  locationPin1Icon: {
    top: 0,
    left: 0,
    width: 15,
  },
  location: {
    marginTop: -36,
    width: "75.45%",
    fontSize: FontSize.size_sm,
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    textAlign: "left",
    top: "50%",
    left: "8.64%",
  },
  weather: {
    marginTop: -34.5,
    width: "63.77%",
    right: "30.43%",
    left: "5.8%",
    height: 72,
  },
  calendarChild: {
    top: 4,
    left: 178,
    width: 180,
    height: 157,
    position: "absolute",
  },
  calendar: {
    height: "13.67%",
    width: "92%",
    top: "15.39%",
    right: "3.47%",
    bottom: "70.94%",
    left: "4.53%",
    position: "absolute",
  },
});

export default Container;
