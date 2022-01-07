export const GET_ALL_MUTASI_STOCK_GUDANG_QC =
  "[mutasistockgudangqc] get all mutasi stock gudang qc";
export const SET_DATA_MUTASI_STOCK_GUDANG_QC_SUCCESS =
  "[mutasistockgudangqc] get all mutasi stock gudang qc success";
export const SET_DATA_MUTASI_STOCK_GUDANG_QC_FAILED =
  "[mutasistockgudangqc] get all mutasi stock gudang qc failed";
export const SET_TYPE_LAPORAN = "[mutasistockgudangqc] set type laporan";

export const getAllMutasiStockGudangQC = {
  type: GET_ALL_MUTASI_STOCK_GUDANG_QC,
};
export const setDataMutasiStockGudangQCSuccess = ({ feedback }) => ({
  type: SET_DATA_MUTASI_STOCK_GUDANG_QC_SUCCESS,
  payload: { data: feedback },
});
export const setDataMutasiStockGudangQCFailed = ({ error }) => ({
  type: SET_DATA_MUTASI_STOCK_GUDANG_QC_FAILED,
  payload: { data: error },
});
export const setTypeLaporan = ({ type }) => ({
  type: SET_TYPE_LAPORAN,
  payload: { data: type },
});
