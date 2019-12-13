import React from "react";
import { View, StyleSheet, Switch } from "react-native";

import PlainText from "./PlainText";

import Colors from "../constants/Colors";

const FilterSwitch = ({ value, onValueChange, label }) => {
  return (
    <View style={styles.filterContainer}>
      <PlainText>{label}</PlainText>
      <Switch
        trackColor={{ true: Colors.yellow }}
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 5,
  },
});

export default FilterSwitch;
