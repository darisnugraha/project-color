import get from "../../../axios/get";
import word from "../../../shared/static";

const KirimBahanAdmin = {
  getAllKirimBahanAdmin: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_KIRIM_BAHAN_ADMIN +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&all=" +
        params.all +
        "&bahan=" +
        params.kode_jenis_bahan,
    });
    return response;
  },
};

export default KirimBahanAdmin;
