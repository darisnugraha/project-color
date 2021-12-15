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
];

export default midd;
