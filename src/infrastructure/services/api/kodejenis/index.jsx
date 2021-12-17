import get from "../../../axios/get";
import word from "../../../shared/static";

const KodeJenis = {
  getAllKodeJenis: async () => {
    const response = await get({ url: word.URL_GET_ALL_KODE_JENIS });
    return response;
  },
};

export default KodeJenis;
