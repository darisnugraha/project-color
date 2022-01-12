export const GET_ALL_REPARASI_MASUK = "[reparasimasuk] get all reparasi masuk";
export const SET_DATA_REPARASI_MASUK_SUCCESS =
  "[reparasimasuk] get all reparasi masuk success";
export const SET_DATA_REPARASI_MASUK_FAILED =
  "[reparasimasuk] get all reparasi masuk failed";

export const getAllReparasiMasuk = {
  type: GET_ALL_REPARASI_MASUK,
};
export const setDataReparasiMasukSuccess = (feedback) => ({
  type: SET_DATA_REPARASI_MASUK_SUCCESS,
  payload: { data: feedback },
});
export const setDataReparasiMasukFailed = (error) => ({
  type: SET_DATA_REPARASI_MASUK_FAILED,
  payload: { data: error },
});
