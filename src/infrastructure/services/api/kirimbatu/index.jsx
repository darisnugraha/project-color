import get from "../../../axios/get";
import word from "../../../shared/static";

const KirimBatu = {
  getAllKirimBatu: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_KIRIM_BATU +
        `startDate=${params.tgl_dari}&endDate=${params.tgl_sampai}&batu=${
          params.kode_batu
        }&divisi=${params.divisi}&status_kirim=${
          params.status_kirim
        }&jenis_bahan=${params.kode_jenis_bahan}&${
          params.switch_no === "true"
            ? "no_job_order=" + params.no_job_order
            : "no_batu_kirim=" + params.no_batu_kirim
        }`,
    });
    return response;
  },
};

export default KirimBatu;
