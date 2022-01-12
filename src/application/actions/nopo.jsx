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

export const GET_ALL_NO_PO_JP = "[nopo] get all no po jp";
export const SET_DATA_NO_PO_JP_SUCCESS = "[nopo] get all no po jp success";
export const SET_DATA_NO_PO_JP_FAILED = "[nopo] get all no po jp failed";

export const getAllNoPOJP = {
  type: GET_ALL_NO_PO_JP,
};
export const setDataNoPOJPSuccess = (feedback) => ({
  type: SET_DATA_NO_PO_JP_SUCCESS,
  payload: { data: feedback },
});
export const setDataNoPOJPFailed = (error) => ({
  type: SET_DATA_NO_PO_JP_FAILED,
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

export const GET_ALL_NO_PO_REPARASI_RK = "[nopo] get all no po reparasi rk";
export const SET_DATA_NO_PO_REPARASI_RK_SUCCESS =
  "[nopo] get all no po reparasi rk success";
export const SET_DATA_NO_PO_REPARASI_RK_FAILED =
  "[nopo] get all no po reparasi rk failed";

export const getAllNoPOReparasiRK = {
  type: GET_ALL_NO_PO_REPARASI_RK,
};
export const setDataNoPOReparasiRKSuccess = (feedback) => ({
  type: SET_DATA_NO_PO_REPARASI_RK_SUCCESS,
  payload: { data: feedback },
});
export const setDataNoPOReparasiRKFailed = (error) => ({
  type: SET_DATA_NO_PO_REPARASI_RK_FAILED,
  payload: { data: error },
});
