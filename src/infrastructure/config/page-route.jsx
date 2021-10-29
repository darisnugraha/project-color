import React from "react";
// import { Redirect } from "react-router";

import Login from "../../views/pages/auth/login/login";
import DashboardV3 from "../../views/pages/dashboard/dashboard-v3.js";
import StockGlobalProduksi from "../../views/pages/laporan/stock-global-produksi";
import KirimSaldoTahunan from "../../views/pages/laporan/kirim-saldo-tahunan";
import SaldoBahan from "../../views/pages/laporan/saldo-bahan";
import NotFound from "../../views/pages/notfound";

const routes = [
  // {
  //   path: "/",
  //   exact: true,
  //   component: () => <Redirect to="/user/login-v3" />,
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
    component: () => <DashboardV3 />,
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
    path: "/notfound",
    title: "404 Not Found Page",
    component: () => <NotFound />,
  },
];

export default routes;
