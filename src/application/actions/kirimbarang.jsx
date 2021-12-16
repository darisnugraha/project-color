export const GET_ALL_KIRIM_BARANG = "[kirimbarang] get all kirim barang";
export const SET_DATA_KIRIM_BARANG_SUCCESS =
  "[kirimbarang] get all kirim barang success";
export const SET_DATA_KIRIM_BARANG_FAILED =
  "[kirimbarang] get all kirim barang failed";

export const getAllKirimBarang = {
  type: GET_ALL_KIRIM_BARANG,
};
export const setDataKirimBarangSuccess = ({ feedback }) => ({
  type: SET_DATA_KIRIM_BARANG_SUCCESS,
  payload: { data: feedback },
});
export const setDataKirimBarangFailed = ({ error }) => ({
  type: SET_DATA_KIRIM_BARANG_FAILED,
  payload: { data: error },
});
