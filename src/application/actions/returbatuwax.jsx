export const GET_ALL_RETUR_BATU_WAX = "[returbatuwax] get all retur batu wax";
export const SET_DATA_RETUR_BATU_WAX_SUCCESS =
  "[returbatuwax] get all retur batu wax success";
export const SET_DATA_RETUR_BATU_WAX_FAILED =
  "[returbatuwax] get all retur batu wax failed";

export const getAllReturBatuWax = {
  type: GET_ALL_RETUR_BATU_WAX,
};
export const setDataReturBatuWaxSuccess = ({ feedback }) => ({
  type: SET_DATA_RETUR_BATU_WAX_SUCCESS,
  payload: { data: feedback },
});
export const setDataReturBatuWaxFailed = ({ error }) => ({
  type: SET_DATA_RETUR_BATU_WAX_FAILED,
  payload: { data: error },
});
