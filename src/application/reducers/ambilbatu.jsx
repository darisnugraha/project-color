// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_AMBIL_BATU_SUCCESS,
  SET_DATA_AMBIL_BATU_FAILED,
} from "../actions/ambilbatu";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const ambilbatu = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_AMBIL_BATU_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_AMBIL_BATU_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default ambilbatu;
