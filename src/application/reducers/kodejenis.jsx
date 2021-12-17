// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_KODE_JENIS_SUCCESS,
  SET_DATA_KODE_JENIS_FAILED,
} from "../actions/kodejenis";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const kodejenis = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_KODE_JENIS_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_KODE_JENIS_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default kodejenis;
