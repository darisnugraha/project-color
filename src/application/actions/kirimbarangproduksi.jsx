export const GET_ALL_KIRIM_BARANG_PRODUKSI =
  "[kirimbarangproduksi] get all kirim barang produksi";
export const SET_DATA_KIRIM_BARANG_PRODUKSI_SUCCESS =
  "[kirimbarangproduksi] get all kirim barang produksi success";
export const SET_DATA_KIRIM_BARANG_PRODUKSI_FAILED =
  "[kirimbarangproduksi] get all kirim barang produksi failed";

export const getAllKirimBarangProduksi = {
  type: GET_ALL_KIRIM_BARANG_PRODUKSI,
};
export const setDataKirimBarangProduksiSuccess = ({ feedback }) => ({
  type: SET_DATA_KIRIM_BARANG_PRODUKSI_SUCCESS,
  payload: { data: feedback },
});
export const setDataKirimBarangProduksiFailed = ({ error }) => ({
  type: SET_DATA_KIRIM_BARANG_PRODUKSI_FAILED,
  payload: { data: error },
});
