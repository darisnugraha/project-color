export const GET_ALL_CUSTOMER = "[customer] get all customer";
export const SET_DATA_CUSTOMER_SUCCESS = "[customer] get all customer success";
export const SET_DATA_CUSTOMER_FAILED = "[customer] get all customer failed";

export const getAllCustomer = {
  type: GET_ALL_CUSTOMER,
};
export const setDataCustomerSuccess = (feedback) => ({
  type: SET_DATA_CUSTOMER_SUCCESS,
  payload: { data: feedback },
});
export const setDataCustomerFailed = (error) => ({
  type: SET_DATA_CUSTOMER_FAILED,
  payload: { data: error },
});
