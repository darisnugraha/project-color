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
      {
        path: "/laporan/stock-admin",
        title: "Stock Admin",
      },
      {
        path: "/laporan/kirim-desain",
        title: "Kirim per Desain",
      },
      {
        path: "/laporan/kirim-saldo-divisi",
        title: "Kirim dan Saldo per Divisi",
      },
    ],
  },
  {
    path: "/laporan-admin-pusat",
    icon: "fa fa-book",
    title: "Laporan Admin Pusat",
    children: [
      {
        path: "/laporan-admin-pusat/con",
        title: "CON",
        children: [
          {
            path: "/laporan-admin-pusat/con/kirim-casting",
            title: "Kirim Casting",
          },
          {
            path: "/laporan-admin-pusat/con/terima-casting",
            title: "Terima Casting",
          },
          {
            path: "/laporan-admin-pusat/con/kirim-barang-produksi",
            title: "Kirim Barang Produksi",
          },
          {
            path: "/laporan-admin-pusat/con/terima-barang-produksi",
            title: "Terima Barang Produksi",
          },
          {
            path: "/laporan-admin-pusat/con/tambah-job-order",
            title: "Tambah Job Order",
          },
          {
            path: "/laporan-admin-pusat/con/susut",
            title: "Susut",
          },
        ],
      },
      {
        path: "/laporan-admin-pusat/barang",
        title: "Barang",
        children: [
          {
            path: "/laporan-admin-pusat/barang/kirim-barang",
            title: "Kirim Barang",
          },
          {
            path: "/laporan-admin-pusat/barang/terima-barang",
            title: "Terima Barang",
          },
        ],
      },
    ],
  },
];

export default Menu;
