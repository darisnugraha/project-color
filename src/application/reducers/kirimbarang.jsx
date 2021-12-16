// Type your data here, it can be string, or any type of data, just write your variable
import {
  SET_DATA_KIRIM_BARANG_SUCCESS,
  SET_DATA_KIRIM_BARANG_FAILED,
} from "../actions/kirimbarang";
const initialState = {
  feedback: [],
  error: null,
  isEdit: false,
};

const kirimbarang = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA_KIRIM_BARANG_SUCCESS:
      return {
        ...state,
        feedback: action.payload.data,
      };
    case SET_DATA_KIRIM_BARANG_FAILED:
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default kirimbarang;
