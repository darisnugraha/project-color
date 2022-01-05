export const GET_ALL_TERIMA_GUDANG_QC =
  "[terimagudangqc] get all terima gudang qc";
export const SET_DATA_TERIMA_GUDANG_QC_SUCCESS =
  "[terimagudangqc] get all terima gudang qc success";
export const SET_DATA_TERIMA_GUDANG_QC_FAILED =
  "[terimagudangqc] get all terima gudang qc failed";

export const getAllTerimaGudangQC = {
  type: GET_ALL_TERIMA_GUDANG_QC,
};
export const setDataTerimaGudangQCSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_GUDANG_QC_SUCCESS,
  payload: { data: feedback },
});
export const setDataTerimaGudangQCFailed = ({ error }) => ({
  type: SET_DATA_TERIMA_GUDANG_QC_FAILED,
  payload: { data: error },
});
