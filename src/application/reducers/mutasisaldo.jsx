// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_MUTASI_SALDO_BY_DIVISI_SUCCESS,
  SET_DATA_MUTASI_SALDO_BY_DIVISI_FAILED,
  SET_DIVISI,
} from "../actions/mutasisaldo";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  divisi: "-",
};

const mutasisaldo = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_MUTASI_SALDO_BY_DIVISI_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_MUTASI_SALDO_BY_DIVISI_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DIVISI:
      return {
        ...state,
        divisi: action.payload.data,
      };
    default:
      return state;
  }
};

export default mutasisaldo;
