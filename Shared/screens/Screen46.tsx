import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import ContainerForm from "../components/ContainerForm";
import HarvestTypeForm from "../components/HarvestTypeForm";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export const Screen46 = () => {
  return (
    <View style={styles.screen46}>
      <View style={[styles.bg, styles.bgPosition]}>
        <View style={[styles.topBg, styles.topBgPosition]} />
      </View>
      <ContainerForm cHECKAVAILABILITY="02" />
      <Text style={[styles.text, styles.textTypo]}>{`HARVEST STAGE `}</Text>
      <HarvestTypeForm />
      <View style={styles.imageParent}>
        <View style={[styles.image, styles.topBgPosition]}>
          <View style={[styles.mask, styles.bg1Position]} />
        </View>
        <Text style={[styles.addFarmersNotes, styles.uploadPhotosTypo]}>
          Add Farmer’s Notes ...
        </Text>
      </View>
      <View style={styles.uploadPhotosParent}>
        <Text style={[styles.uploadPhotos, styles.uploadPhotosTypo]}>
          Upload Photos
        </Text>
        <Image
          style={styles.imagesIcon}
          contentFit="cover"
          source={require("../assets/images.png")}
        />
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
    letterSpacing: 2,
    fontFamily: FontFamily.bold,
    top: "50%",
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
  uploadPhotosTypo: {
    textAlign: "left",
    color: Color.colorSienna,
    fontSize: FontSize.size_sm,
    position: "absolute",
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
    letterSpacing: 2,
  },
  mask: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_600,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowRadius: 40,
    elevation: 40,
    borderStyle: "solid",
    borderColor: Color.outline,
    borderWidth: 1,
    transform: [
      {
        rotate: "180deg",
      },
    ],
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
    top: 13,
    left: 16,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 183,
    height: 22,
    opacity: 0.5,
  },
  imageParent: {
    height: "16.38%",
    width: "82.4%",
    right: "9.07%",
    bottom: "33.62%",
    left: "8.53%",
    top: "50%",
    position: "absolute",
  },
  uploadPhotos: {
    top: 0,
    left: 4,
    width: 190,
    fontFamily: FontFamily.bold,
    color: Color.colorSienna,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
  },
  imagesIcon: {
    height: "73.71%",
    width: "100.32%",
    top: "26.72%",
    right: "-0.16%",
    bottom: "-0.42%",
    left: "-0.16%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  uploadPhotosParent: {
    top: 559,
    left: 33,
    width: 308,
    height: 118,
    position: "absolute",
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
    letterSpacing: 2,
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
  screen46: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Screen46;
