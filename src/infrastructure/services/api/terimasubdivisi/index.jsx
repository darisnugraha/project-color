import get from "../../../axios/get";
import word from "../../../shared/static";

const TerimaSubDivisi = {
  getAllTerimaSubDivisi: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_TERIMA_SUB_DIVISI +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&divisi=" +
        params.divisi +
        "&bahan=" +
        params.bahan +
        "&alloy=" +
        params.alloy,
    });
    return response;
  },
};

export default TerimaSubDivisi;
