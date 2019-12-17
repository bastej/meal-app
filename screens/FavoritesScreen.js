import React from "react";
import { View, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import PlainText from "../components/PlainText";

const FavoritesScreen = props => {
  const favMeals = useSelector(({ meals }) => meals.favoriteMeals);

  if (!favMeals.length || !favMeals) {
    return (
      <View style={styles.content}>
        <PlainText>Favorites meal not found. Add some!</PlainText>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
