import { TYPES } from "../../data/types";

const initialState = {
  types: TYPES,
  selected: "Greyhound"
};

const typesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED":
      return {
        ...state,
        selected: action.payload
      };
  }
  return state;
};

export default typesReducer;
