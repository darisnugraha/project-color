import get from "../../../axios/get";
import word from "../../../shared/static";

const ProsesProduksi = {
  getAllProsesProduksi: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_PROSES_PRODUKSI +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&all=" +
        params.all +
        "&type=" +
        params.type,
    });
    return response;
  },
};

export default ProsesProduksi;
