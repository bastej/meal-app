import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import PlainText from "../components/PlainText";

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam("mealId");

  const {
    duration,
    complexity,
    affordability,
    imageUrl,
    ingredients,
    steps,
  } = MEALS.find(({ id }) => id === mealId);

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
