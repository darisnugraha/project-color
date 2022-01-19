import get from "../../../axios/get";
import word from "../../../shared/static";

const MutasiStockCasting = {
  getAllMutasiStockCasting: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_MUTASI_STOCK_CASTING +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&all=" +
        params.all +
        "&user=" +
        params.user +
        "&bahan=" +
        params.kode_jenis_bahan +
        "&no_job_order=" +
        (params.no_job_order || undefined),
    });
    return response;
  },
};

export default MutasiStockCasting;
