import get from "../../../axios/get";
import word from "../../../shared/static";

const Design = {
  getAllDesign: async () => {
    const response = await get({ url: word.URL_GET_ALL_DESIGN });
    return response;
  },
};

export default Design;
