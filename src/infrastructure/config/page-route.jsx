import React from "react";
// import { Redirect } from "react-router";

import Login from "../../views/pages/auth/login/login";
import Dashboard from "../../views/pages/dashboard/dashboard";
import StockGlobalProduksi from "../../views/pages/laporan/stock-global-produksi";
import KirimSaldoTahunan from "../../views/pages/laporan/kirim-saldo-tahunan";
import SaldoBahan from "../../views/pages/laporan/saldo-bahan";
import StockAdmin from "../../views/pages/laporan/stock-admin";
import KirimDesian from "../../views/pages/laporan/kirim-desian";
import KirimSaldoDivisi from "../../views/pages/laporan/kirim-saldo-divisi";
import NotFound from "../../views/pages/notfound";
import KirimCasting from "../../views/pages/laporan-admin-pusat/laporan-CON/kirim-casting";
import TerimaCasting from "../../views/pages/laporan-admin-pusat/laporan-CON/terima-casting";
import KirimBarangProduksi from "../../views/pages/laporan-admin-pusat/laporan-CON/kirim-barang-produksi";
import TerimaBarangProduksi from "../../views/pages/laporan-admin-pusat/laporan-CON/terima-barang-produksi";
import TambahJobOrder from "../../views/pages/laporan-admin-pusat/laporan-CON/tambah-job-order";
import KirimBarang from "../../views/pages/laporan-admin-pusat/laporan-barang/kirim-barang";
import TerimaBarang from "../../views/pages/laporan-admin-pusat/laporan-barang/terima-barang";
import KirimPlatting from "../../views/pages/laporan-produksi/platting/kirim-platting";
import KirimByDivisi from "../../views/pages/laporan-produksi/kirim-by-divisi";
import KirimPolishing from "../../views/pages/laporan-produksi/polishing/kirim-polishing";
import TerimaByDivisi from "../../views/pages/laporan-produksi/terima-by-divisi";
import MutasiSaldo from "../../views/pages/laporan-produksi/mutasi-saldo-by-divisi";
import MutasiOutstand from "../../views/pages/laporan-produksi/mutasi-outstand-by-divisi";
import MutasiHistory from "../../views/pages/laporan-produksi/mutasi-history-by-divisi";
import AnalysisStock from "../../views/pages/laporan-produksi/analysis-stock-by-divisi";
import TerimaBatuByDivisi from "../../views/pages/laporan-produksi/terima-batu-by-divisi";
import SampleTerimaBahan from "../../views/pages/laporan-produksi/sample-terima-bahan";
import TerimaSubDivisi from "../../views/pages/laporan-produksi/terima-sub-divisi";
import SaldoSubDivisi from "../../views/pages/laporan-produksi/saldo-sub-divisi";
import TerimaGudanQC from "../../views/pages/gudang-qc/terima-gudang-qc";
import KirimGudangQC from "../../views/pages/gudang-qc/kirim-gudang-qc";
import KirimMarketingGudangQC from "../../views/pages/gudang-qc/kirim-marketing-gudang-qc";
import MutasiStockGudangQC from "../../views/pages/gudang-qc/mutasi-stock-gudang-qc";
import InputDraftPO from "../../views/pages/laporan-marketing/laporan-input-draft-po";
import JobProcessing from "../../views/pages/laporan-marketing/laporan-job-processing";
import BatalJobOrder from "../../views/pages/laporan-marketing/laporan-batal-job-order";
import ReparasiMasuk from "../../views/pages/laporan-marketing/laporan-reparasi-masuk";
import ReparasiKeluar from "../../views/pages/laporan-marketing/laporan-reparasi-keluar";
import LaporanPOMasuk from "../../views/pages/laporan-marketing/laporan-po-masuk";
import ProsesProduksi from "../../views/pages/laporan-marketing/laporan-proses-produksi";
import TambahBatu from "../../views/pages/laporan-admin-batu/laporan-tambah-batu";
import AmbilBatu from "../../views/pages/laporan-admin-batu/laporan-ambil-batu";
import ReturBatuWax from "../../views/pages/laporan-admin-batu/laporan-retur-batu-wax";
import ReturBatu from "../../views/pages/laporan-admin-batu/laporan-retur-batu";
import SaldoStockBatu from "../../views/pages/laporan-admin-batu/laporan-saldo-stock-batu";
import KirimBatu from "../../views/pages/laporan-admin-batu/laporan-kirim-batu";

