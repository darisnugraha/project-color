// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_NO_PO_SUCCESS,
  SET_DATA_NO_PO_FAILED,
  SET_DATA_NO_PO_REPARASI_SUCCESS,
  SET_DATA_NO_PO_REPARASI_FAILED,
  SET_DATA_NO_PO_JP_SUCCESS,
  SET_DATA_NO_PO_JP_FAILED,
  SET_DATA_NO_PO_REPARASI_RK_SUCCESS,
  SET_DATA_NO_PO_REPARASI_RK_FAILED,
} from "../actions/nopo";

const initialState = {
  feedback: [],
  feedbackJP: [],
  error: null,
  isEdit: false,
  feedbackReparasi: [],
  feedbackReparasiRK: [],
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
    case SET_DATA_NO_PO_JP_SUCCESS:
      return {
        ...state,
        feedbackJP: action.payload.data,
      };
    case SET_DATA_NO_PO_JP_FAILED:
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
    case SET_DATA_NO_PO_REPARASI_RK_SUCCESS:
      return {
        ...state,
        feedbackReparasiRK: action.payload.data,
      };
    case SET_DATA_NO_PO_REPARASI_RK_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default nopo;
