export const UPDATE_STEPS = "UPDATE_STEPS";

const initialState = {
  step: 1,
};

const stepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STEPS: {
      return {
        step: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default stepsReducer;
