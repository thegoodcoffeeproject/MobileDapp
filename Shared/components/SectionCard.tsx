import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

type SectionCardType = {
  cropStatus?: string;
  cropRating?: string;

  /** Style props */
  propWidth?: number | string;
  propRight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionCard = ({
  cropStatus,
  cropRating,
  propWidth,
  propRight,
}: SectionCardType) => {
  const bgStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("right", propRight),
    };
  }, [propWidth, propRight]);

  return (
    <View style={styles.cardParent}>
      <View style={[styles.card, styles.bg1Position]}>
        <View style={[styles.card, styles.bg1Position]}>
          <View style={[styles.bg1, styles.bg1ShadowBox]} />
        </View>
        <View style={styles.text}>
          <View style={styles.bgParent}>
            <View style={[styles.bg2, styles.bg1Position]} />
            <View style={[styles.bg3, styles.bg3Position, bgStyle]} />
          </View>
          <Text style={[styles.pm, styles.pmPosition]}>Rwandan Espresso</Text>
          <Text style={[styles.pm1, styles.pm1Layout]}>
            <Text style={styles.status}>{`Status: `}</Text>
            <Text style={styles.harvested}>{cropStatus}</Text>
          </Text>
          <Text style={[styles.pm2, styles.pm2Typo]}>{cropRating}</Text>
          <View style={styles.addNewImage}>
            <View style={[styles.bg4, styles.bg3Position]} />
            <Text style={[styles.helloStevenYour, styles.pm2Typo]}>{`>`}</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.image44Icon, styles.bg1Layout]}
        contentFit="cover"
        source={require("../assets/image-44.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bg1Position: {
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
  },
  bg1ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    right: "0%",
    width: "100%",
  },
  bg3Position: {
    backgroundColor: Color.colorSienna,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  pmPosition: {
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  pm1Layout: {
    height: 15,
    color: Color.colorDarkslategray,
    left: "0%",
  },
  pm2Typo: {
    fontFamily: FontFamily.robotoRegular,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  bg1Layout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  bg1: {
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowRadius: 20,
    elevation: 20,
    borderRadius: Border.br_xl,
    position: "absolute",
    left: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  card: {
    right: "0%",
    width: "100%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  bg2: {
    backgroundColor: Color.colorSeashell,
    borderRadius: Border.br_3xs,
    right: "0%",
    width: "100%",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  bg3: {
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
    fontFamily: FontFamily.bold,
    height: 25,
    color: Color.colorDarkslategray,
    textAlign: "left",
    top: "50%",
    left: "0%",
  },
  status: {
    fontSize: FontSize.size_smi,
  },
  harvested: {
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
  },
  pm1: {
    marginTop: -12.6,
    width: "54.5%",
    fontWeight: "300",
    fontFamily: FontFamily.robotoLight,
    textAlign: "left",
    top: "50%",
    position: "absolute",
    height: 15,
  },
  pm2: {
    marginTop: 13.4,
    width: "16.67%",
    fontSize: FontSize.size_xs,
    height: 15,
    color: Color.colorDarkslategray,
    left: "0%",
  },
  bg4: {
    borderRadius: Border.br_81xl,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowRadius: 45,
    elevation: 45,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    right: "0%",
    width: "100%",
  },
  helloStevenYour: {
    marginTop: -10,
    width: "70%",
    left: "30%",
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
    height: 19,
  },
  addNewImage: {
    height: "20.66%",
    width: "9.01%",
    top: "79.34%",
    left: "90.99%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  text: {
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
    width: "92%",
    top: "47.78%",
    right: "3.47%",
    bottom: "36.82%",
    left: "4.53%",
    position: "absolute",
  },
});

export default SectionCard;
