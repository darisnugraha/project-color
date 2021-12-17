export const GET_ALL_KODE_JENIS = "[kodejenis] get all kodejenis";
export const SET_DATA_KODE_JENIS_SUCCESS =
  "[kodejenis] get all kodejenis success";
export const SET_DATA_KODE_JENIS_FAILED =
  "[kodejenis] get all kodejenis failed";

export const getAllKodeJenis = {
  type: GET_ALL_KODE_JENIS,
};
export const setDataKodeJenisSuccess = (feedback) => ({
  type: SET_DATA_KODE_JENIS_SUCCESS,
  payload: { data: feedback },
});
export const setDataKodeJenisFailed = (error) => ({
  type: SET_DATA_KODE_JENIS_FAILED,
  payload: { data: error },
});
