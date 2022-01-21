import get from "../../../axios/get";
import word from "../../../shared/static";

const AdminMutasiStockBatu = {
  getAllAdminMutasiStockBatu: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_ADMIN_MUTASI_STOCK_BATU +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&all=" +
        params.all,
    });
    return response;
  },
};

export default AdminMutasiStockBatu;
