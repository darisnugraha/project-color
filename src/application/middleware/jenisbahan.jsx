import {
  GET_ALL_JENIS_BAHAN,
  setDataJenisBahanSuccess,
  setDataJenisBahanFailed,
} from "../actions/jenisbahan";

const getJenisBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_JENIS_BAHAN) {
      const response = await api.JenisBahan.getAllJenisBahan();
      log(response);
    //   const response = [];
      if (response?.value !== null) {
        dispatch(setDataJenisBahanSuccess(response?.value));
      } else {
        dispatch(setDataJenisBahanFailed(response?.error));
      }
    }
  };

const data = [getJenisBahan];

export default data;
