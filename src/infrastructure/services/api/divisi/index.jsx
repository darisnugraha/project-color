import get from "../../../axios/get";
import word from "../../../shared/static";

const Divisi = {
  getAllDivisi: async () => {
    const response = await get({ url: word.URL_GET_ALL_DIVISI });
    return response;
  },
};

export default Divisi;
