const getAllAnalysisStock = (state) => state.analysisstock.feedback;
const getErrorAnalysisStock = (state) => state.analysisstock.error;
const getIsEditAnalysisStock = (state) => state.analysisstock.isEdit;
const getDivisi = (state) => state.analysisstock.divisi;

const data = {
  getAllAnalysisStock,
  getErrorAnalysisStock,
  getIsEditAnalysisStock,
  getDivisi,
};

export default data;
