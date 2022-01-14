const getAllPOMasuk = (state) => state.pomasuk.feedback;
const getErrorPOMasuk = (state) => state.pomasuk.error;
const getIsEditPOMasuk = (state) => state.pomasuk.isEdit;
const getTypePOMasuk = (state) => state.pomasuk.type;

const data = {
  getAllPOMasuk,
  getErrorPOMasuk,
  getIsEditPOMasuk,
  getTypePOMasuk,
};

export default data;
