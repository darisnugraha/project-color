const getAllTerimaBarang = (state) => state.terimabarang.feedback;
const getErrorTerimaBarang = (state) => state.terimabarang.error;
const getIsEditTerimaBarang = (state) => state.terimabarang.isEdit;

const data = {
  getAllTerimaBarang,
  getErrorTerimaBarang,
  getIsEditTerimaBarang,
};

export default data;
