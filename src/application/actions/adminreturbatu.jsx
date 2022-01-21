export const GET_ALL_ADMIN_RETUR_BATU =
  "[adminreturbatu] get all admin retur batu";
export const SET_DATA_ADMIN_RETUR_BATU_SUCCESS =
  "[adminreturbatu] get all admin retur batu success";
export const SET_DATA_ADMIN_RETUR_BATU_FAILED =
  "[adminreturbatu] get all admin retur batu failed";

export const getAllAdminReturBatu = {
  type: GET_ALL_ADMIN_RETUR_BATU,
};
export const setDataAdminReturBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_ADMIN_RETUR_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataAdminReturBatuFailed = ({ error }) => ({
  type: SET_DATA_ADMIN_RETUR_BATU_FAILED,
  payload: { data: error },
});
