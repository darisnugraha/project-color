import post from "../../../axios/post";
import word from "../../../shared/static";

const kirimsaldotahun = {
  addKirimsaldotahun: async (datakirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_KIRIM_SALDO_TAHUN,
      data: datakirim,
    });
    return response;
  },
};

export default kirimsaldotahun;
