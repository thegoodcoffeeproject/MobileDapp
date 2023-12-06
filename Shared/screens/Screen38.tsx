import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export const Screen38 = () => {
  return (
    <View style={styles.screen38}>
      <View style={styles.bg}>
        <View style={[styles.topBg, styles.bg1Position]} />
      </View>
      <Image
        style={[styles.headerIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/header.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>ADD NEW HARVEST</Text>
      <View style={styles.groupParent}>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <View style={[styles.groupChild, styles.groupLayout1]} />
            <View style={[styles.cropNameParent, styles.parentPosition]}>
              <Text
                style={[styles.cropName, styles.cropNameLayout]}
              >{`Crop Name `}</Text>
              <Text style={[styles.rwandanEspresso, styles.text1Typo]}>
                Rwandan Espresso
              </Text>
              <Image
                style={[
                  styles.asiconoutlinearrowRight,
                  styles.asiconoutlinearrowLayout,
                ]}
                contentFit="cover"
                source={require("../assets/asiconoutlinearrowright1.png")}
              />
            </View>
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
            <View style={[styles.groupItem, styles.groupLayout1]} />
            <View style={[styles.textWrapper, styles.textLayout]}>
              <Text style={[styles.text1, styles.textLayout]}>{`
`}</Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupWrapper, styles.groupPosition]}>
          <View style={[styles.groupContainer, styles.groupPosition]}>
            <View style={[styles.groupChild, styles.groupLayout1]} />
            <View style={[styles.locationParent, styles.parentPosition]}>
              <Text style={[styles.cropName, styles.cropNameLayout]}>
                Location
              </Text>
              <Text style={[styles.enterLocation, styles.dateWrapperLayout]}>
                Enter Location
              </Text>
              <Image
                style={[
                  styles.asiconoutlinearrowRight1,
                  styles.asiconoutlinearrowLayout,
                ]}
                contentFit="cover"
                source={require("../assets/asiconoutlinearrowright1.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.groupFrame, styles.groupLayout]}>
          <View style={[styles.groupView, styles.groupLayout]}>
            <View style={[styles.rectangleView, styles.groupLayout1]} />
            <View style={[styles.dateWrapper, styles.dateWrapperLayout]}>
              <Text style={[styles.cropName, styles.cropNameLayout]}>Date</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.bottomMenuIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/bottom-menu.png")}
      />
      <Image
        style={styles.calendarIcon}
        contentFit="cover"
        source={require("../assets/calendar.png")}
      />
      <View style={styles.button}>
        <View style={[styles.bg1, styles.bg1ShadowBox]} />
        <Text style={[styles.text2, styles.textTypo]}>CONTINUE</Text>
      </View>
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
      <View style={[styles.bg2, styles.bg1ShadowBox]} />
      <Text style={[styles.text3, styles.text3Typo]}>{`>`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bg1Position: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.bold,
    letterSpacing: 2,
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    height: 47,
    width: 289,
    position: "absolute",
  },
  groupLayout1: {
    height: 1,
    borderBottomWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    width: 284,
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    width: 288,
    left: 1,
    top: 0,
    position: "absolute",
  },
  cropNameLayout: {
    width: 89,
    top: 0,
  },
  text1Typo: {
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 0,
  },
  asiconoutlinearrowLayout: {
    height: 15,
    width: 15,
    left: 273,
    position: "absolute",
  },
  rectangleGroupPosition: {
    height: 20,
    top: 27,
    position: "absolute",
  },
  textLayout: {
    height: 13,
    width: 183,
    top: 0,
    position: "absolute",
  },
  dateWrapperLayout: {
    height: 19,
    position: "absolute",
  },
  groupLayout: {
    height: 39,
    width: 284,
    left: 0,
    position: "absolute",
  },
  bg1ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    position: "absolute",
  },
  text3Typo: {
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    position: "absolute",
  },
  topBg: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorSienna,
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  bg: {
    height: "24.51%",
    bottom: "75.49%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  headerIcon: {
    height: "2.96%",
    width: "84%",
    top: "6.16%",
    right: "8%",
    bottom: "90.89%",
    left: "8%",
  },
  text: {
    marginTop: -279,
    width: "60.27%",
    left: "20%",
    height: 30,
    fontWeight: "600",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.bold,
    letterSpacing: 2,
    fontSize: FontSize.bold_size,
    top: "50%",
  },
  groupChild: {
    top: 47,
  },
  cropName: {
    textAlign: "left",
    color: Color.colorSienna,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    position: "absolute",
    fontSize: FontSize.size_sm,
    width: 89,
    left: 0,
  },
  rwandanEspresso: {
    height: 20,
    top: 27,
    position: "absolute",
    width: 183,
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.colorSienna,
  },
  asiconoutlinearrowRight: {
    top: 16,
  },
  cropNameParent: {
    height: 47,
  },
  groupContainer: {
    height: 47,
    top: 0,
  },
  groupItem: {
    top: 20,
  },
  text1: {
    color: "#000",
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 0,
    height: 13,
  },
  textWrapper: {
    left: 1,
  },
  rectangleGroup: {
    width: 284,
    height: 20,
    left: 0,
  },
  enterLocation: {
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 0,
    width: 183,
    color: Color.colorSienna,
    top: 27,
    height: 19,
  },
  asiconoutlinearrowRight1: {
    top: 8,
  },
  locationParent: {
    height: 46,
  },
  groupWrapper: {
    top: 188,
    height: 47,
  },
  rectangleView: {
    top: 39,
  },
  dateWrapper: {
    width: 89,
    top: 0,
    left: 1,
  },
  groupView: {
    top: 0,
  },
  groupFrame: {
    top: 102,
  },
  groupParent: {
    top: 290,
    left: 43,
    height: 235,
    width: 289,
    position: "absolute",
  },
  bottomMenuIcon: {
    height: "11.33%",
    top: "88.67%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  calendarIcon: {
    top: 389,
    left: 314,
    width: 22,
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  bg1: {
    borderRadius: 10,
    backgroundColor: "#dfc19f",
    shadowColor: "#d9cfc1",
    shadowRadius: 30,
    elevation: 30,
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
  },
  text2: {
    marginTop: -6,
    width: "45.42%",
    left: "28.47%",
    fontSize: 10,
    height: 9,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.bold,
    letterSpacing: 2,
    top: "50%",
  },
  button: {
    height: "4.68%",
    width: "78.67%",
    top: "76.23%",
    right: "11.47%",
    bottom: "19.09%",
    left: "9.87%",
    position: "absolute",
  },
  image5Icon: {
    top: 50,
    left: 176,
    width: 24,
    height: 24,
    position: "absolute",
  },
  bg2: {
    height: "2.46%",
    width: "5.33%",
    top: "77.34%",
    right: "14.4%",
    bottom: "20.2%",
    left: "80.27%",
    borderRadius: 100,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowRadius: 45,
    elevation: 45,
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  text3: {
    top: 624,
    left: 306,
    width: 21,
    height: 27,
    color: Color.colorSienna,
    fontSize: FontSize.bold_size,
  },
  screen38: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Screen38;
