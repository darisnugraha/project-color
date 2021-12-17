export const GET_ALL_DIVISI = "[divisi] get all divisi";
export const SET_DATA_DIVISI_SUCCESS = "[divisi] get all divisi success";
export const SET_DATA_DIVISI_FAILED = "[divisi] get all divisi failed";

export const getAllDivisi = {
  type: GET_ALL_DIVISI,
};
export const setDataDivisiSuccess = (feedback) => ({
  type: SET_DATA_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataDivisiFailed = (error) => ({
  type: SET_DATA_DIVISI_FAILED,
  payload: { data: error },
});
