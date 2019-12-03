import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
} from "react-native";

import PlainText from "../components/PlainText";

const CategoryGridTile = ({ title, color, onPress }) => {
  let TouchableComp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableComp style={{ flex: 1 }} onPress={onPress}>
        <View style={{ ...styles.container, backgroundColor: color }}>
          <PlainText style={styles.categoryTitle} textWeight="bold">
            {title}
          </PlainText>
        </View>
      </TouchableComp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  categoryTitle: {
    fontSize: 17,
    textAlign: "right",
  },
});

export default CategoryGridTile;
