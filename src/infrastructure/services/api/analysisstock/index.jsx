import get from "../../../axios/get";
import word from "../../../shared/static";

const AnalysisStock = {
  getAllAnalysisStock: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_ANALYSIS_STOCK_BY_DIVISI +
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
        "&no_job_order=" +
        params.no_job_order +
        "&all=" +
        params.all,
    });
    return response;
  },
};

export default AnalysisStock;
