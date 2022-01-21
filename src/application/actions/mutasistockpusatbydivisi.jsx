export const GET_ALL_MUTASI_STOCK_PUSAT_BY_DIVISI =
  "[mutasistockpusatbydivisi] get all mutas stock gudang qc";
export const SET_DATA_MUTASI_STOCK_PUSAT_BY_DIVISI_SUCCESS =
  "[mutasistockpusatbydivisi] get all mutas stock gudang qc success";
export const SET_DATA_MUTASI_STOCK_PUSAT_BY_DIVISI_FAILED =
  "[mutasistockpusatbydivisi] get all mutas stock gudang qc failed";
export const SET_DIVISI = "[mutasistockpusatbydivisi] set divisi";
export const SET_TYPE = "[mutasistockpusatbydivisi] set type";

export const getAllMutasiStockPusatByDivisi = {
  type: GET_ALL_MUTASI_STOCK_PUSAT_BY_DIVISI,
};
export const setDataMutasiStockPusatByDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_MUTASI_STOCK_PUSAT_BY_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataMutasiStockPusatByDivisiFailed = ({ error }) => ({
  type: SET_DATA_MUTASI_STOCK_PUSAT_BY_DIVISI_FAILED,
  payload: { data: error },
});

export const setDivisi = ({ divisi }) => ({
  type: SET_DIVISI,
  payload: { data: divisi },
});

export const setType = ({ type }) => ({
  type: SET_TYPE,
  payload: { data: type },
});
