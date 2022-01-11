const getAllJobProcessing = (state) => state.jobprocessing.feedback;
const getErrorJobProcessing = (state) => state.jobprocessing.error;
const getIsEditJobProcessing = (state) => state.jobprocessing.isEdit;
const getTypeJobProcessing = (state) => state.jobprocessing.type;
const data = {
  getAllJobProcessing,
  getErrorJobProcessing,
  getIsEditJobProcessing,
  getTypeJobProcessing,
};
export default data;
