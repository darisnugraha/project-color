export const GET_ALL_KIRIM_PLATTING =
  "[kirimplatting] get all kirim platting";
export const SET_DATA_KIRIM_PLATTING_SUCCESS =
  "[kirimplatting] get all kirim platting success";
export const SET_DATA_KIRIM_PLATTING_FAILED =
  "[kirimplatting] get all kirim platting failed";

export const getAllKirimPlatting = {
  type: GET_ALL_KIRIM_PLATTING,
};
export const setDataKirimPlattingSuccess = ({ feedback }) => ({
  type: SET_DATA_KIRIM_PLATTING_SUCCESS,
  payload: { data: feedback },
});
export const setDataKirimPlattingFailed = ({ error }) => ({
  type: SET_DATA_KIRIM_PLATTING_FAILED,
  payload: { data: error },
});
