// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_MUTASI_STOCK_PUSAT_BY_DIVISI_SUCCESS,
  SET_DATA_MUTASI_STOCK_PUSAT_BY_DIVISI_FAILED,
  SET_DIVISI,
  SET_TYPE,
} from "../actions/mutasistockpusatbydivisi";
const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  divisi: "HAND WORKING",
  type: "SALDO",
};

const mutasistockpusatbydivisi = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_MUTASI_STOCK_PUSAT_BY_DIVISI_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_MUTASI_STOCK_PUSAT_BY_DIVISI_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_DIVISI:
      return {
        ...state,
        divisi: action.payload.data,
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

export default mutasistockpusatbydivisi;
