import get from "../../../axios/get";
import word from "../../../shared/static";

const KirimMarketingGudangQC = {
  getAllKirimMarketingGudangQC: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_KIRIM_MARKETING_GUDANG_QC +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&bahan=" +
        params.kode_jenis_bahan +
        "&design=" +
        params.design +
        "&no_job_order=" +
        params.no_job_order +
        "&jenis=" +
        params.kode_jenis +
        "&ekspor=" +
        params.ekspor +
        "&format=" +
        params.format +
        "&photo=" +
        params.photo +
        "&alloy=" +
        params.alloy,
    });
    return response;
  },
};

export default KirimMarketingGudangQC;
