import get from "../../../axios/get";
import word from "../../../shared/static";

const ReturBatu = {
  getAllReturBatu: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_RETUR_BATU +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&batu=" +
        params.kode_batu +
        "&no_job_order=" +
        (params.no_job_order || undefined),
    });
    return response;
  },
};

export default ReturBatu;
