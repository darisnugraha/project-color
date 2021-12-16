import get from "../../../axios/get";
import word from "../../../shared/static";

const TambahJobOrder = {
  getAllTambahJobOrder: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_TAMBAH_JOB_ORDER +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&bahan=" +
        params.kode_jenis_bahan +
        "&alloy=" +
        params.alloy,
    });
    return response;
  },
};

export default TambahJobOrder;
