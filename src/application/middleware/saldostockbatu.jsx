import {
  GET_ALL_SALDO_STOCK_BATU,
  setDataSaldoStockBatuSuccess,
  setDataSaldoStockBatuFailed,
} from "../actions/saldostockbatu";
import { setLoadingButton } from "../actions/ui";
import moment from "moment";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getAllDataSaldoStockBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_SALDO_STOCK_BATU) {
      dispatch(setLoadingButton(true));
      dispatch(setDataSaldoStockBatuSuccess({ feedback: [] }));
      const data = getState().form.FormLaporanSaldoStockBatu.values;
      const tgl = new Date(data.date);
      const tgl_kirim = moment.tz(tgl, "Asia/Jakarta").format("YYYY-MM");
      const dataKirim = {
        date: tgl_kirim,
      };
      writeLocal("saldo_stock_batu", dataKirim);
      const response = await api.SaldoStockBatu.getAllSaldoStockBatu({
        params: dataKirim,
      });
      if (response?.value !== null) {
        dispatch(setLoadingButton(false));
        if (response?.value.length === 0) {
          dispatch(setLoadingButton(false));
          sweetalert.default.Failed("Data Laporan Kosong !");
          dispatch(setDataSaldoStockBatuSuccess({ feedback: [] }));
        } else {
          dispatch(setLoadingButton(false));
          sweetalert.default.Success("Berhasil Mengambil Data !");
          dispatch(setDataSaldoStockBatuSuccess({ feedback: response?.value }));
        }
      } else {
        dispatch(setLoadingButton(false));
        sweetalert.default.Failed("Terjadi Kesalahan Saat Mengambil Data !");
        dispatch(setDataSaldoStockBatuFailed({ error: response.error }));
      }
    }
  };

const data = [getAllDataSaldoStockBahan];

export default data;
