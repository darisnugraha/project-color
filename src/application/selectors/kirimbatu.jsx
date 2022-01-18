const getAllKirimBatu = (state) => state.kirimbatu.feedback;
const getErrorKirimBatu = (state) => state.kirimbatu.error;
const getIsEditKirimBatu = (state) => state.kirimbatu.isEdit;

const data = {
  getAllKirimBatu,
  getErrorKirimBatu,
  getIsEditKirimBatu,
};

export default data;
