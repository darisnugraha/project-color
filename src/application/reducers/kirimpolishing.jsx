// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_KIRIM_POLISHING_SUCCESS,
  SET_DATA_KIRIM_POLISHING_FAILED,
} from "../actions/kirimpolishing";
const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const kirimpolishing = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_KIRIM_POLISHING_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_KIRIM_POLISHING_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default kirimpolishing;
