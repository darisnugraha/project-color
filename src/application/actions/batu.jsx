export const GET_ALL_BATU = "[batu] get all batu";
export const SET_DATA_BATU_SUCCESS = "[batu] get all batu success";
export const SET_DATA_BATU_FAILED = "[batu] get all batu failed";

export const getAllBatu = {
  type: GET_ALL_BATU,
};
export const setDataBatuSuccess = (feedback) => ({
  type: SET_DATA_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataBatuFailed = (error) => ({
  type: SET_DATA_BATU_FAILED,
  payload: { data: error },
});
