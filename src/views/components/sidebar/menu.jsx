const Menu = [
  { path: "/dashboard", icon: "fa fa-home", title: "Dashboard" },
  {
    path: "/laporan",
    icon: "fa fa-book",
    title: "Laporan",
    children: [
      {
        path: "/laporan/stock-global-produksi",
        title: "Stock Global Produksi",
      },
      {
        path: "/laporan/kirim-saldo-tahunan",
        title: "Kirim dan Saldo per Tahun",
      },
      {
        path: "/laporan/saldo-bahan",
        title: "Saldo Bahan",
      },
    ],
  },
];

export default Menu;
