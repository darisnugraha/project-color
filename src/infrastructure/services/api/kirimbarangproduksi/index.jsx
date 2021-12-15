import get from "../../../axios/get";
import word from "../../../shared/static";

const KirimBarangProduksi = {
  getAllKirimBarangProduksi: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_KIRIM_BARANG_PRODUKSI +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&bahan=" +
        params.kode_jenis_bahan +
        "&divisi=" +
        params.divisi +
        "&alloy=" +
        params.alloy +
        "&no_con=" +
        params.no_con,
    });
    return response;
  },
};

export default KirimBarangProduksi;
