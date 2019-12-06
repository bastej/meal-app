import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Meal from "../components/Meal";

const MealList = ({ listData, navigation }) => {
  const renderMealItem = ({
    item: { id, title, duration, complexity, affordability, imageUrl },
  }) => (
    <Meal
      onPress={() => {
        navigation.navigate({
          routeName: "MealDetail",
          params: {
            mealId: id,
          },
        });
      }}
      title={title}
      duration={duration}
      complexity={complexity}
      affordability={affordability}
      image={imageUrl}
    />
  );

  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={({ id }) => id}
        data={listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default MealList;
