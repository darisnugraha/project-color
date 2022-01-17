const getAllProsesProduksi = (state) => state.prosesproduksi.feedback;
const getErrorProsesProduksi = (state) => state.prosesproduksi.error;
const getIsEditProsesProduksi = (state) => state.prosesproduksi.isEdit;
const getTypeProsesProduksi = (state) => state.prosesproduksi.type;

const data = {
  getAllProsesProduksi,
  getErrorProsesProduksi,
  getIsEditProsesProduksi,
  getTypeProsesProduksi,
};

export default data;
