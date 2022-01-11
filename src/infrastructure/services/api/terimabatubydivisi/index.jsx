import get from "../../../axios/get";
import word from "../../../shared/static";

const TerimaBatu = {
  getAllTerimaBatu: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_TERIMA_BATU_BY_DIVISI +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&divisi=" +
        params.divisi +
        "&bahan=" +
        params.bahan +
        "&batu=" +
        params.batu +
        "&pasang=" +
        params.pasang +
        "&no_job_order=" +
        (params.no_job_order || undefined) +
        "&alloy=" +
        params.alloy,
    });
    return response;
  },
};

export default TerimaBatu;
