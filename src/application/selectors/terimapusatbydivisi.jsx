const getAllTerimaPusatByDivisi = (state) => state.terimapusatbydivisi.feedback;
const getErrorTerimaPusatByDivisi = (state) => state.terimapusatbydivisi.error;
const getIsEditTerimaPusatByDivisi = (state) =>
  state.terimapusatbydivisi.isEdit;

const data = {
  getAllTerimaPusatByDivisi,
  getErrorTerimaPusatByDivisi,
  getIsEditTerimaPusatByDivisi,
};

export default data;
