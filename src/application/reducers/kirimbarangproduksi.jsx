// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_KIRIM_BARANG_PRODUKSI_SUCCESS,
  SET_DATA_KIRIM_BARANG_PRODUKSI_FAILED,
} from "../actions/kirimbarangproduksi";
const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const kirimbarangproduksi = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_KIRIM_BARANG_PRODUKSI_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_KIRIM_BARANG_PRODUKSI_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default kirimbarangproduksi;
