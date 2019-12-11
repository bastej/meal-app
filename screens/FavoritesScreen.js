import React from "react";

import { MEALS } from "../data/dummy-data";

import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = props => {
  const favMeals = MEALS.filter(({ id }) => id === "m1" || id === "m2");

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = navData => ({
  headerTitle: "My Favorites",
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  ),
});

export default FavoritesScreen;
