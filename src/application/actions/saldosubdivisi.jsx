export const GET_ALL_SALDO_SUB_DIVISI =
  "[saldosubdivisi] get all saldo sub divisi";
export const SET_DATA_SALDO_SUB_DIVISI_SUCCESS =
  "[saldosubdivisi] get all saldo sub divisi success";
export const SET_DATA_SALDO_SUB_DIVISI_FAILED =
  "[saldosubdivisi] get all saldo sub divisi failed";
export const SET_TYPE = "[saldosubdivisi] set type";

export const getAllSaldoSubDivisi = {
  type: GET_ALL_SALDO_SUB_DIVISI,
};
export const setDataSaldoSubDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_SALDO_SUB_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataSaldoSubDivisiFailed = ({ error }) => ({
  type: SET_DATA_SALDO_SUB_DIVISI_FAILED,
  payload: { data: error },
});

export const getType = ({ type }) => ({
  type: SET_TYPE,
  payload: { data: type },
});
