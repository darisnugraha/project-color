// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_TERIMA_SUB_DIVISI_SUCCESS,
  SET_DATA_TERIMA_SUB_DIVISI_FAILED,
} from "../actions/terimasubdivisi";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const terimasubdivisi = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_TERIMA_SUB_DIVISI_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_TERIMA_SUB_DIVISI_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default terimasubdivisi;
