import get from "../../../axios/get";
import word from "../../../shared/static";

const TerimaCasting = {
  getAllTerimaCasting: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_TERIMA_CASTING +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&kriteria=" +
        params.kriteria +
        "&jenis_bahan=" +
        params.kode_jenis_bahan,
    });
    return response;
  },
};

export default TerimaCasting;
