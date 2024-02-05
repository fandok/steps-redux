import { combineReducers } from "redux";

import stepsReducer from "./steps";

const rootReducers = combineReducers({
  steps: stepsReducer,
});

export default rootReducers;
