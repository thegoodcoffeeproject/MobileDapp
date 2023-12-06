import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

type SectionCard1Type = {
  processStageLabel?: string;
  stageNumber?: string;
  stageDimensionLabel?: ImageSourcePropType;

  /** Style props */
  propBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionCard1 = ({
  processStageLabel,
  stageNumber,
  stageDimensionLabel,
  propBackgroundColor,
}: SectionCard1Type) => {
  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  return (
    <View style={[styles.rectangleParent, styles.groupChildLayout]}>
      <View
        style={[styles.groupChild, styles.groupChildLayout, rectangleViewStyle]}
      />
      <Text style={[styles.checkAvailability, styles.checkPosition]}>
        {processStageLabel}
      </Text>
      <View style={styles.storyParent}>
        <View style={styles.story}>
          <View style={[styles.border, styles.maskPosition]} />
          <View style={styles.image}>
            <View style={[styles.mask, styles.maskPosition]} />
          </View>
        </View>
        <Text style={[styles.checkAvailability1, styles.checkPosition]}>
          {stageNumber}
        </Text>
      </View>
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={stageDimensionLabel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 67,
    width: 345,
  },
  checkPosition: {
    letterSpacing: 2,
    top: "50%",
    position: "absolute",
  },
  maskPosition: {
    borderRadius: Border.br_13xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_500,
    position: "absolute",
  },
  checkAvailability: {
    marginTop: -6.5,
    left: "23.77%",
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.bold,
    color: Color.colorSienna_100,
    textAlign: "left",
  },
  border: {
    borderStyle: "solid",
    borderColor: Color.colorSienna,
    borderWidth: 1,
  },
  mask: {
    backgroundColor: Color.colorSienna_200,
  },
  image: {
    height: "84.42%",
    width: "84.44%",
    top: "7.88%",
    right: "7.78%",
    bottom: "7.69%",
    left: "7.78%",
    position: "absolute",
  },
  story: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  checkAvailability1: {
    marginTop: -10,
    left: "31.48%",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.robotoRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  storyParent: {
    height: "77.61%",
    width: "15.65%",
    top: "11.94%",
    right: "80%",
    bottom: "10.45%",
    left: "4.35%",
    position: "absolute",
  },
  groupItem: {
    height: "59.7%",
    width: "12.17%",
    top: "25.37%",
    right: "3.48%",
    bottom: "14.93%",
    left: "84.35%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 20,
  },
});

export default SectionCard1;
