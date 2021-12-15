import get from "../../../axios/get";
import word from "../../../shared/static";

const kirimsaldodivisi = {
  getAllKirimsaldodivisi: async (param) => {
    const response = await get({
      url:
        word.URL_GET_ALL_KIRIM_SALDO_DIVISI +
        "dateDari=" +
        param.tgl_dari +
        "&" +
        "dateSampai=" +
        param.tgl_sampai +
        "&" +
        "kode_jenis_bahan=" +
        param.kode_jenis_bahan,
    });
    return response;
  },
};

export default kirimsaldodivisi;
