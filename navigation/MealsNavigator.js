import React from "react";
import { Platform } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import Colors from "../constants/Colors";
import PlainText from "../components/PlainText";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.select({
      ios: Colors.white,
      android: Colors.navyBlue,
    }),
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.select({
    ios: Colors.navyBlue,
    android: Colors.white,
  }),
  headerTitle: "A screen",
};

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
    defaultNavigationOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions,
  }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={28} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.navyBlue,
      // STYLING TAB LABEL: materialTabs
      tabBarLabel:
        Platform.OS === "android" ? <PlainText>Meals</PlainText> : "Meals",
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: "My Favorite!",
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={28} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.yellow,
      tabBarLabel:
        Platform.OS === "android" ? (
          <PlainText>My Favorite!</PlainText>
        ) : (
          "My Favorite!"
        ),
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.white,
        shifting: true,
        // how to change bg color without shifting
        // shifting: false
        // barStyle: { backgroundColor: Color.navyBlue }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.orange,
          // STYLING TAB LABEL: basic Tabs
          labelStyle: {
            fontFamily: "open-sans",
          },
        },
      });

const androidDrawerConfig = {
  drawerBackgroundColor: Colors.navyBlue,
  contentOptions: {
    activeTintColor: Colors.yellow,
    inactiveTintColor: Colors.white,
    activeBackgroundColor: Colors.blue,
    labelStyle: {
      fontFamily: "open-sans-bold",
    },
  },
};

const IOSDrawerConfig = {
  contentOptions: {
    activeTintColor: Colors.yellow,
    labelStyle: {
      fontFamily: "open-sans-bold",
    },
  },
};

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  Platform.OS === "android"
    ? { ...androidDrawerConfig }
    : { ...IOSDrawerConfig }
);

export default createAppContainer(MainNavigator);
