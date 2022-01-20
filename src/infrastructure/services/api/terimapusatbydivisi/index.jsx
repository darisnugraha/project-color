import get from "../../../axios/get";
import word from "../../../shared/static";

const TerimaPusatByDivisi = {
  getAllTerimaPusatByDivisi: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_TERIMA_PUSAT_BY_DIVISI +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&bahan=" +
        params.kode_jenis_bahan +
        "&divisi=" +
        params.divisi,
    });
    return response;
  },
};

export default TerimaPusatByDivisi;
