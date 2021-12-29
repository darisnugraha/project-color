//API => call api in infrastructure -> service -> api
// log => for call console.log and dynamic console.log
//writeLocal for write data to local ( dynamic write depend on mode in env) if production its automatically encrypted
//getLocal for get data from local ( dynamic write depend on mode in env) if production its automatically encrypted
// toas for show toast to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// sweetalert for show sweetalert to screen, its have 4 varians (.Success , .Failed, .Warning, .Info)
// dispatch for dispactching action, like store data to reducer, and others
// getState is FUNCTION for get current data in your state (reducer), just call getState().yourReducer.yourData

import {
  GET_ALL_MUTASI_OUTSTAND_BY_DIVISI,
  setDataMutasiOutstandByDivisiSuccess,
  setDataMutasiOutstandByDivisiFailed,
  getDivisi,
} from "../actions/mutasioutstand";
import { setLoadingButton } from "../actions/ui";
import Moment from "moment";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getAllDataMutasiOutstand =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MUTASI_OUTSTAND_BY_DIVISI) {
      dispatch(setLoadingButton(true));
      dispatch(setDataMutasiOutstandByDivisiSuccess({ feedback: [] }));
      const data = getState().form.FormLaporanMutasiOutstand.values;
      dispatch(getDivisi({ divisi: data.divisi }));
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
      writeLocal("mutasi_outstand_by_divisi_head", data);

      if (data.bahan === undefined) {
        dispatch(setLoadingButton(false));
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else {
        const response = await api.MutasiOutstand.getAllMutasiOutstand({
          params: data,
        });
        log(response);
        if (response?.value !== null) {
          dispatch(setLoadingButton(false));
          if (response?.value.length === 0) {
            dispatch(setLoadingButton(false));
            sweetalert.default.Failed("Data Laporan Kosong !");
            dispatch(setDataMutasiOutstandByDivisiSuccess({ feedback: [] }));
          } else {
            dispatch(setLoadingButton(false));
            sweetalert.default.Success("Berhasil Mengambil Data !");
            dispatch(
              setDataMutasiOutstandByDivisiSuccess({
                feedback: response?.value,
              })
            );
          }
        } else {
          dispatch(setLoadingButton(false));
          sweetalert.default.Failed("Terjadi Kesalahan Saat Mengambil Data !");
          dispatch(
            setDataMutasiOutstandByDivisiFailed({ error: response.error })
          );
        }
      }
    }
  };

const data = [getAllDataMutasiOutstand];

export default data;
