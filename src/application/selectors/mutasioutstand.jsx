const getAllMutasiOutstand = (state) => state.mutasioutstand.feedback;
const getErrorMutasiOutstand = (state) => state.mutasioutstand.error;
const getIsEditMutasiOutstand = (state) => state.mutasioutstand.isEdit;
const getDivisi = (state) => state.mutasioutstand.divisi;

const data = {
  getAllMutasiOutstand,
  getErrorMutasiOutstand,
  getIsEditMutasiOutstand,
  getDivisi,
};

export default data;
