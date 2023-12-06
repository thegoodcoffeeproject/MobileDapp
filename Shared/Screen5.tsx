import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import ImagePostContainer from "../components/ImagePostContainer";
import ContainerCard from "../components/ContainerCard";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export const Screen5 = () => {
  return (
    <View style={styles.screen5}>
      <View style={[styles.bg, styles.iconPosition1]}>
        <View style={[styles.bg1, styles.iconPosition1]} />
      </View>
      <ImagePostContainer />
      <ContainerCard />
      <View style={styles.imagePost}>
        <View style={styles.actions}>
          <View style={[styles.shareIcon, styles.iconPosition]}>
            <View style={[styles.bg, styles.iconPosition1]} />
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
        <View style={styles.text2}>
          <Text style={styles.greatPhotoShooting}>Great planting today!</Text>
        </View>
        <View style={[styles.images, styles.bgPosition]}>
          <View style={[styles.image, styles.imagePosition]}>
            <View style={styles.maskShadowBox} />
          </View>
          <View style={[styles.image1, styles.imagePosition]}>
            <View style={styles.maskShadowBox} />
          </View>
        </View>
        <View style={[styles.author, styles.textLayout]}>
          <View style={[styles.text3, styles.textLayout]}>
            <Text style={[styles.julianKrmer, styles.julianKrmerPosition]}>
              Justin
            </Text>
            <Text style={[styles.todayAt1247, styles.julianKrmerPosition]}>
              Farmer
            </Text>
            <Image
              style={[styles.textChild, styles.textLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-186.png")}
            />
          </View>
          <View style={styles.avatar}>
            <View style={[styles.mask2, styles.iconPosition1]} />
          </View>
        </View>
      </View>
      <View style={styles.header}>
        <Image
          style={[styles.moreIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/more-icon.png")}
        />
        <View style={styles.name}>
          <Text style={styles.timeline}>TIMELINE</Text>
        </View>
        <Image
          style={[styles.backIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/back-icon2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition1: {
    top: "0%",
    height: "100%",
    left: "0%",
    bottom: "0%",
  },
  iconPosition: {
    left: "92.38%",
    width: "7.62%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    fontSize: FontSize.size_xs,
    marginTop: -7,
    top: "50%",
    position: "absolute",
  },
  bgPosition: {
    width: "100%",
    right: "0%",
    position: "absolute",
  },
  imagePosition: {
    width: "48.45%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textLayout: {
    height: 100,
    position: "absolute",
  },
  julianKrmerPosition: {
    left: "6%",
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    top: "50%",
    position: "absolute",
  },
  bg1: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorWhite,
    height: "100%",
  },
  bg: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
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
    height: "6.25%",
    width: "64.95%",
    top: "93.75%",
    right: "31.96%",
    left: "3.09%",
    bottom: "0%",
    position: "absolute",
  },
  greatPhotoShooting: {
    marginTop: -9.5,
    fontSize: FontSize.size_base,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  text2: {
    marginTop: 137,
    width: "30.52%",
    right: "66.39%",
    height: 19,
    top: "50%",
    left: "3.09%",
    position: "absolute",
  },
  maskShadowBox: {
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowColor: "rgba(0, 0, 0, 0.2)",
    backgroundColor: Color.colorLightslategray,
    borderRadius: Border.br_xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  image: {
    right: "51.55%",
    left: "0%",
  },
  image1: {
    left: "51.55%",
    right: "0%",
  },
  images: {
    height: "61.2%",
    top: "19.27%",
    bottom: "19.53%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  julianKrmer: {
    marginTop: -29,
    color: Color.colorDarkslategray,
  },
  todayAt1247: {
    marginTop: -9,
    color: Color.colorDimgray_100,
  },
  textChild: {
    top: 85,
    left: 79,
    width: 100,
  },
  text3: {
    marginTop: -50,
    width: "67.11%",
    left: "32.89%",
    top: "50%",
    right: "0%",
  },
  mask2: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.colorLightgray,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  avatar: {
    height: "40%",
    width: "26.85%",
    top: "19%",
    right: "73.15%",
    bottom: "41%",
    left: "0%",
    position: "absolute",
  },
  author: {
    marginTop: -192,
    width: "30.72%",
    right: "66.19%",
    top: "50%",
    left: "3.09%",
  },
  imagePost: {
    height: "47.29%",
    width: "129.33%",
    top: "10.47%",
    right: "-33.33%",
    bottom: "42.24%",
    left: "4%",
    position: "absolute",
  },
  moreIcon: {
    left: "92.38%",
    width: "7.62%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  timeline: {
    color: "#707685",
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    marginTop: -7,
    top: "50%",
    left: "0%",
    position: "absolute",
  },
  name: {
    width: "17.14%",
    right: "41.27%",
    left: "41.59%",
    height: 14,
    marginTop: -7,
    top: "50%",
    position: "absolute",
  },
  backIcon: {
    right: "92.38%",
    width: "7.62%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  header: {
    height: "2.96%",
    width: "84%",
    top: "6.16%",
    right: "8%",
    bottom: "90.89%",
    left: "8%",
    position: "absolute",
  },
  screen5: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Screen5;
