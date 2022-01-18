export const GET_ALL_TAMBAH_BATU = "[tambahbatu] get all tambah batu";
export const SET_DATA_TAMBAH_BATU_SUCCESS =
  "[tambahbatu] get all tambah batu success";
export const SET_DATA_TAMBAH_BATU_FAILED =
  "[tambahbatu] get all tambah batu failed";

export const getAllTambahBatu = {
  type: GET_ALL_TAMBAH_BATU,
};
export const setDataTambahBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_TAMBAH_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataTambahBatuFailed = ({ error }) => ({
  type: SET_DATA_TAMBAH_BATU_FAILED,
  payload: { data: error },
});
