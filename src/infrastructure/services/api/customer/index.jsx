import get from "../../../axios/get";
import word from "../../../shared/static";

const Customer = {
  getAllCustomer: async () => {
    const response = await get({ url: word.URL_GET_ALL_CUSTOMER });
    return response;
  },
};

export default Customer;
