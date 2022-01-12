// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_REPARASI_KELUAR_SUCCESS,
  SET_DATA_REPARASI_KELUAR_FAILED,
} from "../actions/reparasikeluar";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const reparasikeluar = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_REPARASI_KELUAR_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_REPARASI_KELUAR_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default reparasikeluar;
