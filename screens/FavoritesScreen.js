import React from "react";

import { MEALS } from "../data/dummy-data";

import MealList from "../components/MealList";

const FavoritesScreen = props => {
  const favMeals = MEALS.filter(({ id }) => id === "m1" || id === "m2");

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: "My Favorites",
};

export default FavoritesScreen;
