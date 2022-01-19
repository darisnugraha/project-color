export const GET_ALL_KIRIM_BAHAN_ADMIN =
  "[kirimbahanadmin] get all kirim bahan admin";
export const SET_DATA_KIRIM_BAHAN_ADMIN_SUCCESS =
  "[kirimbahanadmin] get all kirim bahan admin success";
export const SET_DATA_KIRIM_BAHAN_ADMIN_FAILED =
  "[kirimbahanadmin] get all kirim bahan admin failed";

export const getAllKirimBahanAdmin = {
  type: GET_ALL_KIRIM_BAHAN_ADMIN,
};
export const setDataKirimBahanAdminSuccess = ({ feedback }) => ({
  type: SET_DATA_KIRIM_BAHAN_ADMIN_SUCCESS,
  payload: { data: feedback },
});
export const setDataKirimBahanAdminFailed = ({ error }) => ({
  type: SET_DATA_KIRIM_BAHAN_ADMIN_FAILED,
  payload: { data: error },
});
