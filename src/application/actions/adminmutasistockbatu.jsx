export const GET_ALL_ADMIN_MUTASI_STOCK_BATU =
  "[adminmutasistockbatu] get all admin mutasi stock batu";
export const SET_DATA_ADMIN_MUTASI_STOCK_BATU_SUCCESS =
  "[adminmutasistockbatu] get all admin mutasi stock batu success";
export const SET_DATA_ADMIN_MUTASI_STOCK_BATU_FAILED =
  "[adminmutasistockbatu] get all admin mutasi stock batu failed";

export const getAllAdminMutasiStockBatu = {
  type: GET_ALL_ADMIN_MUTASI_STOCK_BATU,
};
export const setDataAdminMutasiStockBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_ADMIN_MUTASI_STOCK_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataAdminMutasiStockBatuFailed = ({ error }) => ({
  type: SET_DATA_ADMIN_MUTASI_STOCK_BATU_FAILED,
  payload: { data: error },
});
