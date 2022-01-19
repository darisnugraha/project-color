const getAllKirimBahanAdmin = (state) => state.kirimbahanadmin.feedback;
const getErrorKirimBahanAdmin = (state) => state.kirimbahanadmin.error;
const getIsEditKirimBahanAdmin = (state) => state.kirimbahanadmin.isEdit;

const data = {
  getAllKirimBahanAdmin,
  getErrorKirimBahanAdmin,
  getIsEditKirimBahanAdmin,
};

export default data;
