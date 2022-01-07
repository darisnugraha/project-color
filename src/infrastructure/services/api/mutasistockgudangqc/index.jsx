import get from "../../../axios/get";
import word from "../../../shared/static";

const MutasiStockGudangQC = {
  getAllMutasiStockGudangQC: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_MUTASI_STOCK_GUDANG_QC +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&bahan=" +
        params.kode_jenis_bahan +
        "&design=" +
        params.design +
        "&no_job_order=" +
        params.no_job_order +
        "&jenis=" +
        params.kode_jenis +
        "&user=" +
        params.user +
        "&type=" +
        params.type +
        "&all=" +
        params.all +
        "&alloy=" +
        params.alloy,
    });
    return response;
  },
};

export default MutasiStockGudangQC;
