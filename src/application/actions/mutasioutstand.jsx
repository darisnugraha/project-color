export const GET_ALL_MUTASI_OUTSTAND_BY_DIVISI =
  "[mutasioutstand] get all mutasi outstand by divisi";
export const SET_DATA_MUTASI_OUTSTAND_BY_DIVISI_SUCCESS =
  "[mutasioutstand] get all mutasi outstand by divisi success";
export const SET_DATA_MUTASI_OUTSTAND_BY_DIVISI_FAILED =
  "[mutasioutstand] get all mutasi outstand by divisi failed";
export const SET_DIVISI = "[mutasioutstand] set divisi";

export const getAllMutasiOutstandByDivisi = {
  type: GET_ALL_MUTASI_OUTSTAND_BY_DIVISI,
};
export const setDataMutasiOutstandByDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_MUTASI_OUTSTAND_BY_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataMutasiOutstandByDivisiFailed = ({ error }) => ({
  type: SET_DATA_MUTASI_OUTSTAND_BY_DIVISI_FAILED,
  payload: { data: error },
});

export const getDivisi = ({ divisi }) => ({
  type: SET_DIVISI,
  payload: { data: divisi },
});
