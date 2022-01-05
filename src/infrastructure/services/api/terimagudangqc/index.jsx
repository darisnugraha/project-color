import get from "../../../axios/get";
import word from "../../../shared/static";

const TerimaGudangQC = {
  getAllTerimaGudangQC: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_TERIMA_GUDANG_QC +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&bahan=" +
        params.kode_jenis_bahan +
        "&design=" +
        params.design +
        "&alloy=" +
        params.alloy,
    });
    return response;
  },
};

export default TerimaGudangQC;
