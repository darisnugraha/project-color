export const GET_ALL_TERIMA_SUB_DIVISI =
  "[terimasubdivisi] get all terima sub divisi";
export const SET_DATA_TERIMA_SUB_DIVISI_SUCCESS =
  "[terimasubdivisi] get all terima sub divisi success";
export const SET_DATA_TERIMA_SUB_DIVISI_FAILED =
  "[terimasubdivisi] get all terima sub divisi failed";

export const getAllTerimaSubDivisi = {
  type: GET_ALL_TERIMA_SUB_DIVISI,
};
export const setDataTerimaSubDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_SUB_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataTerimaSubDivisiFailed = ({ error }) => ({
  type: SET_DATA_TERIMA_SUB_DIVISI_FAILED,
  payload: { data: error },
});
