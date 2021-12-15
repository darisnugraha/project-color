import get from "../../../axios/get";
import word from "../../../shared/static";

const KirimCasting = {
  getAllKirimCasting: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_KIRIM_CASTING +
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

export default KirimCasting;
