import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  let data_head = JSON.parse(localStorage.getItem("input_draft_po")) || [];
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [425, 410]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text(`Laporan INPUT DRAFT PO EXPORT`, 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "INPUT DRAFT PO EXPORT",
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
  let no = 1;

  dataGroupArr.forEach((element) => {
    tableColumn = [
      [
        {
          content: element[0].no_po_marketing,
          colSpan: 20,
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
          content: `DEADLINE`,
        },
        {
          content: element[0].tanggal_deadline,
          colSpan: 4,
        },
        {
          content: ``,
          colSpan: 7,
        },
        {
          content: `STONE`,
        },
        {
          content: ``,
        },
        {
          content: ``,
        },
        {
          content: ``,
        },
        {
          content: ``,
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
          content: `BERAT / PCS`,
        },
        {
          content: `EAW 10`,
        },
        {
          content: `EAW 14`,
        },
        {
          content: `EAW 18`,
        },
        {
          content: `EAY 10`,
        },
        {
          content: `EAY 14`,
        },
        {
          content: `EAY 18`,
        },
        {
          content: `TOTAL BERAT`,
        },
        {
          content: `KETERANGAN`,
        },
        {
          content: `PEMBAGIAN`,
        },
        {
          content: `RING SIZE`,
        },
        {
          content: `CLR`,
        },
        {
          content: `SIZE`,
        },
        {
          content: `JML`,
        },
        {
          content: `T. BERAT BATU`,
        },
        {
          content: `%`,
        },
      ],
    ];
    element.forEach((item) => {
      const row = [
        {
          content: item.no_job_order,
          colSpan: 20,
          styles: {
            halign: "left",
            fillColor: "#bbbbbb",
          },
        },
      ];
      const row2 = [
        {
          content: no,
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
          content: item.berat_pcs,
        },
        {
          content: item.eaw10,
        },
        {
          content: item.eaw14,
        },
        {
          content: item.eaw18,
        },
        {
          content: item.eay10,
        },
        {
          content: item.eay14,
        },
        {
          content: item.eay18,
        },
        {
          content: item.total_berat,
        },
        {
          content: item.keterangan,
        },
        {
          content: item.pembagian,
        },
        {
          content: item.ring_size,
        },
        {
          content: item.clr,
        },
        {
          content: item.size,
        },
        {
          content: item.jumlah,
        },
        {
          content: item.total_berat_batu,
        },
        {
          content: item.persen,
        },
      ];
      tableRows.push(row, row2);
      no++;
    });
  });

  const footer = [
    {
      content: "TOTAL :",
      colSpan: 4,
      styles: {
        halign: "center",
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.berat_pcs), 0).toFixed(3),
      styles: {
        halign: "center",
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
      },
      colSpan: 4,
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat), 0)
        .toFixed(3),
      colSpan: 4,
      styles: {
        halign: "right",
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat_batu), 0)
        .toFixed(3),
      colSpan: 7,
      styles: {
        halign: "right",
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
      },
    },
    {
      content:
        data.reduce((a, b) => a + parseFloat(b.persen), 0).toFixed(3) + " %",
      styles: {
        halign: "right",
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
      },
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
    <title>INPUT DRAFT PO EXPORT</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
