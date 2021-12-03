import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
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
  addKirimdesian: async (data) => {
    const response = await post.AxiosPost(word.URL_ADD_KIRIM_DESIAN, data);
    return response;
  },
  deleteKirimdesian: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_KIRIM_DESIAN + data);
    return response;
  },
  editKirimdesian: async (url, data) => {
    const response = await put(word.URL_UPDATE_KIRIM_DESIAN + url, data);
    return response;
  },
};

export default kirimdesian;
