//API => call api in infrastructure -> service -> api
// log => for call console.log and dynamic console.log
//writeLocal for write data to local ( dynamic write depend on mode in env) if production its automatically encrypted
//getLocal for get data from local ( dynamic write depend on mode in env) if production its automatically encrypted
// toas for show toast to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// sweetalert for show sweetalert to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// dispatch for dispactching action, like store data to reducer, and others
// getState is FUNCTION for get current data in your state (reducer), just call getState().yourReducer.yourData

import {
  GET_ALL_KIRIM_SALDO_DIVISI,
  setDataKirimsaldodivisiFailed,
  setDataKirimsaldodivisiSuccess,
} from "../actions/kirimsaldodivisi";
import { setLoadingButton } from "../actions/ui";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import Moment from "moment";

const kirimsaldodivisi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_KIRIM_SALDO_DIVISI) {
      dispatch(setLoadingButton(true));

      const data = getState().form.FormLaporanKirimSaldoDivisi.values;
      const tgl_dari = new Date(data.date[0]);
      const tgl_dari_string = Moment.tz(tgl_dari, "Asia/Jakarta").format(
        "YYYY-MM-DD"
      );
      const tgl_sampai = new Date(data.date[1]);
      const tgl_sampai_string = Moment.tz(tgl_sampai, "Asia/Jakarta").format(
        "YYYY-MM-DD"
      );
      data.tgl_dari = tgl_dari_string;
      data.tgl_sampai = tgl_sampai_string;
      writeLocal("kirim_saldo_divisi_head", data);

      const response = await api.kirimsaldodivisi.getAllKirimsaldodivisi(data);

      if (response?.value !== null) {
        if (response?.value.length === 0) {
          sweetalert.default.Failed("Data Laporan Kosong!");
          dispatch(
            setDataKirimsaldodivisiFailed({ feedback: response?.value })
          );
        } else {
          dispatch(
            setDataKirimsaldodivisiSuccess({ feedback: response?.value })
          );
          sweetalert.default.Success("Berhasil Melihat Laporan !");
        }
        dispatch(setLoadingButton(false));
      } else {
        dispatch(setDataKirimsaldodivisiFailed({ error: response?.error }));
        sweetalert.default.Failed("Gagal Melihat Laporan !");
        dispatch(setLoadingButton(false));
      }
    }
  };

const data = [kirimsaldodivisi];

export default data;
