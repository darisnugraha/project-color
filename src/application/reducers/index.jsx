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
import kirimbarang from "./kirimbarang";
import design from "./design";
import terimabarang from "./terimabarang";
import kirimplatting from "./kirimplatting";
import divisi from "./divisi";
import kirimbydivisi from "./kirimbydivisi";
import kirimpolishing from "./kirimpolishing";
import kodejenis from "./kodejenis";
import terimabydivisi from "./terimabydivisi";
import mutasisaldo from "./mutasisaldo";
import mutasioutstand from "./mutasioutstand";
import mutasihistory from "./mutasihistory";
import analysisstock from "./analysisstock";
import terimabatubydivisi from "./terimabatubydivisi";
import sampleterimabahan from "./sampleterimabahan";
import batu from "./batu";
import terimasubdivisi from "./terimasubdivisi";
import saldosubdivisi from "./saldosubdivisi";
import terimagudangqc from "./terimagudangqc";
import kirimgudangqc from "./kirimgudangqc";
import kirimmarketinggudangqc from "./kirimmarketinggudangqc";
import mutasistockgudangqc from "./mutasistockgudangqc";
import customer from "./customer";
import nopo from "./nopo";
import inputdraftpo from "./inputdraftpo";
import jobprocessing from "./jobprocessing";
import bataljoborder from "./bataljoborder";

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
  kirimbarang,
  design,
  terimabarang,
  kirimplatting,
  divisi,
  kirimbydivisi,
  kirimpolishing,
  kodejenis,
  terimabydivisi,
  mutasisaldo,
  mutasioutstand,
  mutasihistory,
  analysisstock,
  terimabatubydivisi,
  sampleterimabahan,
  batu,
  terimasubdivisi,
  saldosubdivisi,
  terimagudangqc,
  kirimgudangqc,
  kirimmarketinggudangqc,
  mutasistockgudangqc,
  customer,
  nopo,
  inputdraftpo,
  jobprocessing,
  bataljoborder,
  form: formReducer,
});
