export const GET_ALL_BATAL_JOB_ORDER =
  "[bataljoborder] get all batal job order";
export const SET_DATA_BATAL_JOB_ORDER_SUCCESS =
  "[bataljoborder] get all batal job order success";
export const SET_DATA_BATAL_JOB_ORDER_FAILED =
  "[bataljoborder] get all batal job order failed";

export const getAllBatalJobOrder = {
  type: GET_ALL_BATAL_JOB_ORDER,
};
export const setDataBatalJobOrderSuccess = ({ feedback }) => ({
  type: SET_DATA_BATAL_JOB_ORDER_SUCCESS,
  payload: { data: feedback },
});
export const setDataBatalJobOrderFailed = ({ error }) => ({
  type: SET_DATA_BATAL_JOB_ORDER_FAILED,
  payload: { data: error },
});
