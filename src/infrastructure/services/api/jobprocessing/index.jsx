import get from "../../../axios/get";
import word from "../../../shared/static";

const JobProcessing = {
  getAllJobProcessing: async (params) => {
    const response = await get({
      url:
        word.URL_GET_ALL_JOB_PROCESSING +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&customer=" +
        params.customer +
        "&no_po=" +
        params.no_po +
        "&proses=" +
        params.proses +
        "&type=" +
        params.type,
    });
    return response;
  },
};

export default JobProcessing;
