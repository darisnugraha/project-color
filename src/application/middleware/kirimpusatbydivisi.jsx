//API => call api in infrastructure -> service -> api
// log => for call console.log and dynamic console.log
//writeLocal for write data to local ( dynamic write depend on mode in env) if production its automatically encrypted
//getLocal for get data from local ( dynamic write depend on mode in env) if production its automatically encrypted
// toas for show toast to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// sweetalert for show sweetalert to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// dispatch for dispactching action, like store data to reducer, and others
// getState is FUNCTION for get current data in your state (reducer), just call getState().yourReducer.yourData

import {
  GET_ALL_KIRIM_PUSAT_BY_DIVISI,
  setDataKirimPusatByDivisiSuccess,
  setDataKirimPusatByDivisiFailed,
} from "../actions/kirimpusatbydivisi";
import { setLoadingButton } from "../actions/ui";
import Moment from "moment";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataKirimPusatByDivisi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_KIRIM_PUSAT_BY_DIVISI) {
      dispatch(setLoadingButton(true));
      dispatch(setDataKirimPusatByDivisiSuccess({ feedback: [] }));
      const data = getState().form.FormLaporanKirimPusatByDivisi.values;
      if (
        data.kode_jenis_bahan === undefined ||
        data.date === null ||
        data.divisi === undefined
      ) {
        dispatch(setLoadingButton(false));
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else {
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
        writeLocal("kirim_pusat_divisi", data);

        const response = await api.KirimPusatByDivisi.getAllKirimPusatByDivisi({
          params: data,
        });
        if (response?.value !== null) {
          dispatch(setLoadingButton(false));
          if (response?.value.length === 0) {
            dispatch(setLoadingButton(false));
            sweetalert.default.Failed("Data Laporan Kosong !");
            dispatch(setDataKirimPusatByDivisiSuccess({ feedback: [] }));
          } else {
            dispatch(setLoadingButton(false));
            sweetalert.default.Success("Berhasil Mengambil Data !");
            dispatch(
              setDataKirimPusatByDivisiSuccess({ feedback: response?.value })
            );
          }
        } else {
          dispatch(setLoadingButton(false));
          sweetalert.default.Failed("Terjadi Kesalahan Saat Mengambil Data !");
          dispatch(setDataKirimPusatByDivisiFailed({ error: response.error }));
        }
      }
    }
  };

const data = [getDataKirimPusatByDivisi];

export default data;
