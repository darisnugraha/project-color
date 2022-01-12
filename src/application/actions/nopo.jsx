export const GET_ALL_NO_PO = "[nopo] get all no po";
export const SET_DATA_NO_PO_SUCCESS = "[nopo] get all no po success";
export const SET_DATA_NO_PO_FAILED = "[nopo] get all no po failed";

export const getAllNoPO = {
  type: GET_ALL_NO_PO,
};
export const setDataNoPOSuccess = (feedback) => ({
  type: SET_DATA_NO_PO_SUCCESS,
  payload: { data: feedback },
});
export const setDataNoPOFailed = (error) => ({
  type: SET_DATA_NO_PO_FAILED,
  payload: { data: error },
});

export const GET_ALL_NO_PO_REPARASI = "[nopo] get all no po reparasi";
export const SET_DATA_NO_PO_REPARASI_SUCCESS =
  "[nopo] get all no po reparasi success";
export const SET_DATA_NO_PO_REPARASI_FAILED =
  "[nopo] get all no po reparasi failed";

export const getAllNoPOReparasi = {
  type: GET_ALL_NO_PO_REPARASI,
};
export const setDataNoPOReparasiSuccess = (feedback) => ({
  type: SET_DATA_NO_PO_REPARASI_SUCCESS,
  payload: { data: feedback },
});
export const setDataNoPOReparasiFailed = (error) => ({
  type: SET_DATA_NO_PO_REPARASI_FAILED,
  payload: { data: error },
});
