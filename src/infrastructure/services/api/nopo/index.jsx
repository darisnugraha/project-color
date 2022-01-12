import get from "../../../axios/get";
import word from "../../../shared/static";

const NoPO = {
  getAllNoPO: async (params) => {
    const response = await get({
      url:
        word.URL_GET_ALL_NO_PO +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&customer=" +
        params.customer,
    });
    return response;
  },
  getAllNoPOReparasi: async (params) => {
    const response = await get({
      url:
        word.URL_GET_ALL_NO_PO_REPARASI +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&customer=" +
        params.customer,
    });
    return response;
  },
};

export default NoPO;
