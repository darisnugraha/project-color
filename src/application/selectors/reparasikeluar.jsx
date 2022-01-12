const getAllReparasiKeluar = (state) => state.reparasikeluar.feedback;
const getErrorReparasiKeluar = (state) => state.reparasikeluar.error;
const getIsEditReparasiKeluar = (state) => state.reparasikeluar.isEdit;

const data = {
  getAllReparasiKeluar,
  getErrorReparasiKeluar,
  getIsEditReparasiKeluar,
};

export default data;
