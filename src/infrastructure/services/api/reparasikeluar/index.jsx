import get from "../../../axios/get";
import word from "../../../shared/static";

const ReparasiKeluar = {
  getAllReparasiKeluar: async (params) => {
    const response = await get({
      url:
        word.URL_GET_ALL_REPARASI_KELUAR +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&customer=" +
        params.customer +
        "&no_po=" +
        params.no_po,
    });
    return response;
  },
};

export default ReparasiKeluar;
