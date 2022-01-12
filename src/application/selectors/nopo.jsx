const getAllNoPO = (state) => state.nopo.feedback;
const getAllNoPOJP = (state) => state.nopo.feedbackJP;
const getAllNoPOReparasi = (state) => state.nopo.feedbackReparasi;
const getAllNoPOReparasiRK = (state) => state.nopo.feedbackReparasiRK;
const getErrorNoPO = (state) => state.nopo.error;
const getIsEditNoPO = (state) => state.nopo.isEdit;
const data = {
  getAllNoPO,
  getAllNoPOJP,
  getErrorNoPO,
  getIsEditNoPO,
  getAllNoPOReparasi,
  getAllNoPOReparasiRK,
};
export default data;
