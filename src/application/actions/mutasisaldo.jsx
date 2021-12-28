export const GET_ALL_MUTASI_SALDO_BY_DIVISI =
  "[mutasisaldo] get all mutasi saldo by divisi";
export const SET_DATA_MUTASI_SALDO_BY_DIVISI_SUCCESS =
  "[mutasisaldo] get all mutasi saldo by divisi success";
export const SET_DATA_MUTASI_SALDO_BY_DIVISI_FAILED =
  "[mutasisaldo] get all mutasi saldo by divisi failed";
export const SET_DIVISI = "[mutasisaldo] set divisi";

export const getAllMutasiSaldoByDivisi = {
  type: GET_ALL_MUTASI_SALDO_BY_DIVISI,
};
export const setDataMutasiSaldoByDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_MUTASI_SALDO_BY_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataMutasiSaldoByDivisiFailed = ({ error }) => ({
  type: SET_DATA_MUTASI_SALDO_BY_DIVISI_FAILED,
  payload: { data: error },
});

export const getDivisi = ({ divisi }) => ({
  type: SET_DIVISI,
  payload: { data: divisi },
});
