export const GET_ALL_AMBIL_BATU = "[ambilbatu] get all ambil batu";
export const SET_DATA_AMBIL_BATU_SUCCESS =
  "[ambilbatu] get all ambil batu success";
export const SET_DATA_AMBIL_BATU_FAILED =
  "[ambilbatu] get all ambil batu failed";

export const getAllAmbilBatu = {
  type: GET_ALL_AMBIL_BATU,
};
export const setDataAmbilBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_AMBIL_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataAmbilBatuFailed = ({ error }) => ({
  type: SET_DATA_AMBIL_BATU_FAILED,
  payload: { data: error },
});
