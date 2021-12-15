const getAllKirimBarangProduksi = (state) => state.kirimbarangproduksi.feedback;
const getErrorKirimBarangProduksi = (state) => state.kirimbarangproduksi.error;
const getIsEditKirimBarangProduksi = (state) => state.kirimbarangproduksi.isEdit;

const data = {
  getAllKirimBarangProduksi,
  getErrorKirimBarangProduksi,
  getIsEditKirimBarangProduksi,
};

export default data;
