import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './login';
import ui from './ui';
import laporanStockGlobalProduksi from './laporanstockglobalproduksi';
import kirimsaldotahun from './kirimsaldotahun';

export default combineReducers({
  login,
  ui,
  laporanStockGlobalProduksi,
  kirimsaldotahun,
  form: formReducer,
});
