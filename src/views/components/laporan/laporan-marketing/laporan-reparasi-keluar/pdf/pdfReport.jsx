import { jsPDF } from "jspdf";
import "jspdf-autotable";
import service from "../../../../../../infrastructure/services/index";

const pdfReport = (data = "") => {
  let data_head = service.getLocal("reparasi_keluar") || [];
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [425, 410]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text(`Laporan REPARASI KELUAR`, 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "REPARASI KELUAR",
  });
  doc.text(`PERIODE : ${tgl_dari_string} s/d ${tgl_sampai_string}`, 14, 25);

  const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  const dataGroup = groupBy(data || [], "no_po_marketing");
  const dataGroupArr = Object.values(dataGroup);

  dataGroupArr.forEach((element) => {
    tableColumn = [
      [
        {
          content: element[0].no_po_marketing,
          colSpan: 14,
        },
      ],
      [
        {
          content: `TANGGAL ORDER`,
          colSpan: 2,
        },
        {
          content: element[0].tanggal_order,
        },
        {
          content: `TANGGAL SELESAI`,
        },
        {
          content: element[0].tanggal_selesai,
        },
        {
          content: "",
          colSpan: 9,
        },
      ],
      [
        {
          content: `NO`,
        },
        {
          content: `KODE BARANG`,
        },
        {
          content: `NAMA BARANG`,
        },
        {
          content: `GAMBAR`,
        },
        {
          content: `KETERANGAN`,
        },
        {
          content: `ONGKOS`,
        },
        {
          content: `BERAT / PCS`,
        },
        {
          content: `AWH 75`,
        },
        {
          content: `AYL 75`,
        },
        {
          content: `AYL 70`,
        },
        {
          content: `AWH 375`,
        },
        {
          content: `AYL 375`,
        },
        {
          content: `ALLOY`,
        },
        {
          content: `TOTAL BERAT`,
        },
      ],
    ];
    element.forEach((item) => {
      const row = [
        {
          content: item.no_job_order,
          colSpan: 14,
          styles: {
            halign: "left",
            fillColor: "#bbbbbb",
          },
        },
      ];
      const row2 = [
        {
          content: item.no,
        },
        {
          content: item.kode_barang,
        },
        {
          content: item.nama_barang,
        },
        {
          content: item.gambar,
        },
        {
          content: item.keterangan,
        },
        {
          content: item.ongkos,
          styles: {
            halign: "right",
          },
        },
        {
          content: item.berat_pcs,
          styles: {
            halign: "right",
          },
        },
        {
          content: item.awh75,
        },
        {
          content: item.ayl75,
        },
        {
          content: item.ayl70,
        },
        {
          content: item.awh375,
        },
        {
          content: item.ayl375,
        },
        {
          content: item.alloy,
        },
        {
          content: item.total_berat,
          styles: {
            halign: "right",
          },
        },
      ];
      tableRows.push(row, row2);
    });
  });

  const footer = [
    {
      content: "Total",
      colSpan: 5,
      styles: {
        halign: "right",
        fillColor: "#aaa9a8",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.ongkos), 0).toFixed(3),
      styles: {
        halign: "right",
        fillColor: "#aaa9a8",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.berat_pcs), 0).toFixed(3),
      styles: {
        halign: "right",
        fillColor: "#aaa9a8",
      },
    },
    {
      content: data
        .reduce(
          (a, b) =>
            a +
            parseFloat(b.awh75) +
            parseFloat(b.ayl75) +
            parseFloat(b.ayl70) +
            parseFloat(b.awh375) +
            parseFloat(b.ayl375) +
            parseFloat(b.alloy),
          0
        )
        .toFixed(3),
      colSpan: 6,
      styles: {
        halign: "center",
        fillColor: "#aaa9a8",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat), 0)
        .toFixed(3),
      styles: {
        halign: "right",
        fillColor: "#aaa9a8",
      },
    },
  ];
  tableRows.push(footer);

  const printed = [
    {
      content: `Printed By Admin`,
      colSpan: 14,
      styles: {
        lineWidth: 0,
        lineColor: [0, 0, 0],
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
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
      fontSize: 8,
      halign: "center",
    },
    headStyles: {
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
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
    <title>REPARASI KELUAR</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
