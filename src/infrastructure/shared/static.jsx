const baseurl = process.env.REACT_APP_BACKEND_URL;

const URL_LOGIN = `${baseurl}users/login`;
const URL_ADD_LAPORAN_STOCK_GLOBAL_PRODUKSI = `${baseurl}stock/report-global`;
const URL_ADD_KIRIM_SALDO_TAHUN = `${baseurl}report/kirim-saldo`;
const URL_GET_ALL_KIRIM_DESIAN = `${baseurl}report-desain/kirim-desain?`;
const URL_GET_ALL_KIRIM_SALDO_DIVISI = `${baseurl}report/kirim-saldo-divisi?`;
const URL_GET_ALL_JENIS_BAHAN = `${baseurl}report/get-kode-jenis-bahan`;
const URL_GET_ALL_KIRIM_CASTING = `${baseurl}adminpusat/report/con/kirim-casting?`;

const data = {
  URL_LOGIN,
  URL_ADD_LAPORAN_STOCK_GLOBAL_PRODUKSI,
  URL_ADD_KIRIM_SALDO_TAHUN,
  URL_GET_ALL_KIRIM_DESIAN,
  URL_GET_ALL_KIRIM_SALDO_DIVISI,
  URL_GET_ALL_JENIS_BAHAN,
  URL_GET_ALL_KIRIM_CASTING,
};

export default data;
