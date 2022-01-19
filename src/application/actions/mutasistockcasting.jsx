export const GET_ALL_MUTASI_STOCK_CASTING =
  "[mutasistockcasting] get all mutasi stock casting";
export const SET_DATA_MUTASI_STOCK_CASTING_SUCCESS =
  "[mutasistockcasting] get all mutasi stock casting success";
export const SET_DATA_MUTASI_STOCK_CASTING_FAILED =
  "[mutasistockcasting] get all mutasi stock casting failed";

export const getAllMutasiStockCasting = {
  type: GET_ALL_MUTASI_STOCK_CASTING,
};
export const setDataMutasiStockCastingSuccess = ({ feedback }) => ({
  type: SET_DATA_MUTASI_STOCK_CASTING_SUCCESS,
  payload: { data: feedback },
});
export const setDataMutasiStockCastingFailed = ({ error }) => ({
  type: SET_DATA_MUTASI_STOCK_CASTING_FAILED,
  payload: { data: error },
});
