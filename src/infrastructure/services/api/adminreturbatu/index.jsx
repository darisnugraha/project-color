import get from "../../../axios/get";
import word from "../../../shared/static";

const AdminReturBatu = {
  getAllAdminReturBatu: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_ADMIN_RETUR_BATU +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&batu=" +
        params.batu +
        "&bahan=" +
        params.kode_jenis_bahan +
        "&no_job_order=" +
        (params.no_job_order || "SEMUA") +
        "&alloy=" +
        params.alloy,
    });
    return response;
  },
};

export default AdminReturBatu;
