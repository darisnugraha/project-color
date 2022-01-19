// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_KARTU_JOB_ORDER_SUCCESS,
  SET_DATA_KARTU_JOB_ORDER_FAILED,
} from "../actions/kartujoborder";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const kartujoborder = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_KARTU_JOB_ORDER_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_KARTU_JOB_ORDER_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default kartujoborder;
