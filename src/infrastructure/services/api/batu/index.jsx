import get from "../../../axios/get";
import word from "../../../shared/static";

const Batu = {
  getAllBatu: async () => {
    const response = await get({ url: word.URL_GET_ALL_BATU });
    return response;
  },
};

export default Batu;
