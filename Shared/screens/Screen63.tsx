import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import ContainerForm from "../components/ContainerForm";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export const Screen63 = () => {
  return (
    <View style={styles.screen63}>
      <View style={[styles.bg, styles.bgPosition]}>
        <View style={[styles.topBg, styles.topBgPosition]} />
      </View>
      <ContainerForm cHECKAVAILABILITY="04" />
      <Text style={[styles.text, styles.textTypo]}>{`DRYING STAGE `}</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.maskBorder]} />
        <Text style={[styles.hrs, styles.hrsTypo]}>87 hrs</Text>
        <Text style={[styles.dryingTime, styles.dryingTypo]}>Drying Time</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.uploadPhotosPosition]}>
        <View style={[styles.groupChild, styles.maskBorder]} />
        <Text style={[styles.sunDried, styles.hrsTypo]}>sun-dried</Text>
        <Text style={[styles.dryingMethod, styles.dryingTypo]}>
          Drying Method
        </Text>
      </View>
      <View style={[styles.imageParent, styles.imageParentLayout]}>
        <View style={[styles.image, styles.topBgPosition]}>
          <View style={[styles.mask, styles.bg1Position]} />
        </View>
        <Text style={[styles.addFarmersNotes, styles.hrsTypo]}>
          Add Farmer’s Notes ...
        </Text>
      </View>
      <View style={styles.button}>
        <View style={[styles.bg1, styles.bg1Position]} />
        <Text style={[styles.text1, styles.textTypo]}>SAVE</Text>
        <View style={styles.addNewImage}>
          <View style={[styles.bg2, styles.bg1Position]} />
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
        style={[styles.screen63Child, styles.imageParentLayout]}
        contentFit="cover"
        source={require("../assets/group-270.png")}
      />
      <Text style={[styles.uploadPhotos, styles.uploadPhotosPosition]}>
        Upload Photos
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    left: "0%",
    right: "0%",
  },
  topBgPosition: {
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  textTypo: {
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.bold,
    letterSpacing: 2,
    top: "50%",
    position: "absolute",
  },
  rectangleLayout: {
    height: 46,
    top: 250,
    width: 129,
  },
  maskBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  hrsTypo: {
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    textAlign: "left",
    color: Color.colorSienna,
    position: "absolute",
  },
  dryingTypo: {
    left: 0,
    top: 0,
    textAlign: "left",
    color: Color.colorSienna,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
    position: "absolute",
  },
  uploadPhotosPosition: {
    left: 35,
    position: "absolute",
  },
  imageParentLayout: {
    width: "82.4%",
    position: "absolute",
  },
  bg1Position: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  rectangle185CopyLayout: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_11xs_5,
    height: "13%",
    position: "absolute",
    width: "100%",
  },
  topBg: {
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorSienna,
    left: "0%",
    right: "0%",
  },
  bg: {
    height: "24.51%",
    bottom: "75.49%",
    top: "0%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  text: {
    marginTop: -291,
    width: "60.27%",
    left: "20.53%",
    fontSize: FontSize.bold_size,
    height: 30,
    fontWeight: "600",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.bold,
    letterSpacing: 2,
    top: "50%",
  },
  groupChild: {
    top: 45,
    left: -1,
    borderColor: Color.colorGainsboro,
    width: 131,
    height: 26,
    position: "absolute",
  },
  hrs: {
    height: 16,
    width: 96,
    left: 5,
    top: 26,
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  dryingTime: {
    width: 114,
    height: 16,
  },
  rectangleParent: {
    left: 203,
    position: "absolute",
  },
  sunDried: {
    fontSize: FontSize.size_xs,
    height: 16,
    width: 96,
    left: 5,
    top: 26,
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
  },
  dryingMethod: {
    height: 14,
    width: 129,
    left: 0,
    top: 0,
  },
  rectangleGroup: {
    height: 46,
    top: 250,
    width: 129,
  },
  mask: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_600,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 40,
    elevation: 40,
    borderColor: Color.outline,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    borderWidth: 1,
    borderStyle: "solid",
  },
  image: {
    right: "-100%",
    left: "100%",
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  addFarmersNotes: {
    top: 12,
    left: 14,
    width: 183,
    height: 35,
    opacity: 0.5,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  imageParent: {
    height: "25.99%",
    top: "41.5%",
    right: "10.67%",
    bottom: "32.51%",
    left: "6.93%",
  },
  bg1: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorTan_100,
    shadowColor: "#d9cfc1",
    shadowRadius: 30,
    elevation: 30,
  },
  text1: {
    marginTop: -6,
    width: "45.42%",
    left: "28.47%",
    fontSize: FontSize.size_3xs,
    height: 9,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.bold,
    letterSpacing: 2,
    top: "50%",
  },
  bg2: {
    borderRadius: Border.br_81xl,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowRadius: 45,
    elevation: 45,
    backgroundColor: Color.colorWhite,
    shadowOffset: {
      width: 0,
      height: 20,
    },
  },
  combinedShapeChild: {
    top: "7514%",
    right: "-660%",
    bottom: "-7427%",
    left: "660%",
  },
  rectangle185Copy: {
    top: "7470%",
    right: "-716%",
    bottom: "-7383%",
    left: "716%",
    transform: [
      {
        rotate: "180deg",
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
    top: "90.39%",
    right: "10.13%",
    bottom: "4.93%",
    left: "11.2%",
    position: "absolute",
  },
  screen63Child: {
    height: "10.7%",
    top: "75.31%",
    right: "9.2%",
    bottom: "13.99%",
    left: "8.4%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  uploadPhotos: {
    top: 578,
    width: 190,
    textAlign: "left",
    color: Color.colorSienna,
    left: 35,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.bold,
    fontWeight: "600",
  },
  screen63: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Screen63;
