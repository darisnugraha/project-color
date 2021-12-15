const getAllKirimCasting = (state) => state.kirimcasting.feedback;
const getErrorKirimCasting = (state) => state.kirimcasting.error;
const getIsEditKirimCasting = (state) => state.kirimcasting.isEdit;

const data = {
  getAllKirimCasting,
  getErrorKirimCasting,
  getIsEditKirimCasting,
};

export default data;
