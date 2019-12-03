import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");

  const currentMeal = MEALS.find(({ id }) => id === mealId);

  return (
    <View style={styles.screen}>
      <Text>The {currentMeal.title} Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

MealDetailScreen.navigationOptions = navData => {
  const mealId = navData.navigation.getParam("mealId");

  const currentMeal = MEALS.find(({ id }) => id === mealId);

  return {
    headerTitle: currentMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => alert("Work!")}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;
