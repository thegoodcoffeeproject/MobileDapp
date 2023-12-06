import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ImageContainer = () => {
  return (
    <View style={[styles.images, styles.imagesPosition]}>
      <View style={[styles.image, styles.imagePosition4]}>
        <View style={[styles.mask, styles.maskPosition]} />
      </View>
      <View style={[styles.image1, styles.imagePosition3]}>
        <View style={[styles.mask, styles.maskPosition]} />
      </View>
      <View style={[styles.image2, styles.imagePosition2]}>
        <View style={[styles.mask, styles.maskPosition]} />
      </View>
      <View style={[styles.image3, styles.imagePosition1]}>
        <View style={[styles.mask, styles.maskPosition]} />
      </View>
      <View style={[styles.image4, styles.imagePosition1]}>
        <View style={[styles.mask, styles.maskPosition]} />
      </View>
      <View style={[styles.image5, styles.imagePosition1]}>
        <View style={[styles.mask, styles.maskPosition]} />
      </View>
      <View style={[styles.image6, styles.imagePosition]}>
        <View style={[styles.mask, styles.maskPosition]} />
      </View>
      <View style={[styles.image7, styles.imagePosition]}>
        <View style={[styles.mask, styles.maskPosition]} />
      </View>
      <View style={[styles.image8, styles.imagePosition]}>
        <View style={[styles.mask, styles.maskPosition]} />
      </View>
      <LinearGradient
        style={[styles.overlay, styles.imagesPosition]}
        locations={[0, 1]}
        colors={["rgba(255, 255, 255, 0)", "#fff"]}
      />
      <View style={[styles.title, styles.titlePosition]}>
        <Text style={[styles.images1, styles.titlePosition]}>Images</Text>
        <Image
          style={[styles.moreIcon, styles.maskPosition]}
          contentFit="cover"
          source={require("../assets/more-icon.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagesPosition: {
    right: "0%",
    position: "absolute",
    left: "0%",
    width: "100%",
  },
  imagePosition4: {
    left: "36%",
    right: "36%",
  },
  maskPosition: {
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  imagePosition3: {
    left: "68%",
    right: "4%",
  },
  imagePosition2: {
    left: "4%",
    right: "68%",
  },
  imagePosition1: {
    bottom: "30.61%",
    top: "42.6%",
    width: "28%",
    height: "26.79%",
    position: "absolute",
  },
  imagePosition: {
    top: "73.21%",
    bottom: "0%",
    width: "28%",
    height: "26.79%",
    position: "absolute",
  },
  titlePosition: {
    top: "50%",
    position: "absolute",
  },
  mask: {
    height: "100%",
    top: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightgray,
    left: "0%",
    width: "100%",
    bottom: "0%",
  },
  image: {
    bottom: "61.22%",
    top: "11.99%",
    width: "28%",
    height: "26.79%",
    position: "absolute",
  },
  image1: {
    bottom: "61.22%",
    top: "11.99%",
    width: "28%",
    height: "26.79%",
    position: "absolute",
  },
  image2: {
    bottom: "61.22%",
    top: "11.99%",
    width: "28%",
    height: "26.79%",
    position: "absolute",
  },
  image3: {
    left: "36%",
    right: "36%",
  },
  image4: {
    left: "68%",
    right: "4%",
  },
  image5: {
    left: "4%",
    right: "68%",
  },
  image6: {
    left: "36%",
    right: "36%",
  },
  image7: {
    left: "68%",
    right: "4%",
  },
  image8: {
    left: "4%",
    right: "68%",
  },
  overlay: {
    height: "47.96%",
    top: "38.78%",
    bottom: "13.27%",
    backgroundColor: "transparent",
    left: "0%",
  },
  images1: {
    marginTop: -14,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorDarkslategray,
    textAlign: "left",
    left: "0%",
  },
  moreIcon: {
    height: "85.71%",
    width: "7.62%",
    top: "14.29%",
    left: "92.38%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  title: {
    marginTop: -196,
    width: "84%",
    right: "8%",
    left: "8%",
    height: 28,
  },
  images: {
    height: "48.28%",
    top: "58.13%",
    bottom: "-6.4%",
    left: "0%",
  },
});

export default ImageContainer;
