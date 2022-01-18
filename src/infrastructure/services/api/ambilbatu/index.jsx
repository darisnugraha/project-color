import get from "../../../axios/get";
import word from "../../../shared/static";

const AmbilBatu = {
  getAllAmbilBatu: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_AMBIL_BATU +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&alasan=" +
        params.alasan,
    });
    return response;
  },
};

export default AmbilBatu;
