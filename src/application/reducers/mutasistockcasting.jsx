// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_MUTASI_STOCK_CASTING_SUCCESS,
  SET_DATA_MUTASI_STOCK_CASTING_FAILED,
} from "../actions/mutasistockcasting";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const mutasistockcasting = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_MUTASI_STOCK_CASTING_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_MUTASI_STOCK_CASTING_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default mutasistockcasting;
