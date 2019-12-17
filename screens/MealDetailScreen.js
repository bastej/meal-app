import React, { useEffect, useCallback } from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import PlainText from "../components/PlainText";

import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");
  const isFavorite = useSelector(({ meals }) =>
    meals.favoriteMeals.some(({ id }) => id === mealId)
  );

  const availableMeals = useSelector(({ meals }) => meals.allMeals);

  const {
    id,
    duration,
    complexity,
    affordability,
    imageUrl,
    ingredients,
    steps,
  } = availableMeals.find(({ id }) => id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(id));
  }, [id]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, toggleFavoriteHandler);

  useEffect(() => {
    props.navigation.setParams({ isFavorite });
  }, [isFavorite]);

  const renderListItem = item => (
    <View key={item} style={styles.listItem}>
      <PlainText>{item}</PlainText>
    </View>
  );

  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <PlainText>{duration}m</PlainText>
        <PlainText>{complexity.toUpperCase()}</PlainText>
        <PlainText>{affordability.toUpperCase()}</PlainText>
      </View>
      <PlainText textWeight="bold" style={styles.title}>
        Ingridients
      </PlainText>
      {ingredients.map(ingredient => renderListItem(ingredient))}
      <PlainText textWeight="bold" style={styles.title}>
        Steps
      </PlainText>
      {steps.map(step => renderListItem(step))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
  },
  listItem: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

MealDetailScreen.navigationOptions = navData => {
  // const mealId = navData.navigation.getParam("mealId");
  const mealTitle = navData.navigation.getParam("mealTitle");
  const toggleFavorite = navData.navigation.getParam("toggleFav");
  const isFavorite = navData.navigation.getParam("isFavorite");

  const iconName = isFavorite ? "ios-star" : "ios-star-outline";

  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName={iconName} onPress={toggleFavorite} />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;
