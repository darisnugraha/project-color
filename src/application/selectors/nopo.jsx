const getAllNoPO = (state) => state.nopo.feedback;
const getAllNoPOReparasi = (state) => state.nopo.feedbackReparasi;
const getErrorNoPO = (state) => state.nopo.error;
const getIsEditNoPO = (state) => state.nopo.isEdit;
const data = { getAllNoPO, getErrorNoPO, getIsEditNoPO, getAllNoPOReparasi };
export default data;
