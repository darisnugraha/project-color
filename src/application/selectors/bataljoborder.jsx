const getAllBatalJobOrder = (state) => state.bataljoborder.feedback;
const getErrorBatalJobOrder = (state) => state.bataljoborder.error;
const getIsEditBatalJobOrder = (state) => state.bataljoborder.isEdit;

const data = {
  getAllBatalJobOrder,
  getErrorBatalJobOrder,
  getIsEditBatalJobOrder,
};

export default data;
