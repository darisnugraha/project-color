import {
  GET_ALL_KIRIM_SALDO_TAHUN,
  setDataKirimsaldotahunSuccess,
  setDataKirimsaldotahunFailed,
} from "../actions/kirimsaldotahun";
import { setLoadingButton } from "../actions/ui";
import moment from "moment";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const kirimsaldotahun =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_KIRIM_SALDO_TAHUN) {
      dispatch(setLoadingButton(true));
      const data = getState().form.FormLaporanKirimSaldoTahun.values;
      const tgl = new Date(data.tanggal);
      const tgl_kirim = moment.tz(tgl, "Asia/Jakarta").format("YYYY-MM");
      delete data.tanggal;
      data.date = tgl_kirim;
      const response = await api.kirimsaldotahun.addKirimsaldotahun(data);
      if (response?.value !== null) {
        if (response?.value.length === 0) {
          sweetalert.default.Failed("Data Laporan Kosong !");
          writeLocal("tanggal_lap", tgl.toLocaleDateString());
          dispatch(setDataKirimsaldotahunSuccess(response?.value));
          dispatch(setLoadingButton(false));
        } else {
          sweetalert.default.Success("Berhasil Melihat Laporan !");
          writeLocal("tanggal_lap", tgl.toLocaleDateString());
          dispatch(setDataKirimsaldotahunSuccess(response?.value));
          dispatch(setLoadingButton(false));
        }
      } else {
        sweetalert.default.Failed("Gagal Melihat Laporan");
        dispatch(setDataKirimsaldotahunFailed(response?.error));
        dispatch(setLoadingButton(false));
      }
    }
  };

const data = [kirimsaldotahun];

export default data;
