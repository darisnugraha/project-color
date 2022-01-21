export const GET_ALL_ADMIN_KIRIM_BATU =
  "[adminkirimbatu] get all admin kirim batu";
export const SET_DATA_ADMIN_KIRIM_BATU_SUCCESS =
  "[adminkirimbatu] get all admin kirim batu success";
export const SET_DATA_ADMIN_KIRIM_BATU_FAILED =
  "[adminkirimbatu] get all admin kirim batu failed";

export const getAllAdminKirimBatu = {
  type: GET_ALL_ADMIN_KIRIM_BATU,
};
export const setDataAdminKirimBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_ADMIN_KIRIM_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataAdminKirimBatuFailed = ({ error }) => ({
  type: SET_DATA_ADMIN_KIRIM_BATU_FAILED,
  payload: { data: error },
});
