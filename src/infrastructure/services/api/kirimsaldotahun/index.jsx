import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const kirimsaldotahun = {
  getAllKirimsaldotahun: async () => {
    const response = await get(word.URL_GET_ALL_KIRIM_SALDO_TAHUN);
    return response;
  },
  addKirimsaldotahun: async (datakirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_KIRIM_SALDO_TAHUN,
      data: datakirim,
    });
    return response;
  },
  deleteKirimsaldotahun: async (data) => {
    const response = await deleteAxios(
      word.URL_DELETE_KIRIM_SALDO_TAHUN + data
    );
    return response;
  },
  editKirimsaldotahun: async (url, data) => {
    const response = await put(
      word.URL_UPDATE_KIRIM_SALDO_TAHUN + url,
      data
    );
    return response;
  },
};

export default kirimsaldotahun;
