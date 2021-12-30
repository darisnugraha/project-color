const getAllTerimaBatu = (state) => state.terimabatubydivisi.feedback;
const getErrorTerimaBatu = (state) => state.terimabatubydivisi.error;
const getIsEditTerimaBatu = (state) => state.terimabatubydivisi.isEdit;
const getDivisi = (state) => state.terimabatubydivisi.divisi;

const data = {
  getAllTerimaBatu,
  getErrorTerimaBatu,
  getIsEditTerimaBatu,
  getDivisi,
};

export default data;
