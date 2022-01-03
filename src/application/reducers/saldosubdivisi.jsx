// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_SALDO_SUB_DIVISI_SUCCESS,
  SET_DATA_SALDO_SUB_DIVISI_FAILED,
  SET_TYPE,
} from "../actions/saldosubdivisi";

const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  type: "ALL",
};

const saldosubdivisi = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_SALDO_SUB_DIVISI_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_SALDO_SUB_DIVISI_FAILED:
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

export default saldosubdivisi;
