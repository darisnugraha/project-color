// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_PO_MASUK_SUCCESS,
  SET_DATA_PO_MASUK_FAILED,
  SET_TYPE,
} from "../actions/pomasuk";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  type: "DETAIL",
};

const pomasuk = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_PO_MASUK_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_PO_MASUK_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_TYPE:
      return {
        ...state,
        type: action.payload.data,
      };
    default:
      return state;
  }
};

export default pomasuk;
