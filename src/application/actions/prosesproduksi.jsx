export const GET_ALL_PROSES_PRODUKSI =
  "[prosesproduksi] get all proses produksi";
export const SET_DATA_PROSES_PRODUKSI_SUCCESS =
  "[prosesproduksi] get all proses produksi success";
export const SET_DATA_PROSES_PRODUKSI_FAILED =
  "[prosesproduksi] get all proses produksi failed";
export const SET_TYPE = "[prosesproduksi] set type";

export const getAllProsesProduksi = {
  type: GET_ALL_PROSES_PRODUKSI,
};
export const setDataProsesProduksiSuccess = ({ feedback }) => ({
  type: SET_DATA_PROSES_PRODUKSI_SUCCESS,
  payload: { data: feedback },
});
export const setDataProsesProduksiFailed = ({ error }) => ({
  type: SET_DATA_PROSES_PRODUKSI_FAILED,
  payload: { data: error },
});

export const setType = ({ type }) => ({
  type: SET_TYPE,
  payload: { data: type },
});
