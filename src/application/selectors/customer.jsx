const getAllCustomer = (state) => state.customer.feedback;
const getErrorCustomer = (state) => state.customer.error;
const getIsEditCustomer = (state) => state.customer.isEdit;
const data = { getAllCustomer, getErrorCustomer, getIsEditCustomer };
export default data;
