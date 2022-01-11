import get from "../../../axios/get";
import word from "../../../shared/static";

const KirimPolishing = {
  getAllKirimPolishing: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_KIRIM_POLISHING +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&tujuan=" +
        params.tujuan +
        "&jenis=" +
        params.jenis +
        "&bahan=" +
        params.kode_jenis_bahan +
        "&design=" +
        params.design +
        "&no_job_order=" +
        (params.no_job_order || undefined) +
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

export default KirimPolishing;
