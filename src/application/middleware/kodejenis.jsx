import {
  GET_ALL_KODE_JENIS,
  setDataKodeJenisSuccess,
  setDataKodeJenisFailed,
} from "../actions/kodejenis";

const getKodeJenis =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_KODE_JENIS) {
      const response = await api.KodeJenis.getAllKodeJenis();
      if (response?.value !== null) {
        dispatch(setDataKodeJenisSuccess(response?.value));
      } else {
        dispatch(setDataKodeJenisFailed(response?.error));
      }
    }
  };

const data = [getKodeJenis];

export default data;
