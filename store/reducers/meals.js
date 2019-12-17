import { MEALS } from "../../data/dummy-data";

import { TOGGLE_FAVORITE } from "../constants";

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
    default: {
      return state;
    }
  }
};

export default mealsReducer;
