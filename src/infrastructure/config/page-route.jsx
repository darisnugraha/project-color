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
    path: "/notfound",
    title: "404 Not Found Page",
    component: () => <NotFound />,
  },
];

export default routes;
