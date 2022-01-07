export const GET_ALL_KIRIM_MARKETING_GUDANG_QC =
  "[kirimmarketinggudangqc] get all kirim marketing gudang qc";
export const SET_DATA_KIRIM_MARKETING_GUDANG_QC_SUCCESS =
  "[kirimmarketinggudangqc] get all kirim marketing gudang qc success";
export const SET_DATA_KIRIM_MARKETING_GUDANG_QC_FAILED =
  "[kirimmarketinggudangqc] get all kirim marketing gudang qc failed";
export const SET_TYPE_LAPORAN = "[kirimmarketinggudangqc] set type laporan";

export const getAllKirimMarketingGudangQC = {
  type: GET_ALL_KIRIM_MARKETING_GUDANG_QC,
};
export const setDataKirimMarketingGudangQCSuccess = ({ feedback }) => ({
  type: SET_DATA_KIRIM_MARKETING_GUDANG_QC_SUCCESS,
  payload: { data: feedback },
});
export const setDataKirimMarketingGudangQCFailed = ({ error }) => ({
  type: SET_DATA_KIRIM_MARKETING_GUDANG_QC_FAILED,
  payload: { data: error },
});
export const setTypeLaporan = ({ type }) => ({
  type: SET_TYPE_LAPORAN,
  payload: { data: type },
});
