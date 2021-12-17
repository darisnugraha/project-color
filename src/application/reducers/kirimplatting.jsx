// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_KIRIM_PLATTING_SUCCESS,
  SET_DATA_KIRIM_PLATTING_FAILED,
} from "../actions/kirimplatting";
const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const kirimplatting = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_KIRIM_PLATTING_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_KIRIM_PLATTING_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default kirimplatting;
