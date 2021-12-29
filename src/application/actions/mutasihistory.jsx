export const GET_ALL_MUTASI_HISTORY_BY_DIVISI =
  "[mutasihistory] get all mutasi history by divisi";
export const SET_DATA_MUTASI_HISTORY_BY_DIVISI_SUCCESS =
  "[mutasihistory] get all mutasi history by divisi success";
export const SET_DATA_MUTASI_HISTORY_BY_DIVISI_FAILED =
  "[mutasihistory] get all mutasi history by divisi failed";
export const SET_DIVISI = "[mutasihistory] set divisi";

export const getAllMutasiHistoryByDivisi = {
  type: GET_ALL_MUTASI_HISTORY_BY_DIVISI,
};
export const setDataMutasiHistoryByDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_MUTASI_HISTORY_BY_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataMutasiHistoryByDivisiFailed = ({ error }) => ({
  type: SET_DATA_MUTASI_HISTORY_BY_DIVISI_FAILED,
  payload: { data: error },
});

export const getDivisi = ({ divisi }) => ({
  type: SET_DIVISI,
  payload: { data: divisi },
});
