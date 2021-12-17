const getAllKirimPlatting = (state) => state.kirimplatting.feedback;
const getErrorKirimPlatting = (state) => state.kirimplatting.error;
const getIsEditKirimPlatting = (state) => state.kirimplatting.isEdit;

const data = {
  getAllKirimPlatting,
  getErrorKirimPlatting,
  getIsEditKirimPlatting,
};

export default data;
