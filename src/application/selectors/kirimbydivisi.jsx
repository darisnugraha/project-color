const getAllKirimByDivisi = (state) => state.kirimbydivisi.feedback;
const getErrorKirimByDivisi = (state) => state.kirimbydivisi.error;
const getIsEditKirimByDivisi = (state) => state.kirimbydivisi.isEdit;
const getDivisi = (state) => state.kirimbydivisi.divisi;

const data = {
  getAllKirimByDivisi,
  getErrorKirimByDivisi,
  getIsEditKirimByDivisi,
  getDivisi,
};

export default data;
