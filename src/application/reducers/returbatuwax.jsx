// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_RETUR_BATU_WAX_SUCCESS,
  SET_DATA_RETUR_BATU_WAX_FAILED,
} from "../actions/returbatuwax";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const returbatuwax = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_RETUR_BATU_WAX_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_RETUR_BATU_WAX_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default returbatuwax;
