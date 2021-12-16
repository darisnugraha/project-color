export const GET_ALL_TAMBAH_JOB_ORDER =
  "[tambahjoborder] get all tambah job order";
export const SET_DATA_TAMBAH_JOB_ORDER_SUCCESS =
  "[tambahjoborder] get all tambah job order success";
export const SET_DATA_TAMBAH_JOB_ORDER_FAILED =
  "[tambahjoborder] get all tambah job order failed";

export const getAllTambahJobOrder = {
  type: GET_ALL_TAMBAH_JOB_ORDER,
};
export const setDataTambahJobOrderSuccess = ({ feedback }) => ({
  type: SET_DATA_TAMBAH_JOB_ORDER_SUCCESS,
  payload: { data: feedback },
});
export const setDataTambahJobOrderFailed = ({ error }) => ({
  type: SET_DATA_TAMBAH_JOB_ORDER_FAILED,
  payload: { data: error },
});
