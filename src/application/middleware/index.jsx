import ui from "./ui";
import login from "./login";
import laporanstockglobalproduksi from "./laporanstockglobalproduksi";
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

const midd = [
  ...ui,
  ...login,
  ...laporanstockglobalproduksi,
  ...kirimsaldotahun,
  ...stockadmin,
  ...saldobahan,
  ...kirimdesian,
  ...kirimsaldodivisi,
  ...jenisbahan,
  ...kirimcasting,
  ...terimacasting,
  ...kirimbarangproduksi,
  ...terimabarangproduksi,
  ...tambahjoborder,
  ...kirimbarang,
  ...design,
  ...terimabarang,
  ...kirimplatting,
  ...divisi,
  ...kirimbydivisi,
];

export default midd;
