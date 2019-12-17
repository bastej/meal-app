import { TOGGLE_FAVORITE, SET_FILTERS } from "../constants";

export const toggleFavorite = id => {
  return {
    type: TOGGLE_FAVORITE,
    payload: { mealId: id },
  };
};

export const setFilters = filters => {
  return {
    type: SET_FILTERS,
    payload: { filters },
  };
};
