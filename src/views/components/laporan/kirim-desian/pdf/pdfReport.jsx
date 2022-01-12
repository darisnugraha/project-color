import { jsPDF } from "jspdf";
import "jspdf-autotable";
import service from "../../../../../infrastructure/services/index";

const pdfReport = (data = "") => {
  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let data_head = service.getLocal("kirim_desain_head");
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;

  let finalY = 30;
  doc.text("Laporan Kirim per Desain", 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "Kirim per Desain",
  });
  doc.text(`PERIODE : ${tgl_dari_string} s/d ${tgl_sampai_string}`, 14, 25);

  tableColumn = [
    [
      {
        content: `TGL`,
        rowSpan: 2,
      },
      {
        content: `JENIS`,
        rowSpan: 2,
      },
      {
        content: `P.spru`,
        colSpan: 5,
      },
      {
        content: `TOTAL`,
        colSpan: 5,
      },
    ],
    [
      {
        content: `BG`,
      },
      {
        content: `R`,
      },
      {
        content: `P`,
      },
      {
        content: `E`,
      },
      {
        content: `LAIN - LAIN`,
      },
      {
        content: `BG`,
      },
      {
        content: `R`,
      },
      {
        content: `P`,
      },
      {
        content: `E`,
      },
      {
        content: `LAIN - LAIN`,
      },
    ],
  ];

  let BG = 0;
  let R = 0;
  let P = 0;
  let E = 0;

  let BG_NOTA = 0;
  let R_NOTA = 0;
  let P_NOTA = 0;
  let E_NOTA = 0;

  let lain_lain = 0;
  let lain_lain_nota = 0;

  data.forEach((element) => {
    if (element.jenis === "BG") {
      BG = parseFloat(element.berat_kirim);
      BG_NOTA = parseFloat(element.nota);
    } else if (element.jenis === "R") {
      R = parseFloat(element.berat_kirim);
      R_NOTA = parseFloat(element.nota);
    } else if (element.jenis === "P") {
      P = parseFloat(element.berat_kirim);
      P_NOTA = parseFloat(element.nota);
    } else if (element.jenis === "E") {
      E = parseFloat(element.berat_kirim);
      E_NOTA = parseFloat(element.nota);
    } else {
      lain_lain += parseFloat(element.berat_kirim);
      lain_lain_nota += parseFloat(element.nota);
    }

    const row = [
      {
        content: element.tanggal,
        styles: {
          halign: "center",
        },
        rowSpan: 2,
      },
      {
        content: "Nota",
        styles: {
          halign: "center",
        },
      },
      {
        content: BG_NOTA.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: R_NOTA.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: P_NOTA.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: E_NOTA.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: lain_lain_nota.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: BG_NOTA.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: R_NOTA.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: P_NOTA.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: E_NOTA.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: lain_lain_nota.toFixed(3),
        styles: {
          halign: "center",
        },
      },
    ];
    const row_dua = [
      {
        content: "Berat",
        styles: {
          halign: "center",
        },
      },
      {
        content: BG.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: R.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: P.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: E.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: lain_lain.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: BG.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: R.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: P.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: E.toFixed(3),
        styles: {
          halign: "center",
        },
      },
      {
        content: lain_lain.toFixed(3),
        styles: {
          halign: "center",
        },
      },
    ];
    tableRows.push(row, row_dua);
  });

  const footer = [];
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
    <title>Kirim per Desain</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
