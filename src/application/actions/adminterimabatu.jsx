export const GET_ALL_ADMIN_TERIMA_BATU =
  "[adminterimabatu] get all admin terima batu";
export const SET_DATA_ADMIN_TERIMA_BATU_SUCCESS =
  "[adminterimabatu] get all admin terima batu success";
export const SET_DATA_ADMIN_TERIMA_BATU_FAILED =
  "[adminterimabatu] get all admin terima batu failed";

export const getAllAdminTerimaBatu = {
  type: GET_ALL_ADMIN_TERIMA_BATU,
};
export const setDataAdminTerimaBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_ADMIN_TERIMA_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataAdminTerimaBatuFailed = ({ error }) => ({
  type: SET_DATA_ADMIN_TERIMA_BATU_FAILED,
  payload: { data: error },
});
