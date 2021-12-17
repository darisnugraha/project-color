import get from "../../../axios/get";
import word from "../../../shared/static";

const KirimPlatting = {
  getAllKirimPlatting: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_KIRIM_PLATTING +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&tujuan=" +
        params.tujuan +
        "&bahan=" +
        params.kode_jenis_bahan +
        "&design=" +
        params.design +
        "&no_job_order=" +
        params.no_job_order +
        "&reparasi=" +
        params.reparasi +
        "&ekspor=" +
        params.ekspor +
        "&alloy=" +
        params.alloy,
    });
    return response;
  },
};

export default KirimPlatting;
