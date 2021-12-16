export const GET_ALL_TERIMA_BARANG_PRODUKSI =
  "[terimabarangproduksi] get all terima barang produksi";
export const SET_DATA_TERIMA_BARANG_PRODUKSI_SUCCESS =
  "[terimabarangproduksi] get all terima barang produksi success";
export const SET_DATA_TERIMA_BARANG_PRODUKSI_FAILED =
  "[terimabarangproduksi] get all terima barang produksi failed";

export const getAllTerimaBarangProduksi = {
  type: GET_ALL_TERIMA_BARANG_PRODUKSI,
};
export const setDataTerimaBarangProduksiSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_BARANG_PRODUKSI_SUCCESS,
  payload: { data: feedback },
});
export const setDataTerimaBarangProduksiFailed = ({ error }) => ({
  type: SET_DATA_TERIMA_BARANG_PRODUKSI_FAILED,
  payload: { data: error },
});
