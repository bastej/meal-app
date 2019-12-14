import { MEALS } from "../../data/dummy-data";

const initialState = {
  allMeals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;
