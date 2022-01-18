export const GET_ALL_SALDO_STOCK_BATU =
  "[saldostockbatu] get all saldo stock batu ";
export const SET_DATA_SALDO_STOCK_BATU_SUCCESS =
  "[saldostockbatu] get all saldo stock batu  success";
export const SET_DATA_SALDO_STOCK_BATU_FAILED =
  "[saldostockbatu] get all saldo stock batu  failed";

export const getAllSaldoStockBatu = {
  type: GET_ALL_SALDO_STOCK_BATU,
};
export const setDataSaldoStockBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_SALDO_STOCK_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataSaldoStockBatuFailed = ({ error }) => ({
  type: SET_DATA_SALDO_STOCK_BATU_FAILED,
  payload: { data: error },
});
