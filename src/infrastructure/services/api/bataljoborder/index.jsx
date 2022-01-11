import get from "../../../axios/get";
import word from "../../../shared/static";

const BatalJobOrder = {
  getAllBatalJobOrder: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_BATAL_JOB_ORDER +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&no_job_order=" +
        (params.no_job_order || "SEMUA"),
    });
    return response;
  },
};

export default BatalJobOrder;
