import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

type FormContainer1Type = {
  image42?: ImageSourcePropType;
  image43?: ImageSourcePropType;
};

const FormContainer1 = ({ image42, image43 }: FormContainer1Type) => {
  return (
    <View style={styles.pmParent}>
      <Text style={[styles.pm, styles.pmPosition]}>Uploads</Text>
      <View style={styles.dinnerWithJulieParent}>
        <Text
          style={[styles.dinnerWithJulie, styles.pmPosition]}
        >{`view more `}</Text>
        <View style={[styles.groupParent, styles.groupParentLayout]}>
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
              style={[styles.image42Icon, styles.groupParentLayout]}
              contentFit="cover"
              source={image42}
            />
            <View style={[styles.border1, styles.borderBorder]} />
          </View>
          <View style={styles.groupContainer}>
            <View style={styles.imagesWrapper}>
              <View style={[styles.images, styles.imagesPosition]}>
                <Image
                  style={[styles.image43Icon, styles.imagesPosition]}
                  contentFit="cover"
                  source={image43}
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
    fontFamily: FontFamily.bold,
    top: "50%",
    position: "absolute",
  },
  groupParentLayout: {
    height: 150,
    position: "absolute",
  },
  frameWrapperLayout: {
    width: 105,
    height: 150,
    top: 0,
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
    bottom: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  pm: {
    marginTop: -111.5,
    width: "53.83%",
    left: "1.66%",
    fontSize: FontSize.size_base,
    fontWeight: "600",
    color: Color.colorSienna,
    textAlign: "left",
    height: 19,
  },
  dinnerWithJulie: {
    marginTop: 67.5,
    width: "25%",
    left: "74.4%",
    fontSize: FontSize.size_xs,
    textDecoration: "underline",
    color: Color.colorDarkslategray,
    textAlign: "right",
    height: 29,
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
    width: 332,
    left: 0,
    top: 0,
    height: 150,
  },
  dinnerWithJulieParent: {
    marginTop: -81.5,
    height: 193,
    left: "0%",
    right: "0%",
    width: "100%",
    top: "50%",
    position: "absolute",
  },
  pmParent: {
    marginTop: 121,
    width: "88.53%",
    right: "4.53%",
    left: "6.93%",
    height: 223,
    top: "50%",
    position: "absolute",
  },
});

export default FormContainer1;
