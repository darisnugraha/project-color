import { GET_ALL_STOCK_ADMIN } from '../actions/stockadmin';

const kirimsaldotahun =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_STOCK_ADMIN) {
      log('test');
    }
  };

const data = [kirimsaldotahun];

export default data;
