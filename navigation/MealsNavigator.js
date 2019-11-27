import { Platform } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    // first key will be take as initial route
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
      // We can set nav options in specific Component and here as well
      // navigationOptions: {}
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.select({
          ios: Colors.white,
          android: Colors.navyBlue,
        }),
      },
      headerTintColor: Platform.select({
        ios: Colors.navyBlue,
        android: Colors.white,
      }),
    },
  }
);

export default createAppContainer(MealsNavigator);
