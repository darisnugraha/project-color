export const GET_ALL_KIRIM_PUSAT_BY_DIVISI =
  "[kirimpusatbydivisi] get all kirim gudang qc";
export const SET_DATA_KIRIM_PUSAT_BY_DIVISI_SUCCESS =
  "[kirimpusatbydivisi] get all kirim gudang qc success";
export const SET_DATA_KIRIM_PUSAT_BY_DIVISI_FAILED =
  "[kirimpusatbydivisi] get all kirim gudang qc failed";

export const getAllKirimPusatByDivisi = {
  type: GET_ALL_KIRIM_PUSAT_BY_DIVISI,
};
export const setDataKirimPusatByDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_KIRIM_PUSAT_BY_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataKirimPusatByDivisiFailed = ({ error }) => ({
  type: SET_DATA_KIRIM_PUSAT_BY_DIVISI_FAILED,
  payload: { data: error },
});
