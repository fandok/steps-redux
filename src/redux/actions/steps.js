import { UPDATE_STEPS } from "../reducers/steps";

export const updateSteps = (step) => (dispatch) => {
  dispatch({
    type: UPDATE_STEPS,
    payload: step,
  });
};