const routes = [
  // {
  //   path: "*",
  //   exact: true,
  //   component: () => <Redirect to="/notfound" />,
  // },
  {
    path: "/",
    title: "Login",
    exact: true,
    component: () => <Login />,
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    component: () => <Dashboard />,
  },
  {
    path: "/laporan/stock-global-produksi",
    title: "Laporan Stock Global Produksi",
    component: () => <StockGlobalProduksi />,
  },
  {
    path: "/laporan/kirim-saldo-tahunan",
    title: "Laporan Kirim dan Saldo per Tahun",
    component: () => <KirimSaldoTahunan />,
  },
  {
    path: "/laporan/saldo-bahan",
    title: "Laporan Saldo Bahan",
    component: () => <SaldoBahan />,
  },
  {
    path: "/laporan/stock-admin",
    title: "Laporan Stock Admin",
    component: () => <StockAdmin />,
  },
  {
    path: "/laporan/kirim-desain",
    title: "Laporan Kirim per Desain",
    component: () => <KirimDesian />,
  },
  {
    path: "/laporan/kirim-saldo-divisi",
    title: "Laporan Kirim dan Saldo per Divisi",
    component: () => <KirimSaldoDivisi />,
  },
  //laporan admin pusat
  {
    path: "/laporan-admin-pusat/con/kirim-casting",
    title: "Laporan Kirim Casting",
    component: () => <KirimCasting />,
  },
  {
    path: "/laporan-admin-pusat/con/terima-casting",
    title: "Laporan Terima Casting",
    component: () => <TerimaCasting />,
  },
  {
    path: "/laporan-admin-pusat/con/kirim-barang-produksi",
    title: "Laporan Kirim Barang Produksi",
    component: () => <KirimBarangProduksi />,
  },
  {
    path: "/laporan-admin-pusat/con/terima-barang-produksi",
    title: "Laporan Terima Barang Produksi",
    component: () => <TerimaBarangProduksi />,
  },
  {
    path: "/laporan-admin-pusat/con/tambah-job-order",
    title: "Laporan Tambah Job Order",
    component: () => <TambahJobOrder />,
  },
  {
    path: "/laporan-admin-pusat/barang/kirim-barang",
    title: "Laporan Kirim Barang",
    component: () => <KirimBarang />,
  },
  {
    path: "/laporan-admin-pusat/barang/terima-barang",
    title: "Laporan Terima Barang",
    component: () => <TerimaBarang />,
  },
  {
    path: "/laporan-produksi/kirim-by-divisi",
    title: "Laporan Kirim By Divisi",
    component: () => <KirimByDivisi />,
  },
  {
    path: "/laporan-produksi/platting/kirim-platting",
    title: "Laporan Kirim Platting",
    component: () => <KirimPlatting />,
  },
  {
    path: "/laporan-produksi/polishing/kirim-polishing",
    title: "Laporan Kirim Polishing",
    component: () => <KirimPolishing />,
  },
  {
    path: "/laporan-produksi/terima-by-divisi",
    title: "Laporan Terima By Divisi",
    component: () => <TerimaByDivisi />,
  },
  {
    path: "/laporan-produksi/mutasi-saldo-by-divisi",
    title: "Laporan Mutasi Saldo By Divisi",
    component: () => <MutasiSaldo />,
  },
  {
    path: "/laporan-produksi/mutasi-outstand-by-divisi",
    title: "Laporan Mutasi Outstand By Divisi",
    component: () => <MutasiOutstand />,
  },
  {
    path: "/laporan-produksi/mutasi-history-by-divisi",
    title: "Laporan Mutasi History By Divisi",
    component: () => <MutasiHistory />,
  },
  {
    path: "/laporan-produksi/analysis-stock-by-divisi",
    title: "Laporan Analysis Stock By Divisi",
    component: () => <AnalysisStock />,
  },
  {
    path: "/laporan-produksi/terima-batu-by-divisi",
    title: "Laporan Terima Batu By Divisi",
    component: () => <TerimaBatuByDivisi />,
  },
  {
    path: "/laporan-produksi/sample-terima-bahan",
    title: "Laporan Sample Terima Bahan",
    component: () => <SampleTerimaBahan />,
  },
  {
    path: "/laporan-produksi/terima-sub-divisi",
    title: "Laporan Terima Sub Divisi",
    component: () => <TerimaSubDivisi />,
  },
  {
    path: "/laporan-produksi/saldo-sub-divisi",
    title: "Laporan Saldo Sub Divisi",
    component: () => <SaldoSubDivisi />,
  },
  {
    path: "/laporan-gudang-qc/terima",
    title: "Laporan Terima Gudang QC",
    component: () => <TerimaGudanQC />,
  },
  {
    path: "/laporan-gudang-qc/kirim",
    title: "Laporan Kirim Gudang QC",
    component: () => <KirimGudangQC />,
  },
  {
    path: "/laporan-gudang-qc/kirim-marketing",
    title: "Laporan Kirim Marketing Gudang QC",
    component: () => <KirimMarketingGudangQC />,
  },
  {
    path: "/laporan-gudang-qc/mutasi-stock",
    title: "Laporan Mutasi Stock Gudang QC",
    component: () => <MutasiStockGudangQC />,
  },
  {
    path: "/laporan-marketing/input-draft-po",
    title: "Laporan Input Draft PO",
    component: () => <InputDraftPO />,
  },
  {
    path: "/laporan-marketing/job-processing",
    title: "Laporan Job Processing",
    component: () => <JobProcessing />,
  },
  {
    path: "/laporan-marketing/batal-job-order",
    title: "Laporan Batal Job Order",
    component: () => <BatalJobOrder />,
  },
  {
    path: "/laporan-marketing/reparasi-masuk",
    title: "Laporan Reparasi Masuk",
    component: () => <ReparasiMasuk />,
  },
  {
    path: "/laporan-marketing/reparasi-keluar",
    title: "Laporan Reparasi Keluar",
    component: () => <ReparasiKeluar />,
  },
  {
    path: "/laporan-marketing/po-masuk",
    title: "Laporan PO Masuk",
    component: () => <LaporanPOMasuk />,
  },
  {
    path: "/laporan-marketing/proses-produksi",
    title: "Laporan Proses Produksi",
    component: () => <ProsesProduksi />,
  },
  {
    path: "/laporan-admin-batu/tambah-batu",
    title: "Laporan Tambah Batu",
    component: () => <TambahBatu />,
  },
  {
    path: "/laporan-admin-batu/ambil-batu",
    title: "Laporan Ambil Batu",
    component: () => <AmbilBatu />,
  },
  {
    path: "/laporan-admin-batu/retur-wax-batu",
    title: "Laporan Retur Batu Wax",
    component: () => <ReturBatuWax />,
  },
  {
    path: "/laporan-admin-batu/retur-batu",
    title: "Laporan Retur Batu",
    component: () => <ReturBatu />,
  },
  {
    path: "/laporan-admin-batu/saldo-stock-batu",
    title: "Laporan Saldo Stock Batu",
    component: () => <SaldoStockBatu />,
  },
  {
    path: "/laporan-admin-batu/kirim-batu",
    title: "Laporan Kirim Batu",
    component: () => <KirimBatu />,
  },
  {
    path: "/notfound",
    title: "404 Not Found Page",
    component: () => <NotFound />,
  },
];

export default routes;
