const getAllInputDraftPO = (state) => state.inputdraftpo.feedback;
const getErrorInputDraftPO = (state) => state.inputdraftpo.error;
const getIsEditInputDraftPO = (state) => state.inputdraftpo.isEdit;
const getTypeInputDraftPO = (state) => state.inputdraftpo.type;
const data = {
  getAllInputDraftPO,
  getErrorInputDraftPO,
  getIsEditInputDraftPO,
  getTypeInputDraftPO,
};
export default data;
