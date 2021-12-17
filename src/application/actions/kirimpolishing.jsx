export const GET_ALL_KIRIM_POLISHING =
  "[kirimpolishing] get all kirim polishing";
export const SET_DATA_KIRIM_POLISHING_SUCCESS =
  "[kirimpolishing] get all kirim polishing success";
export const SET_DATA_KIRIM_POLISHING_FAILED =
  "[kirimpolishing] get all kirim polishing failed";

export const getAllKirimPolishing = {
  type: GET_ALL_KIRIM_POLISHING,
};
export const setDataKirimPolishingSuccess = ({ feedback }) => ({
  type: SET_DATA_KIRIM_POLISHING_SUCCESS,
  payload: { data: feedback },
});
export const setDataKirimPolishingFailed = ({ error }) => ({
  type: SET_DATA_KIRIM_POLISHING_FAILED,
  payload: { data: error },
});
