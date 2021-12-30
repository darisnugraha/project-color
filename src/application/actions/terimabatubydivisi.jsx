export const GET_ALL_TERIMA_BATU_BY_DIVISI =
  "[terimabatu] get all terima batu by divisi";
export const SET_DATA_TERIMA_BATU_BY_DIVISI_SUCCESS =
  "[terimabatu] get all terima batu by divisi success";
export const SET_DATA_TERIMA_BATU_BY_DIVISI_FAILED =
  "[terimabatu] get all terima batu by divisi failed";
export const SET_DIVISI = "[terimabatu] set divisi";

export const getAllTerimaBatuByDivisi = {
  type: GET_ALL_TERIMA_BATU_BY_DIVISI,
};
export const setDataTerimaBatuByDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_BATU_BY_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataTerimaBatuByDivisiFailed = ({ error }) => ({
  type: SET_DATA_TERIMA_BATU_BY_DIVISI_FAILED,
  payload: { data: error },
});

export const getDivisi = ({ divisi }) => ({
  type: SET_DIVISI,
  payload: { data: divisi },
});
