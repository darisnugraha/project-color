export const GET_ALL_JOB_PROCESSING = "[jobprocessing] get all job processing";
export const SET_DATA_JOB_PROCESSING_SUCCESS =
  "[jobprocessing] get all job processing success";
export const SET_DATA_JOB_PROCESSING_FAILED =
  "[jobprocessing] get all job processing failed";
export const SET_TYPE = "[jobprocessing] set type";

export const getAllJobProcessing = {
  type: GET_ALL_JOB_PROCESSING,
};
export const setDataJobProcessingSuccess = (feedback) => ({
  type: SET_DATA_JOB_PROCESSING_SUCCESS,
  payload: { data: feedback },
});
export const setDataJobProcessingFailed = (error) => ({
  type: SET_DATA_JOB_PROCESSING_FAILED,
  payload: { data: error },
});

export const setType = ({ type }) => ({
  type: SET_TYPE,
  payload: { data: type },
});
