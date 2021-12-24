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
      dispatch(setDataKirimsaldotahunSuccess([]));
      const data = getState().form.FormLaporanKirimSaldoTahun.values;
      const tgl = new Date(data.tanggal);
      const tgl_kirim = moment.tz(tgl, "Asia/Jakarta").format("YYYY-MM");
      writeLocal("tanggal_lap", tgl_kirim);
      data.date = tgl_kirim;
      const dataKirim = {
        date: data.date,
        kode_jenis_bahan: data.kode_jenis_bahan,
      };
      const response = await api.kirimsaldotahun.addKirimsaldotahun(dataKirim);
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
