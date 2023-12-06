import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ImagePostContainer = () => {
  return (
    <View style={styles.imagePost}>
      <View style={styles.actions}>
        <View style={[styles.shareIcon, styles.maskIconPosition]}>
          <View style={[styles.bound, styles.maskPosition]} />
          <Image
            style={[styles.shapeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/shape.png")}
          />
        </View>
        <View style={[styles.comments, styles.likesPosition]}>
          <Text style={[styles.text, styles.textTypo]}>76</Text>
          <Image
            style={[styles.commentsIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/comments-icon.png")}
          />
        </View>
        <View style={[styles.likes, styles.likesPosition]}>
          <Text style={[styles.text1, styles.textTypo]}>953</Text>
          <Image
            style={[styles.likesIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/likes-icon.png")}
          />
        </View>
      </View>
      <View style={[styles.text2, styles.textPosition]}>
        <Text style={[styles.greatPhotoShooting, styles.todayAt518Position]}>
          Great photo shooting today!
        </Text>
      </View>
      <View style={[styles.images, styles.maskPosition]}>
        <View style={[styles.bound, styles.maskPosition]}>
          <View style={[styles.mask, styles.maskPosition]} />
        </View>
      </View>
      <View style={[styles.author, styles.textPosition]}>
        <View style={[styles.text3, styles.textPosition]}>
          <Text
            style={[styles.annaSchreiber, styles.todayAt518Position]}
          >{`Lys `}</Text>
          <Text style={[styles.todayAt518, styles.todayAt518Position]}>
            Today at 5:18 AM
          </Text>
        </View>
        <View style={[styles.avatar, styles.maskIconPosition]}>
          <View style={[styles.mask1, styles.maskPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maskIconPosition: {
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  maskPosition: {
    width: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  likesPosition: {
    height: 24,
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorGray_200,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    marginTop: -7,
    fontSize: FontSize.size_xs,
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    top: "50%",
    position: "absolute",
  },
  todayAt518Position: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  bound: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  shapeIcon: {
    height: "68.75%",
    width: "78.33%",
    top: "12.5%",
    right: "10.42%",
    bottom: "18.75%",
    left: "11.25%",
  },
  shareIcon: {
    width: "7.62%",
    left: "92.38%",
    right: "0%",
    position: "absolute",
  },
  text: {
    left: "70.83%",
  },
  commentsIcon: {
    width: "50%",
    right: "50%",
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  comments: {
    width: "15.24%",
    right: "57.78%",
    left: "26.98%",
  },
  text1: {
    left: "61.82%",
  },
  likesIcon: {
    width: "43.64%",
    right: "56.36%",
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  likes: {
    width: "17.46%",
    right: "82.54%",
    left: "0%",
  },
  actions: {
    height: "6.58%",
    width: "91.3%",
    top: "93.42%",
    right: "4.35%",
    left: "4.35%",
    bottom: "0%",
    position: "absolute",
  },
  greatPhotoShooting: {
    marginTop: -9.5,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  text2: {
    marginTop: 127.5,
    width: "57.39%",
    right: "38.26%",
    height: 19,
    left: "4.35%",
  },
  mask: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLightslategray,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  images: {
    height: "64.38%",
    top: "15.07%",
    bottom: "20.55%",
    left: "0%",
  },
  annaSchreiber: {
    marginTop: -17,
    color: Color.colorDarkslategray,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
  },
  todayAt518: {
    marginTop: 3,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.robotoRegular,
  },
  text3: {
    marginTop: -18,
    width: "63.09%",
    left: "36.91%",
    height: 34,
    right: "0%",
  },
  mask1: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorLightgray,
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  avatar: {
    width: "26.85%",
    right: "73.15%",
    left: "0%",
    position: "absolute",
  },
  author: {
    marginTop: -182.5,
    width: "43.19%",
    right: "52.46%",
    height: 40,
    left: "4.35%",
  },
  imagePost: {
    height: "44.95%",
    width: "92%",
    top: "88.18%",
    right: "4%",
    bottom: "-33.13%",
    left: "4%",
    position: "absolute",
  },
});

export default ImagePostContainer;
