const getAllKirimPolishing = (state) => state.kirimpolishing.feedback;
const getErrorKirimPolishing = (state) => state.kirimpolishing.error;
const getIsEditKirimPolishing = (state) => state.kirimpolishing.isEdit;

const data = {
  getAllKirimPolishing,
  getErrorKirimPolishing,
  getIsEditKirimPolishing,
};

export default data;
