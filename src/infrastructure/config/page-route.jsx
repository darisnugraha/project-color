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
    path: "/notfound",
    title: "404 Not Found Page",
    component: () => <NotFound />,
  },
];

export default routes;
