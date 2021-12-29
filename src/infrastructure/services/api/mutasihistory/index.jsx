import get from "../../../axios/get";
import word from "../../../shared/static";

const MutasiHistory = {
  getAllMutasiHistory: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_MUTASI_HISTORY_BY_DIVISI +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&divisi=" +
        params.divisi +
        "&bahan=" +
        params.bahan +
        "&user=" +
        params.user +
        "&jenis=" +
        params.jenis +
        "&no_job_order=" +
        params.no_job_order +
        "&reparasi=" +
        params.reparasi +
        "&all=" +
        params.all +
        "&alloy=" +
        params.alloy,
    });
    return response;
  },
};

export default MutasiHistory;
