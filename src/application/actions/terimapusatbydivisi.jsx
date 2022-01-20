export const GET_ALL_TERIMA_PUSAT_BY_DIVISI =
  "[terimapusatbydivisi] get all terima gudang qc";
export const SET_DATA_TERIMA_PUSAT_BY_DIVISI_SUCCESS =
  "[terimapusatbydivisi] get all terima gudang qc success";
export const SET_DATA_TERIMA_PUSAT_BY_DIVISI_FAILED =
  "[terimapusatbydivisi] get all terima gudang qc failed";

export const getAllTerimaPusatByDivisi = {
  type: GET_ALL_TERIMA_PUSAT_BY_DIVISI,
};
export const setDataTerimaPusatByDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_PUSAT_BY_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataTerimaPusatByDivisiFailed = ({ error }) => ({
  type: SET_DATA_TERIMA_PUSAT_BY_DIVISI_FAILED,
  payload: { data: error },
});
