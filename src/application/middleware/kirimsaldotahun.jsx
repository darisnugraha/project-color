import { GET_ALL_KIRIM_SALDO_TAHUN } from '../actions/kirimsaldotahun';

const kirimsaldotahun =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_KIRIM_SALDO_TAHUN) {
      log('test');
    }
  };

const data = [kirimsaldotahun];

export default data;
