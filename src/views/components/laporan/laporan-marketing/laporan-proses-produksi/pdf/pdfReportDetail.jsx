import { jsPDF } from "jspdf";
import "jspdf-autotable";
import service from "../../../../../../infrastructure/services/index";

const pdfReport = (data = "") => {
  let data_head = service.getLocal("proses_produksi") || [];
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [620, 310]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text(`Laporan Proses Produksi Detail`, 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "Proses Produksi Detail",
  });
  doc.text(`PERIODE : ${tgl_dari_string} s/d ${tgl_sampai_string}`, 14, 25);

  tableColumn = [
    [
      {
        content: `LAPORAN PROSES PRODUKSI (DETAIL)`,
        colSpan: 49,
      },
    ],
    [
      {
        content: `NO PO`,
        rowSpan: 3,
      },
      {
        content: `QTY`,
        rowSpan: 3,
      },
      {
        content: `BERAT`,
        rowSpan: 3,
      },
    ],
    [
      {
        content: `WAX`,
        colSpan: 2,
      },
      {
        content: `ADMIN`,
        colSpan: 2,
      },
      {
        content: `CASTING`,
        colSpan: 2,
      },
      {
        content: `FR`,
        colSpan: 2,
      },
      {
        content: `FILLING`,
        colSpan: 2,
      },
      {
        content: `TUMBLING`,
        colSpan: 2,
      },
      {
        content: `EC`,
        colSpan: 2,
      },
      {
        content: `BOOM`,
        colSpan: 2,
      },
      {
        content: `FR EPOXY`,
        colSpan: 2,
      },
      {
        content: `AMPLAS`,
        colSpan: 2,
      },
      {
        content: `AMPLAS EPOXY`,
        colSpan: 2,
      },
      {
        content: `EPOXY`,
        colSpan: 2,
      },
      {
        content: `MASTER`,
        colSpan: 2,
      },
      {
        content: `P. SPRU`,
        colSpan: 2,
      },
      {
        content: `SAMPLE`,
        colSpan: 2,
      },
      {
        content: `POLISHING`,
        colSpan: 2,
      },
      {
        content: `HANDSETTING`,
        colSpan: 2,
      },
      {
        content: `LASER`,
        colSpan: 2,
      },
      {
        content: `MARKING`,
        colSpan: 2,
      },
      {
        content: `PLATTING`,
        colSpan: 2,
      },
      {
        content: `GUDANG QC`,
        colSpan: 2,
      },
      {
        content: `SETOR MARKETING`,
        colSpan: 2,
      },
      {
        content: `SALDO PRODUKSI`,
        colSpan: 2,
      },
    ],
    [
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `QTY`,
      },
      {
        content: `BERAT`,
      },
    ],
  ];

  data.forEach((element) => {
    const row = [
      {
        content: element.no_po_marketing,
        styles: {
          halign: "center",
        },
      },
      {
        content: parseFloat(element.qty),
      },
      {
        content: parseFloat(element.berat).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_wax),
      },
      {
        content: parseFloat(element.berat_wax).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_admin),
      },
      {
        content: parseFloat(element.berat_admin).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_casting),
      },
      {
        content: parseFloat(element.berat_casting).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_fr),
      },
      {
        content: parseFloat(element.berat_fr).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_filling),
      },
      {
        content: parseFloat(element.berat_filling).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_tumbling),
      },
      {
        content: parseFloat(element.berat_tumbling).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_ec),
      },
      {
        content: parseFloat(element.berat_ec).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_boom),
      },
      {
        content: parseFloat(element.berat_boom).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_fr_epoxy),
      },
      {
        content: parseFloat(element.berat_fr_epoxy).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_amplas),
      },
      {
        content: parseFloat(element.berat_amplas).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_amplas_epoxy),
      },
      {
        content: parseFloat(element.berat_amplas_epoxy).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_epoxy),
      },
      {
        content: parseFloat(element.berat_epoxy).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_master),
      },
      {
        content: parseFloat(element.berat_master).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_polishing),
      },
      {
        content: parseFloat(element.berat_polishing).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_potong_spru),
      },
      {
        content: parseFloat(element.berat_potong_spru).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_sample),
      },
      {
        content: parseFloat(element.berat_sample).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_handsetting),
      },
      {
        content: parseFloat(element.berat_handsetting).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_laser),
      },
      {
        content: parseFloat(element.berat_laser).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_marking),
      },
      {
        content: parseFloat(element.berat_marking).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_platting),
      },
      {
        content: parseFloat(element.berat_platting).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_gudang_qc),
      },
      {
        content: parseFloat(element.berat_gudang_qc).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_setor_marketing),
      },
      {
        content: parseFloat(element.berat_setor_marketing).toFixed(3),
      },
      {
        content: parseFloat(element.jumlah_saldo_produksi),
      },
      {
        content: parseFloat(element.berat_saldo_produksi).toFixed(3),
      },
    ];
    tableRows.push(row);
  });

  const footer = [
    {
      content: "GRAND TOTAL",
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.qty), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.berat), 0).toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_wax), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.berat_wax), 0).toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_admin), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_admin), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_casting), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_casting), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_fr), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.berat_fr), 0).toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_filling), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_filling), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_tumbling), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_tumbling), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_ec), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.berat_ec), 0).toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_boom), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_boom), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_fr_epoxy), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_fr_epoxy), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_amplas), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_amplas), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_amplas_epoxy), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_amplas_epoxy), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_epoxy), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_epoxy), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_master), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_master), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_potong_spru), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_potong_spru), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_sample), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_sample), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_polishing), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_polishing), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_handsetting), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_handsetting), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_laser), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_laser), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_marking), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_marking), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_platting), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_platting), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.jumlah_gudang_qc), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_gudang_qc), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce(
        (a, b) => a + parseFloat(b.jumlah_setor_marketing),
        0
      ),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_setor_marketing), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce(
        (a, b) => a + parseFloat(b.jumlah_saldo_produksi),
        0
      ),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.berat_saldo_produksi), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
  ];
  tableRows.push(footer);

  const printedtotal = [
    {
      content: `printed by admin`,
      colSpan: 49,
      styles: {
        fontStyle: "italic",
        textColor: "#000",
        halign: "left",
      },
    },
  ];
  tableRows.push(printedtotal);

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
      halign: "right",
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
    <title>Proses Produksi Detail</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
