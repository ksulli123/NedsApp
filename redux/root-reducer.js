import { combineReducers } from "redux";

import typesReducer from "./reducers/types";

export default combineReducers({
  selected: typesReducer
});
