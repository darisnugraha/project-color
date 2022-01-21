import get from "../../../axios/get";
import word from "../../../shared/static";

const MutasiStockPusatByDivisi = {
  getAllMutasiStockPusatByDivisi: async ({ params }) => {
    let response = "";
    if (params.divisi === "BATU") {
      response = await get({
        url:
          word.URL_GET_ALL_MUTASI_STOCK_PUSAT_BY_DIVISI +
          "startDate=" +
          params.tgl_dari +
          "&endDate=" +
          params.tgl_sampai +
          "&divisi=" +
          params.divisi +
          "&all=" +
          params.all,
      });
    } else if (params.divisi === "HAND WORKING") {
      response = await get({
        url:
          word.URL_GET_ALL_MUTASI_STOCK_PUSAT_BY_DIVISI +
          "startDate=" +
          params.tgl_dari +
          "&endDate=" +
          params.tgl_sampai +
          "&divisi=" +
          params.divisi +
          "&all=" +
          params.all +
          "&type=" +
          params.type +
          "&bahan=" +
          params.kode_jenis_bahan,
      });
    } else {
      response = await get({
        url:
          word.URL_GET_ALL_MUTASI_STOCK_PUSAT_BY_DIVISI +
          "startDate=" +
          params.tgl_dari +
          "&endDate=" +
          params.tgl_sampai +
          "&divisi=" +
          params.divisi +
          "&user=" +
          params.user +
          "&all=" +
          params.all +
          "&type=" +
          params.type +
          "&bahan=" +
          params.kode_jenis_bahan,
      });
    }

    return response;
  },
};

export default MutasiStockPusatByDivisi;
