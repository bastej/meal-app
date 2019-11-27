import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");

  const currentCategory = CATEGORIES.find(cat => cat.id === categoryId);
  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen</Text>
      <Button
        title="Go to meal detail"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
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

CategoryMealsScreen.navigationOptions = navData => {
  const categoryId = navData.navigation.getParam("categoryId");

  const currentCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return {
    headerTitle: currentCategory.title,
  };
};

export default CategoryMealsScreen;
