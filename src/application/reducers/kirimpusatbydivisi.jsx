// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_KIRIM_PUSAT_BY_DIVISI_SUCCESS,
  SET_DATA_KIRIM_PUSAT_BY_DIVISI_FAILED,
} from "../actions/kirimpusatbydivisi";
const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const kirimpusatbydivisi = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_KIRIM_PUSAT_BY_DIVISI_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_KIRIM_PUSAT_BY_DIVISI_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default kirimpusatbydivisi;
