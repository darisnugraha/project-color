import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import login from "./login";
import ui from "./ui";
import laporanStockGlobalProduksi from "./laporanstockglobalproduksi";
import kirimsaldotahun from "./kirimsaldotahun";
import stockadmin from "./stockadmin";
import saldobahan from "./saldobahan";
import kirimdesian from "./kirimdesian";
import kirimsaldodivisi from "./kirimsaldodivisi";
import jenisbahan from "./jenisbahan";
import kirimcasting from "./kirimcasting";
import terimacasting from "./terimacasting";
import kirimbarangproduksi from "./kirimbarangproduksi";
import terimabarangproduksi from "./terimabarangproduksi";
import tambahjoborder from "./tambahjoborder";

export default combineReducers({
  login,
  ui,
  laporanStockGlobalProduksi,
  kirimsaldotahun,
  stockadmin,
  saldobahan,
  kirimdesian,
  kirimsaldodivisi,
  jenisbahan,
  kirimcasting,
  terimacasting,
  kirimbarangproduksi,
  terimabarangproduksi,
  tambahjoborder,
  form: formReducer,
});
