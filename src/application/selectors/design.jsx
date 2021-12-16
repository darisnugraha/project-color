const getAllDesign = (state) => state.design.feedback;
const getErrorDesign = (state) => state.design.error;
const getIsEditDesign = (state) => state.design.isEdit;
const data = { getAllDesign, getErrorDesign, getIsEditDesign };
export default data;
