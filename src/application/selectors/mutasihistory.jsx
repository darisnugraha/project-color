const getAllMutasiHistory = (state) => state.mutasihistory.feedback;
const getErrorMutasiHistory = (state) => state.mutasihistory.error;
const getIsEditMutasiHistory = (state) => state.mutasihistory.isEdit;
const getDivisi = (state) => state.mutasihistory.divisi;

const data = {
  getAllMutasiHistory,
  getErrorMutasiHistory,
  getIsEditMutasiHistory,
  getDivisi,
};

export default data;
