import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export const Screen71 = () => {
  return (
    <View style={styles.screen71}>
      <Image
        style={[styles.bottomMenuIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bottom-menu1.png")}
      />
      <Text style={[styles.helloStevenYour, styles.helloLayout]}>
        My Harvests
      </Text>
      <View style={[styles.calendar, styles.calendarPosition]}>
        <View style={styles.bgPosition}>
          <View style={[styles.bg1, styles.bg1Position]} />
        </View>
        <View style={[styles.weather, styles.textPosition]}>
          <View style={[styles.parent, styles.parentPosition]}>
            <Text style={[styles.text, styles.textPosition]}>o</Text>
            <Text style={[styles.text1, styles.textTypo]}>C</Text>
            <Text style={[styles.degrees, styles.textTypo]}>{`27 `}</Text>
          </View>
          <Text style={[styles.date, styles.pm1Typo]}>Today, 17 Nov 2023</Text>
          <Image
            style={[styles.locationPin1Icon, styles.locationLayout]}
            contentFit="cover"
            source={require("../assets/locationpin-1.png")}
          />
          <Text style={[styles.location, styles.locationLayout]}>
            Nyungwe, Rwanda
          </Text>
        </View>
        <Image
          style={styles.calendarChild}
          contentFit="cover"
          source={require("../assets/group-11.png")}
        />
      </View>
      <View style={[styles.title, styles.titlePosition]}>
        <Text style={[styles.helloStevenYourContainer, styles.titlePosition]}>
          Hey Justin
        </Text>
      </View>
      <Image
        style={[styles.headerIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/header1.png")}
      />
      <View style={styles.button}>
        <View style={[styles.bg2, styles.bg1Position]} />
        <Text style={[styles.text2, styles.textTypo]}>ADD NEW HARVEST</Text>
        <View style={styles.addNewImage}>
          <View style={[styles.bg3, styles.bg3ShadowBox]} />
          <View style={styles.plusIcon}>
            <View style={styles.combinedShape}>
              <View
                style={[
                  styles.combinedShapeChild,
                  styles.rectangle185CopyLayout,
                ]}
              />
              <View
                style={[styles.rectangle185Copy, styles.rectangle185CopyLayout]}
              />
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.userIcon}
        contentFit="cover"
        source={require("../assets/user.png")}
      />
      <View style={[styles.cardParent, styles.calendarPosition]}>
        <View style={styles.bgPosition}>
          <View style={styles.bgPosition}>
            <View style={[styles.bg5, styles.bg5Layout]} />
          </View>
          <View style={styles.text3}>
            <View style={styles.bgParent}>
              <View style={[styles.bg6, styles.bgPosition]} />
              <View style={[styles.bg7, styles.bg7Position]} />
            </View>
            <Text style={[styles.pm, styles.pmPosition]}>Rwandan Espresso</Text>
            <Text style={[styles.pm1, styles.pm1Typo]}>Status: DRIED</Text>
            <Text style={[styles.pm2, styles.pm2Typo]}>4/5</Text>
            <View style={[styles.addNewImage1, styles.addNewImage1Position]}>
              <View style={[styles.bg8, styles.bg7Position]} />
              <Text
                style={[styles.helloStevenYour1, styles.pm2Typo]}
              >{`>`}</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.image44Icon, styles.bg5Layout]}
          contentFit="cover"
          source={require("../assets/image-44.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  helloLayout: {
    height: 19,
    fontSize: FontSize.size_base,
  },
  calendarPosition: {
    left: "4.53%",
    right: "3.47%",
    width: "92%",
    position: "absolute",
  },
  bg1Position: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  textPosition: {
    top: "50%",
    position: "absolute",
  },
  parentPosition: {
    left: "8.64%",
    top: "50%",
  },
  textTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.bold,
  },
  pm1Typo: {
    fontFamily: FontFamily.robotoLight,
    fontWeight: "300",
    color: Color.colorDarkslategray,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  locationLayout: {
    height: 17,
    position: "absolute",
  },
  titlePosition: {
    height: 28,
    top: "50%",
    position: "absolute",
  },
  bg3ShadowBox: {
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_81xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    right: "0%",
    width: "100%",
  },
  rectangle185CopyLayout: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_11xs_5,
    height: "13%",
    position: "absolute",
    width: "100%",
  },
  bg5Layout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  bgPosition: {
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  bg7Position: {
    backgroundColor: Color.colorSienna,
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  pmPosition: {
    fontFamily: FontFamily.bold,
    top: "50%",
    position: "absolute",
  },
  pm2Typo: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  addNewImage1Position: {
    bottom: "0%",
    right: "0%",
  },
  bottomMenuIcon: {
    height: "11.33%",
    top: "88.67%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  helloStevenYour: {
    marginTop: -125,
    width: "38.13%",
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    top: "50%",
    position: "absolute",
    left: "7.2%",
  },
  bg1: {
    shadowColor: "rgba(0, 0, 0, 0.05)",
    elevation: 20,
    shadowRadius: 20,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text: {
    width: "9.41%",
    left: "33.61%",
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    height: 15,
    color: Color.colorDarkslategray,
    marginTop: -16.5,
    textAlign: "left",
  },
  text1: {
    marginTop: -15.5,
    width: "16.47%",
    left: "42.86%",
    height: 32,
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    color: Color.colorDarkslategray,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  degrees: {
    letterSpacing: 1.6,
    height: 30,
    fontSize: FontSize.size_13xl,
    fontWeight: "600",
    color: Color.colorDarkslategray,
    textAlign: "left",
    top: "50%",
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
    position: "absolute",
  },
  date: {
    marginTop: -14.4,
    width: "91.09%",
    left: "8.91%",
    fontSize: FontSize.size_2xs,
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
    fontWeight: "600",
    fontFamily: FontFamily.bold,
    left: "8.64%",
    top: "50%",
    textAlign: "left",
    color: Color.colorSienna,
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
    top: "15.39%",
    bottom: "70.94%",
  },
  helloStevenYourContainer: {
    marginTop: -14,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.bold,
    textAlign: "left",
    color: Color.colorSienna,
    left: "0%",
    width: "100%",
  },
  title: {
    marginTop: -318,
    width: "46.13%",
    right: "46.67%",
    left: "7.2%",
  },
  headerIcon: {
    height: "4.19%",
    width: "85.33%",
    top: "4.43%",
    right: "6.4%",
    bottom: "91.38%",
    left: "8.27%",
  },
  bg2: {
    backgroundColor: Color.colorTan_100,
    shadowColor: "#d9cfc1",
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text2: {
    marginTop: -5,
    width: "45.42%",
    left: "27.12%",
    fontSize: FontSize.size_3xs,
    letterSpacing: 2,
    textAlign: "center",
    height: 9,
    color: Color.colorWhite,
    top: "50%",
    position: "absolute",
  },
  bg3: {
    backgroundColor: Color.colorWhite,
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_81xl,
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  combinedShapeChild: {
    top: "3354%",
    right: "-630%",
    bottom: "-3267%",
    left: "630%",
  },
  rectangle185Copy: {
    top: "3310%",
    right: "-686%",
    bottom: "-3223%",
    left: "686%",
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  combinedShape: {
    backgroundColor: Color.colorRosybrown_200,
    width: 10,
    height: 10,
  },
  plusIcon: {
    height: "50%",
    width: "50%",
    top: "20%",
    right: "25%",
    bottom: "30%",
    left: "25%",
    position: "absolute",
  },
  addNewImage: {
    height: "52.63%",
    width: "6.78%",
    top: "23.68%",
    right: "86.78%",
    bottom: "23.68%",
    left: "6.44%",
    position: "absolute",
  },
  button: {
    height: "4.68%",
    width: "78.67%",
    top: "39.16%",
    right: "10.93%",
    bottom: "56.16%",
    left: "10.4%",
    position: "absolute",
  },
  userIcon: {
    top: 775,
    left: 325,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  bg5: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    elevation: 20,
    shadowRadius: 20,
    backgroundColor: Color.colorWhite,
  },
  bg6: {
    backgroundColor: Color.colorSeashell,
    borderRadius: Border.br_3xs,
  },
  bg7: {
    width: "46.26%",
    right: "53.74%",
    borderRadius: Border.br_3xs,
  },
  bgParent: {
    height: "7.23%",
    width: "66.22%",
    top: "67.98%",
    right: "21.62%",
    bottom: "24.79%",
    left: "12.16%",
    position: "absolute",
  },
  pm: {
    marginTop: -48.4,
    width: "96.08%",
    fontSize: FontSize.bold_size,
    height: 25,
    color: Color.colorDarkslategray,
    textAlign: "left",
    left: "0%",
  },
  pm1: {
    marginTop: -12.6,
    width: "54.5%",
    fontSize: FontSize.size_smi,
    height: 15,
    left: "0%",
  },
  pm2: {
    marginTop: 13.4,
    width: "16.67%",
    fontSize: FontSize.size_xs,
    height: 15,
    color: Color.colorDarkslategray,
    left: "0%",
  },
  bg8: {
    elevation: 45,
    shadowRadius: 45,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: Border.br_81xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    right: "0%",
    width: "100%",
  },
  helloStevenYour1: {
    marginTop: -10,
    width: "70%",
    left: "30%",
    color: Color.colorWhite,
    height: 19,
    fontSize: FontSize.size_base,
  },
  addNewImage1: {
    height: "20.66%",
    width: "9.01%",
    top: "79.34%",
    left: "90.99%",
    position: "absolute",
  },
  text3: {
    height: "77.44%",
    width: "64.35%",
    top: "16.16%",
    right: "2.61%",
    bottom: "6.4%",
    left: "33.04%",
    position: "absolute",
  },
  image44Icon: {
    top: 18,
    left: 21,
    width: 78,
    height: 86,
  },
  cardParent: {
    height: "15.39%",
    top: "47.78%",
    bottom: "36.82%",
  },
  screen71: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Screen71;
