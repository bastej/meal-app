import React from "react";
import { View, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";

import MealList from "../components/MealList";
import PlainText from "../components/PlainText";

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");

  const currentCategory = CATEGORIES.find(cat => cat.id === categoryId);

  const availableMeals = useSelector(({ meals }) => meals.filteredMeals);

  const filteredMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  if (!filteredMeals.length || !filteredMeals) {
    return (
      <View style={styles.screen}>
        <PlainText>Meals not found. Add some!</PlainText>
      </View>
    );
  }

  return <MealList listData={filteredMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navData => {
  const categoryId = navData.navigation.getParam("categoryId");

  const currentCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return {
    headerTitle: currentCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
