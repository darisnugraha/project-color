export const GET_ALL_RETUR_BATU = "[returbatu] get all retur batu ";
export const SET_DATA_RETUR_BATU_SUCCESS =
  "[returbatu] get all retur batu  success";
export const SET_DATA_RETUR_BATU_FAILED =
  "[returbatu] get all retur batu  failed";

export const getAllReturBatu = {
  type: GET_ALL_RETUR_BATU,
};
export const setDataReturBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_RETUR_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataReturBatuFailed = ({ error }) => ({
  type: SET_DATA_RETUR_BATU_FAILED,
  payload: { data: error },
});
