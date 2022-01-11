import get from "../../../axios/get";
import word from "../../../shared/static";

const TerimaByDivisi = {
  getAllTerimaByDivisi: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_TERIMA_BY_DIVISI +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&divisi=" +
        params.divisi +
        "&bahan=" +
        params.kode_jenis_bahan +
        "&design=" +
        params.design +
        "&no_job_order=" +
        (params.no_job_order || undefined) +
        "&alloy=" +
        params.alloy,
    });
    return response;
  },
};

export default TerimaByDivisi;
