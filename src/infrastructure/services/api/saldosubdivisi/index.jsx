import get from "../../../axios/get";
import word from "../../../shared/static";

const SaldoSubDivisi = {
  getHarianSaldoSubDivisi: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_SALDO_SUB_DIVISI +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&type=" +
        params.type +
        "&bahan=" +
        params.bahan +
        "&alloy=" +
        params.alloy,
    });
    return response;
  },
  getAllSaldoSubDivisi: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_SALDO_SUB_DIVISI +
        "&type=" +
        params.type +
        "&bahan=" +
        params.bahan +
        "&alloy=" +
        params.alloy,
    });
    return response;
  },
};

export default SaldoSubDivisi;
