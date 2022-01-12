// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_REPARASI_MASUK_SUCCESS,
  SET_DATA_REPARASI_MASUK_FAILED,
} from "../actions/reparasimasuk";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const reparasimasuk = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_REPARASI_MASUK_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_REPARASI_MASUK_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default reparasimasuk;
