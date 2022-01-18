export const GET_ALL_KIRIM_BATU = "[kirimbatu] get all kirim batu";
export const SET_DATA_KIRIM_BATU_SUCCESS =
  "[kirimbatu] get all kirim batu success";
export const SET_DATA_KIRIM_BATU_FAILED =
  "[kirimbatu] get all kirim batu failed";

export const getAllKirimBatu = {
  type: GET_ALL_KIRIM_BATU,
};
export const setDataKirimBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_KIRIM_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataKirimBatuFailed = ({ error }) => ({
  type: SET_DATA_KIRIM_BATU_FAILED,
  payload: { data: error },
});
