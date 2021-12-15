import post from "../../../axios/post";
import word from "../../../shared/static";

const laporanStockGlobalProduksi = {
  addLaporanStockGlobalProduksi: async (datakirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_LAPORAN_STOCK_GLOBAL_PRODUKSI,
      data: datakirim,
    });
    return response;
  },
};

export default laporanStockGlobalProduksi;
