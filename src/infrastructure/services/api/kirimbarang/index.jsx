import get from "../../../axios/get";
import word from "../../../shared/static";

const KirimBarang = {
  getAllKirimBarang: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_KIRIM_BARANG +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&sample=" +
        params.sample +
        "&design=" +
        params.design +
        "&bahan=" +
        params.kode_jenis_bahan +
        "&no_job_order=" +
        (params.no_job_order || undefined) +
        "&alloy=" +
        params.alloy +
        "&reparasi=" +
        params.reparasi,
    });
    return response;
  },
};

export default KirimBarang;
