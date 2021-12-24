//API => call api in infrastructure -> service -> api
// log => for call console.log and dynamic console.log
//writeLocal for write data to local ( dynamic write depend on mode in env) if production its automatically encrypted
//getLocal for get data from local ( dynamic write depend on mode in env) if production its automatically encrypted
// toas for show toast to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// sweetalert for show sweetalert to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// dispatch for dispactching action, like store data to reducer, and others
// getState is FUNCTION for get current data in your state (reducer), just call getState().yourReducer.yourData

import {
  GET_ALL_KIRIM_DESIAN,
  setDataKirimdesianSuccess,
  setDataKirimdesianFailed,
} from "../actions/kirimdesian";
import Moment from "moment-timezone";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import { setLoadingButton } from "../actions/ui";

const kirimdesian =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_KIRIM_DESIAN) {
      dispatch(setLoadingButton(true));
      dispatch(setDataKirimdesianSuccess({ feedback: [] }));
      const data = getState().form.FormLaporanKirimDesian.values;
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
      writeLocal("kirim_desain_head", data);

      const response = await api.kirimdesian.getAllKirimdesian(data);

      if (response?.value !== null) {
        if (response?.value.length === 0) {
          sweetalert.default.Failed("Data Laporan Kosong!");
          dispatch(setDataKirimdesianSuccess({ feedback: [] }));
        } else {
          dispatch(setDataKirimdesianSuccess({ feedback: response?.value }));
          sweetalert.default.Success("Berhasil Melihat Laporan !");
        }
        dispatch(setLoadingButton(false));
      } else {
        dispatch(setDataKirimdesianFailed({ error: response?.error }));
        sweetalert.default.Failed("Gagal Melihat Laporan !");
        dispatch(setLoadingButton(false));
      }
    }
  };

const data = [kirimdesian];

export default data;
