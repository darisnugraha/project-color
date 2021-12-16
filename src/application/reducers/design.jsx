// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_DESIGN_SUCCESS,
  SET_DATA_DESIGN_FAILED,
} from "../actions/design";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const design = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_DESIGN_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_DESIGN_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default design;
