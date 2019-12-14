import React from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";

import MealList from "../components/MealList";

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");

  const currentCategory = CATEGORIES.find(cat => cat.id === categoryId);

  const availableMeals = useSelector(({ meals }) => meals.filteredMeals);

  const filteredMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={filteredMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navData => {
  const categoryId = navData.navigation.getParam("categoryId");

  const currentCategory = CATEGORIES.find(cat => cat.id === categoryId);

  return {
    headerTitle: currentCategory.title,
  };
};

export default CategoryMealsScreen;
