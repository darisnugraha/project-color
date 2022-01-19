export const GET_ALL_KARTU_JOB_ORDER =
  "[kartujoborder] get all kartu job order";
export const SET_DATA_KARTU_JOB_ORDER_SUCCESS =
  "[kartujoborder] get all kartu job order success";
export const SET_DATA_KARTU_JOB_ORDER_FAILED =
  "[kartujoborder] get all kartu job order failed";

export const getAllKartuJobOrder = {
  type: GET_ALL_KARTU_JOB_ORDER,
};
export const setDataKartuJobOrderSuccess = ({ feedback }) => ({
  type: SET_DATA_KARTU_JOB_ORDER_SUCCESS,
  payload: { data: feedback },
});
export const setDataKartuJobOrderFailed = ({ error }) => ({
  type: SET_DATA_KARTU_JOB_ORDER_FAILED,
  payload: { data: error },
});
