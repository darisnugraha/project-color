export const GET_ALL_TERIMA_BARANG = "[terimabarang] get all terima barang";
export const SET_DATA_TERIMA_BARANG_SUCCESS =
  "[terimabarang] get all terima barang success";
export const SET_DATA_TERIMA_BARANG_FAILED =
  "[terimabarang] get all terima barang failed";

export const getAllTerimaBarang = {
  type: GET_ALL_TERIMA_BARANG,
};
export const setDataTerimaBarangSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_BARANG_SUCCESS,
  payload: { data: feedback },
});
export const setDataTerimaBarangFailed = ({ error }) => ({
  type: SET_DATA_TERIMA_BARANG_FAILED,
  payload: { data: error },
});
