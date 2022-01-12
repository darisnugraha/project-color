export const GET_ALL_REPARASI_KELUAR =
  "[reparasikeluar] get all reparasi keluar";
export const SET_DATA_REPARASI_KELUAR_SUCCESS =
  "[reparasikeluar] get all reparasi keluar success";
export const SET_DATA_REPARASI_KELUAR_FAILED =
  "[reparasikeluar] get all reparasi keluar failed";

export const getAllReparasiKeluar = {
  type: GET_ALL_REPARASI_KELUAR,
};
export const setDataReparasiKeluarSuccess = (feedback) => ({
  type: SET_DATA_REPARASI_KELUAR_SUCCESS,
  payload: { data: feedback },
});
export const setDataReparasiKeluarFailed = (error) => ({
  type: SET_DATA_REPARASI_KELUAR_FAILED,
  payload: { data: error },
});
