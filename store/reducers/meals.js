import { MEALS } from "../../data/dummy-data";

import { TOGGLE_FAVORITE, SET_FILTERS } from "../constants";

const initialState = {
  allMeals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.payload.mealId
      );

      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];

        updatedFavMeals.splice(existingIndex, 1);

        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const favMeal = state.allMeals.find(
          ({ id }) => id === action.payload.mealId
        );

        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(favMeal),
        };
      }
    }
    case SET_FILTERS: {
      const appliedFilters = action.payload.filters;
      const filteredMeals = state.allMeals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactose) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals };
    }
    default: {
      return state;
    }
  }
};

export default mealsReducer;
