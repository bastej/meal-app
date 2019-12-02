import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Meal from "../components/Meal";

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam("categoryId");

  const currentCategory = CATEGORIES.find(cat => cat.id === categoryId);

  const filteredMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = ({
    item: { title, duration, complexity, affordability, imageUrl },
  }) => (
    <Meal
      onPress={() => {}}
      title={title}
      duration={duration}
      complexity={complexity}
      affordability={affordability}
      image={imageUrl}
    />
  );

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={({ id }) => id}
        data={filteredMeals}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
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
