const getAllKirimByDivisi = (state) => state.kirimbydivisi.feedback;
const getErrorKirimByDivisi = (state) => state.kirimbydivisi.error;
const getIsEditKirimByDivisi = (state) => state.kirimbydivisi.isEdit;

const data = {
  getAllKirimByDivisi,
  getErrorKirimByDivisi,
  getIsEditKirimByDivisi,
};

export default data;
