import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Colors from "../constants/Colors";
import PlainText from "./PlainText";

const Meal = ({
  onPress,
  title,
  duration,
  complexity,
  affordability,
  image,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View>
          <View style={{ ...styles.row, ...styles.header }}>
            <ImageBackground source={{ uri: image }} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <PlainText
                  textWeight="bold"
                  numberOfLines={1}
                  style={styles.title}
                >
                  {title}
                </PlainText>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.row, ...styles.details }}>
            <PlainText>{duration}m</PlainText>
            <PlainText>{complexity.toUpperCase()}</PlainText>
            <PlainText>{affordability.toUpperCase()}</PlainText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "100%",
    marginBottom: 15,
    backgroundColor: Colors.yellow,
    borderRadius: 10,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  header: {
    height: "85%",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 5,
    paddingVertical: 12,
  },
  title: {
    fontSize: 18,
    color: Colors.white,
    textAlign: "center",
  },
  details: {
    height: "15%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Meal;
