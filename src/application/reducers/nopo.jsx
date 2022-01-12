// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_NO_PO_SUCCESS,
  SET_DATA_NO_PO_FAILED,
  SET_DATA_NO_PO_REPARASI_SUCCESS,
  SET_DATA_NO_PO_REPARASI_FAILED,
} from "../actions/nopo";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  feedbackReparasi: [],
};

const nopo = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_NO_PO_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_NO_PO_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DATA_NO_PO_REPARASI_SUCCESS:
      return {
        ...state,
        feedbackReparasi: action.payload.data,
      };
    case SET_DATA_NO_PO_REPARASI_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default nopo;
