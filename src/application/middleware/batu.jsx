import {
  GET_ALL_BATU,
  setDataBatuSuccess,
  setDataBatuFailed,
} from "../actions/batu";

const getBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_BATU) {
      const response = await api.Batu.getAllBatu();
      if (response?.value !== null) {
        dispatch(setDataBatuSuccess(response?.value));
      } else {
        dispatch(setDataBatuFailed(response?.error));
      }
    }
  };

const data = [getBatu];

export default data;
