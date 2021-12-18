export const GET_ALL_TERIMA_BY_DIVISI =
  "[terimabydivisi] get all terima by divisi";
export const SET_DATA_TERIMA_BY_DIVISI_SUCCESS =
  "[terimabydivisi] get all terima by divisi success";
export const SET_DATA_TERIMA_BY_DIVISI_FAILED =
  "[terimabydivisi] get all terima by divisi failed";

export const getAllTerimaByDivisi = {
  type: GET_ALL_TERIMA_BY_DIVISI,
};
export const setDataTerimaByDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_BY_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataTerimaByDivisiFailed = ({ error }) => ({
  type: SET_DATA_TERIMA_BY_DIVISI_FAILED,
  payload: { data: error },
});
