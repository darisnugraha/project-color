import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  let data_head = JSON.parse(localStorage.getItem("kirim_by_divisi_head")) || [];
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text("Laporan KIRIM PLATTING", 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "KIRIM PLATTING",
  });
  doc.text(`PERIODE : ${tgl_dari_string} s/d ${tgl_sampai_string}`, 14, 25);

  tableColumn = [
    [
      {
        content: `TANGGAL`,
      },
      {
        content: `NO JOB ORDER`,
      },
      {
        content: `KODE BARANG`,
      },
      {
        content: `NAMA BARANG`,
      },
      {
        content: `JENIS BAHAN`,
      },
      {
        content: `JML KIRIM`,
      },
      {
        content: `BRT KIRIM`,
      },
      {
        content: `JML RUSAK`,
      },
      {
        content: `BRT RUSAK`,
      },
      {
        content: `JML SPAREPART`,
      },
      {
        content: `BRT SPAREPART`,
      },
      {
        content: `SUSUT`,
      },
      {
        content: `DESIGN`,
      },
    ],
  ];

  const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  const dataGroup = groupBy(data, "kode_jenis");
  const dataGroupArr = Object.values(dataGroup);

  dataGroupArr.forEach((element) => {
    let jmlkirim = 0;
    let brtkirim = 0;
    let jmlrusak = 0;
    let brtrusak = 0;
    let jmlsparepart = 0;
    let brtsparepart = 0;
    let susut = 0;

    const rowKirim = [
      {
        content: "Kode Jenis : " + element[0].kode_jenis,
        styles: {
          halign: "left",
          fillColor: "#bbbbbb",
        },
        colSpan: 6,
      },
      {
        content: "",
        styles: {
          halign: "left",
          fillColor: "#bbbbbb",
        },
        colSpan: 7,
      },
    ];
    tableRows.push(rowKirim);
    element.forEach((item) => {
      jmlkirim = jmlkirim + parseFloat(item.jumlah_kirim);
      brtkirim = brtkirim + parseFloat(item.berat_kirim);
      jmlrusak = jmlrusak + parseFloat(item.jumlah_rusak);
      brtrusak = brtrusak + parseFloat(item.berat_rusak);
      jmlsparepart = jmlsparepart + parseFloat(item.jumlah_sparepart);
      brtsparepart = brtsparepart + parseFloat(item.berat_sparepart);
      susut = susut + parseFloat(item.susut);

      const row = [
        {
          content: item.tanggal_kirim,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.no_job_order,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.kode_barang,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.nama_barang,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.kode_jenis_bahan,
          styles: {
            halign: "center",
          },
        },
        {
          content: item.jumlah_kirim,
        },
        {
          content: item.berat_kirim,
        },
        {
          content: item.jumlah_rusak,
        },
        {
          content: item.berat_rusak,
        },
        {
          content: item.jumlah_sparepart,
        },
        {
          content: item.berat_sparepart,
        },
        {
          content: item.susut,
        },
        {
          content: item.design,
        },
      ];
      tableRows.push(row);
    });
    const rowFoot = [
      {
        content: "Sub Total :",
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
        colSpan: 5,
      },
      {
        content: jmlkirim.toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: brtkirim.toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: jmlrusak.toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: brtrusak.toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: jmlsparepart.toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: brtsparepart.toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: susut.toFixed(3),
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
      {
        content: "",
        styles: {
          halign: "right",
          fillColor: "#dddddd",
        },
      },
    ];
    tableRows.push(rowFoot);
  });

  let jmlkirimAll = 0;
  let brtkirimAll = 0;
  let jmlrusakAll = 0;
  let brtrusakAll = 0;
  let jmlsparepartAll = 0;
  let brtsparepartAll = 0;
  let susutAll = 0;

  data.forEach((element) => {
    jmlkirimAll = jmlkirimAll + parseFloat(element.jumlah_kirim);
    brtkirimAll = brtkirimAll + parseFloat(element.berat_kirim);
    jmlrusakAll = jmlrusakAll + parseFloat(element.jumlah_rusak);
    brtrusakAll = brtrusakAll + parseFloat(element.berat_rusak);
    jmlsparepartAll = jmlsparepartAll + parseFloat(element.jumlah_sparepart);
    brtsparepartAll = brtsparepartAll + parseFloat(element.berat_sparepart);
    susutAll = susutAll + parseFloat(element.susut);
  });

  const footer = [
    {
      content: "Grand Total :",
      colSpan: 5,
    },
    {
      content: jmlkirimAll.toFixed(3),
    },
    {
      content: brtkirimAll.toFixed(3),
    },
    {
      content: jmlrusakAll.toFixed(3),
    },
    {
      content: brtrusakAll.toFixed(3),
    },
    {
      content: jmlsparepartAll.toFixed(3),
    },
    {
      content: brtsparepartAll.toFixed(3),
    },
    {
      content: susutAll.toFixed(3),
    },
  ];
  tableRows.push(footer);

  const printed = [
    {
      content: `Printed By Admin`,
      colSpan: 12,
      styles: {
        fontStyle: "italic",
        textColor: "#000",
        halign: "left",
      },
    },
  ];
  tableRows.push(printed);

  doc.autoTable({
    head: tableColumn,
    body: tableRows,
    startY: finalY,
    theme: "plain",
    margin: { top: 10 },
    bodyStyles: {
      fontSize: 8,
      halign: "right",
    },
    headStyles: {
      fontSize: 8,
      fillColor: "#E8E5E5",
      textColor: "#000",
      valign: "middle",
      halign: "center",
    },
    tableLineColor: [255, 255, 255],
    tableLineWidth: 1,
  });
  tableRows = [];
  tableColumn = [];
  finalY = doc.autoTableEndPosY() + 20;

  const pages = doc.internal.getNumberOfPages();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  doc.setFontSize(10);
  for (let j = 1; j < pages + 1; j += 1) {
    const horizontalPos = pageWidth / 2;
    const verticalPos = pageHeight - 10;
    doc.setPage(j);
    doc.text(`${j} of ${pages}`, horizontalPos, verticalPos, {
      align: "center",
    });
  }
  const string = doc.output("bloburl");
  const x = window.open();
  x.document.open();
  x.document.write(
    `<html>
    <head>
    <title>KIRIM PLATTING</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
