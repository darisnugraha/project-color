const getAllReparasiMasuk = (state) => state.reparasimasuk.feedback;
const getErrorReparasiMasuk = (state) => state.reparasimasuk.error;
const getIsEditReparasiMasuk = (state) => state.reparasimasuk.isEdit;

const data = {
  getAllReparasiMasuk,
  getErrorReparasiMasuk,
  getIsEditReparasiMasuk,
};

export default data;
