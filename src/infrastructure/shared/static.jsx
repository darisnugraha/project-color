const baseurl = process.env.REACT_APP_BACKEND_URL;

const URL_LOGIN = `${baseurl}users/login`;
const URL_ADD_LAPORAN_STOCK_GLOBAL_PRODUKSI = `${baseurl}stock/report-global`;
const URL_ADD_KIRIM_SALDO_TAHUN = `${baseurl}report/kirim-saldo`;
const URL_GET_ALL_KIRIM_DESIAN = `${baseurl}report-desain/kirim-desain?`;
const URL_GET_ALL_KIRIM_SALDO_DIVISI = `${baseurl}report/kirim-saldo-divisi?`;
const URL_GET_ALL_JENIS_BAHAN = `${baseurl}report/get-kode-jenis-bahan`;
const URL_GET_ALL_DESIGN = `${baseurl}report/get-design`;
const URL_GET_ALL_DIVISI = `${baseurl}report/get-divisi`;
const URL_GET_ALL_KODE_JENIS = `${baseurl}report/get-kode-jenis`;
const URL_GET_ALL_KIRIM_CASTING = `${baseurl}adminpusat/report/con/kirim-casting?`;
const URL_GET_ALL_TERIMA_CASTING = `${baseurl}adminpusat/report/con/terima-casting?`;
const URL_GET_ALL_KIRIM_BARANG_PRODUKSI = `${baseurl}adminpusat/report/con/kirim-barang-produksi?`;
const URL_GET_ALL_TERIMA_BARANG_PRODUKSI = `${baseurl}adminpusat/report/con/terima-barang-produksi?`;
const URL_GET_ALL_TAMBAH_JOB_ORDER = `${baseurl}adminpusat/report/con/tambah-job-order?`;
const URL_GET_ALL_KIRIM_BARANG = `${baseurl}adminpusat/report/barang/kirim-barang?`;
const URL_GET_ALL_TERIMA_BARANG = `${baseurl}adminpusat/report/barang/terima-barang?`;
const URL_GET_ALL_KIRIM_PLATTING = `${baseurl}produksi/report/kirim-platting?`;
const URL_GET_ALL_KIRIM_POLISHING = `${baseurl}produksi/report/kirim-polishing?`;
const URL_GET_ALL_KIRIM_BY_DIVISI = `${baseurl}produksi/report/kirim-barang?`;
const URL_GET_ALL_TERIMA_BY_DIVISI = `${baseurl}produksi/report/terima-barang?`;
const URL_GET_ALL_MUTASI_SALDO_BY_DIVISI = `${baseurl}produksi/report/mutasi-saldo-by-divisi?`;
const URL_GET_ALL_MUTASI_OUTSTAND_BY_DIVISI = `${baseurl}produksi/report/mutasi-outstand-by-divisi?`;
const URL_GET_ALL_MUTASI_HISTORY_BY_DIVISI = `${baseurl}produksi/report/mutasi-history-by-divisi?`;
const URL_GET_ALL_ANALYSIS_STOCK_BY_DIVISI = `${baseurl}produksi/report/analysis-stock-by-divisi?`;
const URL_GET_ALL_SAMPLE_TERIMA_BAHAN = `${baseurl}/produksi/report/sample-terima-bahan?`;
const URL_GET_ALL_TERIMA_BATU_BY_DIVISI = `${baseurl}/produksi/report/etc-terima-batu?`;
const URL_GET_ALL_BATU = `${baseurl}/produksi/report/get-kode-batu`;
const URL_GET_ALL_TERIMA_SUB_DIVISI = `${baseurl}/produksi/report/terima-sub-divisi?`;
const URL_GET_ALL_SALDO_SUB_DIVISI = `${baseurl}/produksi/report/saldo-sub-divisi?`;
const URL_GET_ALL_TERIMA_GUDANG_QC = `${baseurl}/gudangqc/report/terima-qc?`;
const URL_GET_ALL_KIRIM_GUDANG_QC = `${baseurl}/gudangqc/report/kirim-qc?`;

const data = {
  URL_LOGIN,
  URL_ADD_LAPORAN_STOCK_GLOBAL_PRODUKSI,
  URL_ADD_KIRIM_SALDO_TAHUN,
  URL_GET_ALL_KIRIM_DESIAN,
  URL_GET_ALL_KIRIM_SALDO_DIVISI,
  URL_GET_ALL_JENIS_BAHAN,
  URL_GET_ALL_KIRIM_CASTING,
  URL_GET_ALL_TERIMA_CASTING,
  URL_GET_ALL_KIRIM_BARANG_PRODUKSI,
  URL_GET_ALL_TERIMA_BARANG_PRODUKSI,
  URL_GET_ALL_TAMBAH_JOB_ORDER,
  URL_GET_ALL_KIRIM_BARANG,
  URL_GET_ALL_DESIGN,
  URL_GET_ALL_TERIMA_BARANG,
  URL_GET_ALL_KIRIM_PLATTING,
  URL_GET_ALL_DIVISI,
  URL_GET_ALL_KIRIM_BY_DIVISI,
  URL_GET_ALL_KIRIM_POLISHING,
  URL_GET_ALL_KODE_JENIS,
  URL_GET_ALL_TERIMA_BY_DIVISI,
  URL_GET_ALL_MUTASI_SALDO_BY_DIVISI,
  URL_GET_ALL_MUTASI_OUTSTAND_BY_DIVISI,
  URL_GET_ALL_MUTASI_HISTORY_BY_DIVISI,
  URL_GET_ALL_ANALYSIS_STOCK_BY_DIVISI,
  URL_GET_ALL_SAMPLE_TERIMA_BAHAN,
  URL_GET_ALL_TERIMA_BATU_BY_DIVISI,
  URL_GET_ALL_BATU,
  URL_GET_ALL_TERIMA_SUB_DIVISI,
  URL_GET_ALL_SALDO_SUB_DIVISI,
  URL_GET_ALL_TERIMA_GUDANG_QC,
  URL_GET_ALL_KIRIM_GUDANG_QC,
};

export default data;
