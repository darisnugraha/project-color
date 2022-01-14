import get from "../../../axios/get";
import word from "../../../shared/static";

const POMasuk = {
  getAllPOMasuk: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_PO_MASUK +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&type=" +
        params.type,
    });
    return response;
  },
};

export default POMasuk;
