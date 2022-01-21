const getAllAdminKirimBatu = (state) => state.adminkirimbatu.feedback;
const getErrorAdminKirimBatu = (state) => state.adminkirimbatu.error;
const getIsEditAdminKirimBatu = (state) => state.adminkirimbatu.isEdit;

const data = {
  getAllAdminKirimBatu,
  getErrorAdminKirimBatu,
  getIsEditAdminKirimBatu,
};

export default data;
