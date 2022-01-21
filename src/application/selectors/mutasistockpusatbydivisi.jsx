const getAllMutasiStockPusatByDivisi = (state) =>
  state.mutasistockpusatbydivisi.feedback;
const getErrorMutasiStockPusatByDivisi = (state) =>
  state.mutasistockpusatbydivisi.error;
const getIsEditMutasiStockPusatByDivisi = (state) =>
  state.mutasistockpusatbydivisi.isEdit;
const getDivisiMutasiStockPusatByDivisi = (state) =>
  state.mutasistockpusatbydivisi.divisi;

const data = {
  getAllMutasiStockPusatByDivisi,
  getErrorMutasiStockPusatByDivisi,
  getIsEditMutasiStockPusatByDivisi,
  getDivisiMutasiStockPusatByDivisi,
};

export default data;
