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
const URL_GET_ALL_SAMPLE_TERIMA_BAHAN = `${baseurl}produksi/report/sample-terima-bahan?`;
const URL_GET_ALL_TERIMA_BATU_BY_DIVISI = `${baseurl}produksi/report/etc-terima-batu?`;
const URL_GET_ALL_BATU = `${baseurl}produksi/report/get-kode-batu`;
const URL_GET_ALL_TERIMA_SUB_DIVISI = `${baseurl}produksi/report/terima-sub-divisi?`;
const URL_GET_ALL_SALDO_SUB_DIVISI = `${baseurl}produksi/report/saldo-sub-divisi?`;
const URL_GET_ALL_TERIMA_GUDANG_QC = `${baseurl}gudangqc/report/terima-qc?`;
const URL_GET_ALL_KIRIM_GUDANG_QC = `${baseurl}gudangqc/report/kirim-qc?`;
const URL_GET_ALL_KIRIM_MARKETING_GUDANG_QC = `${baseurl}gudangqc/report/qc-kirim-marketing?`;
const URL_GET_ALL_MUTASI_STOCK_GUDANG_QC = `${baseurl}gudangqc/report/mutasi-stock-qc?`;
const URL_GET_ALL_CUSTOMER = `${baseurl}report/get-customer`;
const URL_GET_ALL_NO_PO = `${baseurl}report/get-no-po?`;
const URL_GET_ALL_NO_PO_REPARASI = `${baseurl}report/get-no-po-reparasi-masuk?`;
const URL_GET_ALL_NO_PO_REPARASI_KELUAR = `${baseurl}report/get-no-po-reparasi-keluar?`;
const URL_GET_ALL_INPUT_DRAFT_PO = `${baseurl}marketing/report/input-draft-po?`;
const URL_GET_ALL_JOB_PROCESSING = `${baseurl}marketing/report/job-processing?`;
const URL_GET_ALL_BATAL_JOB_ORDER = `${baseurl}marketing/report/batal-job-order?`;
const URL_GET_ALL_REPARASI_MASUK = `${baseurl}marketing/report/reparasi-masuk?`;
const URL_GET_ALL_REPARASI_KELUAR = `${baseurl}marketing/report/reparasi-keluar?`;
const URL_GET_ALL_PO_MASUK = `${baseurl}marketing/report/po-masuk?`;
const URL_GET_ALL_PROSES_PRODUKSI = `${baseurl}marketing/report/proses-produksi?`;
const URL_GET_ALL_TAMBAH_BATU = `${baseurl}adminbatu/report/tambah-batu?`;
const URL_GET_ALL_AMBIL_BATU = `${baseurl}adminbatu/report/ambil-batu?`;
const URL_GET_ALL_RETUR_BATU_WAX = `${baseurl}adminbatu/report/retur-batu-wax?`;
const URL_GET_ALL_RETUR_BATU = `${baseurl}adminbatu/report/retur-batu?`;
const URL_GET_ALL_SALDO_STOCK_BATU = `${baseurl}adminbatu/report/saldo-stock-batu?`;
const URL_GET_ALL_KIRIM_BATU = `${baseurl}adminbatu/report/kirim-batu?`;
const URL_GET_ALL_KIRIM_BAHAN_ADMIN = `${baseurl}casting/report/kirim-bahan-admin?`;
const URL_GET_ALL_MUTASI_STOCK_CASTING = `${baseurl}casting/report/mutasi-stock-casting?`;
const URL_GET_ALL_KARTU_JOB_ORDER = `${baseurl}adminpusat/report/kartu-job-order?`;
const URL_GET_ALL_TERIMA_PUSAT_BY_DIVISI = `${baseurl}adminpusat/report/terima-produksi-by-divisi?`;
const URL_GET_ALL_KIRIM_PUSAT_BY_DIVISI = `${baseurl}adminpusat/report/kirim-produksi-by-divisi?`;
const URL_GET_ALL_MUTASI_STOCK_PUSAT_BY_DIVISI = `${baseurl}adminpusat/report/mutasi-stock-produksi-by-divisi?`;
const URL_GET_ALL_ADMIN_TERIMA_BATU = `${baseurl}adminpusat/report/admin-terima-batu?`;
const URL_GET_ALL_ADMIN_KIRIM_BATU = `${baseurl}adminpusat/report/admin-kirim-batu?`;
const URL_GET_ALL_ADMIN_MUTASI_STOCK_BATU = `${baseurl}adminpusat/report/admin-mutasi-stock-batu?`;
const URL_GET_ALL_ADMIN_RETUR_BATU = `${baseurl}adminpusat/report/admin-retur-batu?`;

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
  URL_GET_ALL_KIRIM_MARKETING_GUDANG_QC,
  URL_GET_ALL_MUTASI_STOCK_GUDANG_QC,
  URL_GET_ALL_CUSTOMER,
  URL_GET_ALL_NO_PO,
  URL_GET_ALL_INPUT_DRAFT_PO,
  URL_GET_ALL_JOB_PROCESSING,
  URL_GET_ALL_BATAL_JOB_ORDER,
  URL_GET_ALL_REPARASI_MASUK,
  URL_GET_ALL_NO_PO_REPARASI,
  URL_GET_ALL_REPARASI_KELUAR,
  URL_GET_ALL_NO_PO_REPARASI_KELUAR,
  URL_GET_ALL_PO_MASUK,
  URL_GET_ALL_PROSES_PRODUKSI,
  URL_GET_ALL_TAMBAH_BATU,
  URL_GET_ALL_AMBIL_BATU,
  URL_GET_ALL_RETUR_BATU_WAX,
  URL_GET_ALL_RETUR_BATU,
  URL_GET_ALL_SALDO_STOCK_BATU,
  URL_GET_ALL_KIRIM_BATU,
  URL_GET_ALL_KIRIM_BAHAN_ADMIN,
  URL_GET_ALL_MUTASI_STOCK_CASTING,
  URL_GET_ALL_KARTU_JOB_ORDER,
  URL_GET_ALL_TERIMA_PUSAT_BY_DIVISI,
  URL_GET_ALL_KIRIM_PUSAT_BY_DIVISI,
  URL_GET_ALL_MUTASI_STOCK_PUSAT_BY_DIVISI,
  URL_GET_ALL_ADMIN_TERIMA_BATU,
  URL_GET_ALL_ADMIN_KIRIM_BATU,
  URL_GET_ALL_ADMIN_MUTASI_STOCK_BATU,
  URL_GET_ALL_ADMIN_RETUR_BATU,
};

export default data;
