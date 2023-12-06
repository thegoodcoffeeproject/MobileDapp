import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const ContainerCard = () => {
  return (
    <View style={styles.textPost}>
      <View style={[styles.bg, styles.iconPosition]}>
        <View style={[styles.bg1, styles.iconPosition]} />
      </View>
      <View style={[styles.actions, styles.text2Position]}>
        <View style={[styles.shareIcon, styles.iconPosition]}>
          <View style={[styles.bg, styles.iconPosition]} />
          <Image
            style={[styles.shapeIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/shape1.png")}
          />
        </View>
        <View style={[styles.comments, styles.likesPosition]}>
          <Text style={[styles.text, styles.textTypo]}>22</Text>
          <Image
            style={[styles.commentsIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/comments-icon1.png")}
          />
        </View>
        <View style={[styles.likes, styles.likesPosition]}>
          <Text style={[styles.text1, styles.textTypo]}>682</Text>
          <Image
            style={[styles.likesIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/likes-icon1.png")}
          />
        </View>
      </View>
      <View style={[styles.text2, styles.textPosition]}>
        <Text style={[styles.fashionPhotography, styles.todayAt926Position]}>
          Just shipped latest export of Ethipian blend to UK Markets. Excited to
          have reach final stage of Wholesale process.
        </Text>
      </View>
      <View style={[styles.author, styles.textPosition]}>
        <View style={[styles.text3, styles.textPosition]}>
          <Text style={[styles.madsJrgensen, styles.todayAt926Position]}>
            Chantel
          </Text>
          <Text style={[styles.todayAt926, styles.todayAt926Position]}>
            Today at 9:26 PM
          </Text>
        </View>
        <View style={[styles.avatar, styles.iconPosition]}>
          <View style={[styles.mask, styles.iconPosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  text2Position: {
    right: "4.35%",
    width: "91.3%",
    left: "4.35%",
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
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    marginTop: -7,
    color: Color.colorWhite,
    fontSize: FontSize.size_xs,
    top: "50%",
    position: "absolute",
  },
  textPosition: {
    top: "50%",
    position: "absolute",
  },
  todayAt926Position: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  bg1: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorLightslategray,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  bg: {
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  shapeIcon: {
    height: "68.75%",
    width: "78.33%",
    top: "16.25%",
    right: "8.75%",
    bottom: "15%",
    left: "12.92%",
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
    bottom: "0%",
    top: "0%",
    height: "100%",
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
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  likes: {
    width: "17.46%",
    right: "82.54%",
    left: "0%",
  },
  actions: {
    height: "12.83%",
    top: "79.14%",
    bottom: "8.02%",
    left: "4.35%",
    position: "absolute",
  },
  fashionPhotography: {
    marginTop: -28.5,
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
    width: "100%",
  },
  text2: {
    marginTop: -23.5,
    height: 57,
    left: "4.35%",
    right: "4.35%",
    width: "91.3%",
  },
  madsJrgensen: {
    marginTop: -17,
    color: Color.colorWhite,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_xs,
  },
  todayAt926: {
    marginTop: 3,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
  },
  text3: {
    marginTop: -18,
    width: "62.84%",
    left: "37.16%",
    height: 34,
    right: "0%",
  },
  mask: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorLightgray,
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  avatar: {
    width: "27.03%",
    right: "72.97%",
    left: "0%",
    position: "absolute",
  },
  author: {
    marginTop: -78.5,
    width: "42.9%",
    right: "52.75%",
    height: 40,
    left: "4.35%",
  },
  textPost: {
    height: "23.03%",
    width: "92%",
    top: "61.45%",
    right: "4%",
    bottom: "15.52%",
    left: "4%",
    position: "absolute",
  },
});

export default ContainerCard;
