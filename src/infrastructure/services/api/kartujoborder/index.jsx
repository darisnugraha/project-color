import get from "../../../axios/get";
import word from "../../../shared/static";

const KartuJobOrder = {
  getAllKartuJobOrder: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_KARTU_JOB_ORDER +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&all=" +
        params.all +
        "&no_job_order=" +
        (params.no_job_order || "-"),
    });
    return response;
  },
};

export default KartuJobOrder;
