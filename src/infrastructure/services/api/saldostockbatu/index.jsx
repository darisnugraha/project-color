import get from "../../../axios/get";
import word from "../../../shared/static";

const SaldoStockBatu = {
  getAllSaldoStockBatu: async ({ params }) => {
    const response = await get({
      url: word.URL_GET_ALL_SALDO_STOCK_BATU + "date=" + params.date,
    });
    return response;
  },
};

export default SaldoStockBatu;
