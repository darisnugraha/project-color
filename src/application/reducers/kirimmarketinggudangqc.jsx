// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_KIRIM_MARKETING_GUDANG_QC_SUCCESS,
  SET_DATA_KIRIM_MARKETING_GUDANG_QC_FAILED,
  SET_TYPE_LAPORAN,
} from "../actions/kirimmarketinggudangqc";
const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
  type: "NEW",
};

const kirimmarketinggudangqc = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_KIRIM_MARKETING_GUDANG_QC_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_KIRIM_MARKETING_GUDANG_QC_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    case SET_TYPE_LAPORAN:
      return {
        ...state,
        type: action.payload.data,
      };
    default:
      return state;
  }
};

export default kirimmarketinggudangqc;
