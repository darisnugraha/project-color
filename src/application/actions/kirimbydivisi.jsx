export const GET_ALL_KIRIM_BY_DIVISI =
  "[kirimbydivisi] get all kirim by divisi";
export const SET_DATA_KIRIM_BY_DIVISI_SUCCESS =
  "[kirimbydivisi] get all kirim by divisi success";
export const SET_DATA_KIRIM_BY_DIVISI_FAILED =
  "[kirimbydivisi] get all kirim by divisi failed";
export const SET_DIVISI = "[kirimbydivisi] set divisi";

export const getAllKirimByDivisi = {
  type: GET_ALL_KIRIM_BY_DIVISI,
};
export const setDataKirimByDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_KIRIM_BY_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataKirimByDivisiFailed = ({ error }) => ({
  type: SET_DATA_KIRIM_BY_DIVISI_FAILED,
  payload: { data: error },
});

export const getDivisi = ({ divisi }) => ({
  type: SET_DIVISI,
  payload: { data: divisi },
});
