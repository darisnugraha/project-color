const getAllKartuJobOrder = (state) => state.kartujoborder.feedback;
const getErrorKartuJobOrder = (state) => state.kartujoborder.error;
const getIsEditKartuJobOrder = (state) => state.kartujoborder.isEdit;

const data = {
  getAllKartuJobOrder,
  getErrorKartuJobOrder,
  getIsEditKartuJobOrder,
};

export default data;
