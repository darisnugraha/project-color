import get from "../../../axios/get";
import word from "../../../shared/static";

const JenisBahan = {
  getAllJenisBahan: async () => {
    const response = await get({ url: word.URL_GET_ALL_JENIS_BAHAN });
    return response;
  },
};

export default JenisBahan;
