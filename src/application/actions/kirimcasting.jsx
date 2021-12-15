export const GET_ALL_KIRIM_CASTING = "[kirimcasting] get all kirim casting";
export const SET_DATA_KIRIM_CASTING_SUCCESS =
  "[kirimcasting] get all kirim casting success";
export const SET_DATA_KIRIM_CASTING_FAILED =
  "[kirimcasting] get all kirim casting failed";

export const getAllKirimCasting = {
  type: GET_ALL_KIRIM_CASTING,
};
export const setDataKirimCastingSuccess = ({ feedback }) => ({
  type: SET_DATA_KIRIM_CASTING_SUCCESS,
  payload: { data: feedback },
});
export const setDataKirimCastingFailed = ({ error }) => ({
  type: SET_DATA_KIRIM_CASTING_FAILED,
  payload: { data: error },
});
