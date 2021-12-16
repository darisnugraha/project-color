const getAllTerimaBarangProduksi = (state) => state.terimabarangproduksi.feedback;
const getErrorTerimaBarangProduksi = (state) => state.terimabarangproduksi.error;
const getIsEditTerimaBarangProduksi = (state) => state.terimabarangproduksi.isEdit;

const data = {
  getAllTerimaBarangProduksi,
  getErrorTerimaBarangProduksi,
  getIsEditTerimaBarangProduksi,
};

export default data;
