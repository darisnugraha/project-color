import get from "../../../axios/get";
import word from "../../../shared/static";
const kirimdesian = {
  getAllKirimdesian: async (data) => {
    const response = await get({
      url:
        word.URL_GET_ALL_KIRIM_DESIAN +
        "dateDari=" +
        data.tgl_dari +
        "&" +
        "dateSampai=" +
        data.tgl_sampai +
        "&" +
        "kode_jenis_bahan=" +
        data.kode_jenis_bahan,
    });
    return response;
  },
};

export default kirimdesian;
