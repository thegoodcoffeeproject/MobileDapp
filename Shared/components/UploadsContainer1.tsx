import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const UploadsContainer1 = () => {
  return (
    <View style={[styles.pmParent, styles.pmPosition]}>
      <Text style={[styles.pm, styles.pmPosition]}>Uploads</Text>
      <View style={[styles.groupWrapper, styles.image42IconLayout]}>
        <View style={styles.groupParent}>
          <View style={[styles.frameWrapper, styles.frameWrapperLayout]}>
            <View style={[styles.image44Parent, styles.frameWrapperLayout]}>
              <Image
                style={styles.image44Icon}
                contentFit="cover"
                source={require("../assets/image-441.png")}
              />
              <View style={[styles.border, styles.borderBorder]} />
            </View>
          </View>
          <View style={[styles.image44Parent, styles.frameWrapperLayout]}>
            <Image
              style={[styles.image42Icon, styles.image42IconLayout]}
              contentFit="cover"
              source={require("../assets/image-423.png")}
            />
            <View style={[styles.border1, styles.borderBorder]} />
          </View>
          <View style={styles.groupContainer}>
            <View style={styles.imagesWrapper}>
              <View style={[styles.images, styles.imagesPosition]}>
                <Image
                  style={[styles.image43Icon, styles.imagesPosition]}
                  contentFit="cover"
                  source={require("../assets/image-432.png")}
                />
              </View>
            </View>
            <View style={[styles.border2, styles.borderBorder]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pmPosition: {
    top: "50%",
    position: "absolute",
  },
  image42IconLayout: {
    height: 150,
    position: "absolute",
  },
  frameWrapperLayout: {
    width: 105,
    top: 0,
    height: 150,
    position: "absolute",
  },
  borderBorder: {
    transform: [
      {
        rotate: "90.11deg",
      },
    ],
    borderWidth: 1,
    borderColor: Color.colorSienna,
    borderStyle: "solid",
    left: "100%",
    top: "0.13%",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  imagesPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  pm: {
    marginTop: -89.8,
    width: "53.83%",
    left: "1.66%",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    fontFamily: FontFamily.bold,
    color: Color.colorSienna,
    textAlign: "left",
    height: 19,
  },
  image44Icon: {
    top: 5,
    left: 6,
    width: 92,
    height: 138,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  border: {
    bottom: "29.77%",
    right: "-142.19%",
    width: "142.19%",
    height: "70.1%",
    transform: [
      {
        rotate: "90.11deg",
      },
    ],
    borderWidth: 1,
    borderColor: Color.colorSienna,
    borderStyle: "solid",
    left: "100%",
    top: "0.13%",
  },
  image44Parent: {
    left: 0,
    width: 105,
  },
  frameWrapper: {
    left: 227,
  },
  image42Icon: {
    top: 4,
    left: 2,
    width: 103,
    borderRadius: Border.br_xl,
  },
  border1: {
    bottom: "29.77%",
    right: "-142.19%",
    width: "142.19%",
    height: "70.1%",
    transform: [
      {
        rotate: "90.11deg",
      },
    ],
    borderWidth: 1,
    borderColor: Color.colorSienna,
    borderStyle: "solid",
    left: "100%",
    top: "0.13%",
  },
  image43Icon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    borderRadius: Border.br_xl,
  },
  images: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  imagesWrapper: {
    height: "94.98%",
    width: "90.12%",
    top: "2.41%",
    right: "5.05%",
    bottom: "2.61%",
    left: "4.84%",
    position: "absolute",
  },
  border2: {
    height: "63.41%",
    width: "156.99%",
    right: "-156.99%",
    bottom: "36.45%",
    transform: [
      {
        rotate: "90.11deg",
      },
    ],
    borderWidth: 1,
    borderColor: Color.colorSienna,
    borderStyle: "solid",
    left: "100%",
    top: "0.13%",
  },
  groupContainer: {
    height: "99.93%",
    width: "28.64%",
    right: "35.69%",
    bottom: "0.07%",
    left: "35.66%",
    top: "0%",
    position: "absolute",
  },
  groupParent: {
    top: 0,
    height: 150,
    width: 332,
    left: 0,
    position: "absolute",
  },
  groupWrapper: {
    top: 30,
    width: 332,
    height: 150,
    left: 0,
  },
  pmParent: {
    marginTop: 121,
    width: "88.53%",
    right: "4.53%",
    left: "6.93%",
    height: 180,
  },
});

export default UploadsContainer1;
