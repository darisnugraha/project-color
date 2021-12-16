const getAllKirimBarang = (state) => state.kirimbarang.feedback;
const getErrorKirimBarang = (state) => state.kirimbarang.error;
const getIsEditKirimBarang = (state) => state.kirimbarang.isEdit;

const data = {
  getAllKirimBarang,
  getErrorKirimBarang,
  getIsEditKirimBarang,
};

export default data;
