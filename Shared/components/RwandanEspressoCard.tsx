import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

type RwandanEspressoCardType = {
  cropName?: string;
  locationInput?: string;

  /** Style props */
  propHeight?: number | string;
  propHeight1?: number | string;
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RwandanEspressoCard = ({
  cropName,
  locationInput,
  propHeight,
  propHeight1,
  propTop,
}: RwandanEspressoCardType) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  const rwandanEspressoStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight1),
    };
  }, [propHeight1]);

  const asiconoutlinearrowRightStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.rectangleParent, styles.parentPosition]}>
      <View style={styles.groupChild} />
      <View
        style={[styles.cropNameParent, styles.parentPosition, groupViewStyle]}
      >
        <Text style={[styles.cropName, styles.cropNameTypo]}>{cropName}</Text>
        <Text
          style={[
            styles.rwandanEspresso,
            styles.cropNameTypo,
            rwandanEspressoStyle,
          ]}
        >
          {locationInput}
        </Text>
        <Image
          style={[styles.asiconoutlinearrowRight, asiconoutlinearrowRightStyle]}
          contentFit="cover"
          source={require("../assets/asiconoutlinearrowright1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    height: 47,
    top: 0,
    position: "absolute",
  },
  cropNameTypo: {
    textAlign: "left",
    color: Color.colorSienna,
    fontSize: FontSize.size_sm,
    left: 0,
    position: "absolute",
  },
  groupChild: {
    top: 47,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderBottomWidth: 1,
    width: 284,
    height: 1,
    left: 0,
    position: "absolute",
  },
  cropName: {
    fontWeight: "600",
    fontFamily: FontFamily.bold,
    width: 89,
    top: 0,
    textAlign: "left",
    color: Color.colorSienna,
    fontSize: FontSize.size_sm,
  },
  rwandanEspresso: {
    top: 27,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    width: 183,
    height: 20,
    opacity: 0.5,
  },
  asiconoutlinearrowRight: {
    top: 16,
    left: 273,
    width: 15,
    height: 15,
    position: "absolute",
  },
  cropNameParent: {
    left: 1,
    width: 288,
  },
  rectangleParent: {
    width: 289,
    left: 0,
  },
});

export default RwandanEspressoCard;
