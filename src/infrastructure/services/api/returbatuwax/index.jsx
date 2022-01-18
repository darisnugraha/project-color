import get from "../../../axios/get";
import word from "../../../shared/static";

const ReturBatuWax = {
  getAllReturBatuWax: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_RETUR_BATU_WAX +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&no_job_order=" +
        (params.no_job_order || undefined),
    });
    return response;
  },
};

export default ReturBatuWax;
