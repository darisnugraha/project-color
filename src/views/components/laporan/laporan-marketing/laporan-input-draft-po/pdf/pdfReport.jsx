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
  doc.text(`Laporan INPUT DRAFT PO`, 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "INPUT DRAFT PO",
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
        data
          .reduce(
            (a, b) =>
              a +
              (parseFloat(b.total_berat_batu) / parseFloat(b.total_berat)) *
                100,
            0
          )
          .toFixed(3) + " %",
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

  let tableColumnDua = [
    [
      {
        content: "BERAT 16K",
      },
      {
        content: "BERAT BATU",
      },
      {
        content: "TOTAL 18K",
      },
    ],
  ];

  let tableRowsDua = [];

  let rowsk = [
    {
      content: data
        .reduce(
          (a, b) =>
            a +
            (parseFloat(b.total_berat70) - parseFloat(b.total_berat_batu70)),
          0
        )
        .toFixed(3),
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat_batu70), 0)
        .toFixed(3),
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat70), 0)
        .toFixed(3),
    },
  ];
  tableRowsDua.push(rowsk);
  let row24k = [
    {
      content: "TOTAL 24K",
      styles: {
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
        fontSize: 8,
        fillColor: "#E8E5E5",
        textColor: "#000",
        valign: "middle",
        halign: "center",
      },
    },
    {
      content: "",
      styles: {
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
        fontSize: 8,
        fillColor: "#E8E5E5",
        textColor: "#000",
        valign: "middle",
        halign: "center",
      },
    },
    {
      content: "",
      styles: {
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
        fontSize: 8,
        fillColor: "#E8E5E5",
        textColor: "#000",
        valign: "middle",
        halign: "center",
      },
    },
  ];
  tableRowsDua.push(row24k);

  let rows24k = [
    {
      content: data
        .reduce(
          (a, b) =>
            a +
            (parseFloat(b.total_berat70) - parseFloat(b.total_berat_batu70)) *
              0.7,
          0
        )
        .toFixed(3),
    },
    {
      content: "",
    },
    {
      content: "",
    },
  ];
  tableRowsDua.push(rows24k);

  doc.autoTable({
    head: tableColumnDua,
    body: tableRowsDua,
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
  tableRowsDua = [];
  tableColumnDua = [];
  finalY = doc.autoTableEndPosY() + 20;

  let tableColumnTiga = [
    [
      {
        content: "BERAT 18K",
      },
      {
        content: "BERAT BATU",
      },
      {
        content: "TOTAL 18K",
      },
    ],
  ];

  let tableRowsTiga = [];

  let rowskdua = [
    {
      content: data
        .reduce(
          (a, b) =>
            a +
            (parseFloat(b.total_berat75) - parseFloat(b.total_berat_batu75)),
          0
        )
        .toFixed(3),
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat_batu75), 0)
        .toFixed(3),
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat75), 0)
        .toFixed(3),
    },
  ];
  tableRowsTiga.push(rowskdua);

  let row24kdua = [
    {
      content: "TOTAL 24K",
      styles: {
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
        fontSize: 8,
        fillColor: "#E8E5E5",
        textColor: "#000",
        valign: "middle",
        halign: "center",
      },
    },
    {
      content: "",
      styles: {
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
        fontSize: 8,
        fillColor: "#E8E5E5",
        textColor: "#000",
        valign: "middle",
        halign: "center",
      },
    },
    {
      content: "",
      styles: {
        lineWidth: 0.5,
        lineColor: [0, 0, 0],
        fontSize: 8,
        fillColor: "#E8E5E5",
        textColor: "#000",
        valign: "middle",
        halign: "center",
      },
    },
  ];
  tableRowsTiga.push(row24kdua);

  let rows24kdua = [
    {
      content: data
        .reduce(
          (a, b) =>
            a +
            (parseFloat(b.total_berat75) - parseFloat(b.total_berat_batu75)) *
              0.75,
          0
        )
        .toFixed(3),
    },
    {
      content: "",
    },
    {
      content: "",
    },
  ];
  tableRowsTiga.push(rows24kdua);

  doc.autoTable({
    head: tableColumnTiga,
    body: tableRowsTiga,
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
  tableRowsTiga = [];
  tableColumnTiga = [];
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
    <title>INPUT DRAFT PO</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
