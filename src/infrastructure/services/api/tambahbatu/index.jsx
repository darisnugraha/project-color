import get from "../../../axios/get";
import word from "../../../shared/static";

const TambahBatu = {
  getAllTambahBatu: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_TAMBAH_BATU +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&batu=" +
        params.kode_batu,
    });
    return response;
  },
};

export default TambahBatu;
