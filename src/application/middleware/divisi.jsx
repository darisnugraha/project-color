import {
  GET_ALL_DIVISI,
  setDataDivisiSuccess,
  setDataDivisiFailed,
} from "../actions/divisi";

const getDivisi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_DIVISI) {
      const response = await api.Divisi.getAllDivisi();
      if (response?.value !== null) {
        dispatch(setDataDivisiSuccess(response?.value));
      } else {
        dispatch(setDataDivisiFailed(response?.error));
      }
    }
  };

const data = [getDivisi];

export default data;
