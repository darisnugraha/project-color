const getAllBatu = (state) => state.batu.feedback;
const getErrorBatu = (state) => state.batu.error;
const getIsEditBatu = (state) => state.batu.isEdit;
const data = { getAllBatu, getErrorBatu, getIsEditBatu };
export default data;
