import {
  GET_ALL_NO_PO,
  setDataNoPOSuccess,
  setDataNoPOFailed,
} from "../actions/nopo";
import { setLoadingButton } from "../actions/ui";
import Moment from "moment";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getNoPO =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_NO_PO) {
      const data = getState().form.FormGetNoPO
        ? getState().form.FormGetNoPO.values
        : getState().form.FormGetNoPOJP.values;
      dispatch(setLoadingButton(true));
      dispatch(setDataNoPOSuccess([]));
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
      writeLocal("get_no_po", data);
      const response = await api.NoPO.getAllNoPO(data);
      if (response?.value !== null) {
        if (response?.value.length === 0) {
          sweetalert.default.Failed("Data No PO Kosong !");
          dispatch(setDataNoPOSuccess(response?.value));
          dispatch(setLoadingButton(false));
        } else {
          sweetalert.default.Success("Berhasil Mengambil Data");
          dispatch(setDataNoPOSuccess(response?.value));
          dispatch(setLoadingButton(false));
        }
      } else {
        sweetalert.default.Failed("Gagal Mengambli Data");
        dispatch(setDataNoPOFailed(response?.error));
        dispatch(setLoadingButton(false));
      }
    }
  };

const data = [getNoPO];

export default data;
