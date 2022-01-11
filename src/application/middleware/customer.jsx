import {
  GET_ALL_CUSTOMER,
  setDataCustomerSuccess,
  setDataCustomerFailed,
} from "../actions/customer";

const getCustomer =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_CUSTOMER) {
      const response = await api.Customer.getAllCustomer();
      if (response?.value !== null) {
        dispatch(setDataCustomerSuccess(response?.value));
      } else {
        dispatch(setDataCustomerFailed(response?.error));
      }
    }
  };

const data = [getCustomer];

export default data;
