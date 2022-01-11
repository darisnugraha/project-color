export const GET_ALL_INPUT_DRAFT_PO = "[inputdraftpo] get all input draft po";
export const SET_DATA_INPUT_DRAFT_PO_SUCCESS =
  "[inputdraftpo] get all input draft po success";
export const SET_DATA_INPUT_DRAFT_PO_FAILED =
  "[inputdraftpo] get all input draft po failed";
export const SET_TYPE = "[inputdraftpo] set type";

export const getAllInputDraftPO = {
  type: GET_ALL_INPUT_DRAFT_PO,
};
export const setDataInputDraftPOSuccess = (feedback) => ({
  type: SET_DATA_INPUT_DRAFT_PO_SUCCESS,
  payload: { data: feedback },
});
export const setDataInputDraftPOFailed = (error) => ({
  type: SET_DATA_INPUT_DRAFT_PO_FAILED,
  payload: { data: error },
});

export const setType = ({ type }) => ({
  type: SET_TYPE,
  payload: { data: type },
});
