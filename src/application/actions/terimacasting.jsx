export const GET_ALL_TERIMA_CASTING = "[terimacasting] get all terima casting";
export const SET_DATA_TERIMA_CASTING_SUCCESS =
  "[terimacasting] get all terima casting success";
export const SET_DATA_TERIMA_CASTING_FAILED =
  "[terimacasting] get all terima casting failed";

export const getAllTerimaCasting = {
  type: GET_ALL_TERIMA_CASTING,
};
export const setDataTerimaCastingSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_CASTING_SUCCESS,
  payload: { data: feedback },
});
export const setDataTerimaCastingFailed = ({ error }) => ({
  type: SET_DATA_TERIMA_CASTING_FAILED,
  payload: { data: error },
});
