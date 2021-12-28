const getAllMutasiSaldo = (state) => state.mutasisaldo.feedback;
const getErrorMutasiSaldo = (state) => state.mutasisaldo.error;
const getIsEditMutasiSaldo = (state) => state.mutasisaldo.isEdit;
const getDivisi = (state) => state.mutasisaldo.divisi;

const data = {
  getAllMutasiSaldo,
  getErrorMutasiSaldo,
  getIsEditMutasiSaldo,
  getDivisi,
};

export default data;
