export const GET_ALL_KIRIM_GUDANG_QC =
  "[kirimgudangqc] get all kirim gudang qc";
export const SET_DATA_KIRIM_GUDANG_QC_SUCCESS =
  "[kirimgudangqc] get all kirim gudang qc success";
export const SET_DATA_KIRIM_GUDANG_QC_FAILED =
  "[kirimgudangqc] get all kirim gudang qc failed";

export const getAllKirimGudangQC = {
  type: GET_ALL_KIRIM_GUDANG_QC,
};
export const setDataKirimGudangQCSuccess = ({ feedback }) => ({
  type: SET_DATA_KIRIM_GUDANG_QC_SUCCESS,
  payload: { data: feedback },
});
export const setDataKirimGudangQCFailed = ({ error }) => ({
  type: SET_DATA_KIRIM_GUDANG_QC_FAILED,
  payload: { data: error },
});
