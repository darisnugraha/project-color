import { jsPDF } from "jspdf";
import "jspdf-autotable";
import service from "../../../../../../infrastructure/services/index";

const pdfReport = (data = "") => {
  let data_head = service.getLocal("po_masuk") || [];
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("p", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text(`Laporan PO MASUK FORMAT BARU`, 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 170, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "PO MASUK FORMAT BARU",
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

  const dataGroup = groupBy(data || [], "bulan");
  const dataGroupArr = Object.values(dataGroup);

  tableColumn = [
    [
      {
        content: `TOTAL MASUK PO`,
        colSpan: 3,
      },
    ],
    [
      {
        content: `BULAN`,
      },
      {
        content: `PCS`,
      },
      {
        content: `BERAT`,
      },
    ],
  ];

  data.forEach((element) => {
    const row = [
      {
        content: element.bulan,
        styles: {
          halign: "center",
        },
      },
      {
        content: parseFloat(element.pcs),
      },
      {
        content: parseFloat(element.berat).toFixed(3),
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
      content: data.reduce((a, b) => a + parseFloat(b.pcs), 0),
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
  ];
  tableRows.push(footer);

  const printedtotal = [
    {
      content: ``,
      colSpan: 3,
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

  //TableCustomer
  let tableColumnCustomer = [];
  let tableRowsCustomer = [];

  tableColumnCustomer = [
    [
      {
        content: `PER CUSTOMER BARANG`,
        colSpan: 11,
      },
    ],
    [
      {
        content: `SPL 3`,
        colSpan: 3,
      },
      {
        content: `SPL 1`,
        colSpan: 2,
      },
      {
        content: `JR`,
        colSpan: 2,
      },
      {
        content: `NIM`,
        colSpan: 2,
      },
      {
        content: `NIJ`,
        colSpan: 2,
      },
    ],
    [
      {
        content: `PCS`,
        colSpan: 2,
      },
      {
        content: `BERAT`,
      },
      {
        content: `PCS`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `PCS`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `PCS`,
      },
      {
        content: `BERAT`,
      },
      {
        content: `PCS`,
      },
      {
        content: `BERAT`,
      },
    ],
  ];

  dataGroupArr.forEach((item) => {
    const rowbulan = [
      {
        content: "BULAN : " + item[0].bulan,
        colSpan: 11,
        styles: {
          halign: "left",
          fillColor: "#bab5b5",
        },
      },
    ];
    tableRowsCustomer.push(rowbulan);
    item.forEach((element) => {
      const rowcustomer = [
        {
          content: parseFloat(element.total_stock_spl3),
          colSpan: 2,
        },
        {
          content: parseFloat(element.total_berat_spl3).toFixed(3),
        },
        {
          content: parseFloat(element.total_stock_spl1),
        },
        {
          content: parseFloat(element.total_berat_spl1).toFixed(3),
        },
        {
          content: parseFloat(element.total_stock_jr),
        },
        {
          content: parseFloat(element.total_berat_jr).toFixed(3),
        },
        {
          content: parseFloat(element.total_stock_nim),
        },
        {
          content: parseFloat(element.total_berat_nim).toFixed(3),
        },
        {
          content: parseFloat(element.total_stock_nij),
        },
        {
          content: parseFloat(element.total_berat_nij).toFixed(3),
        },
      ];
      tableRowsCustomer.push(rowcustomer);
    });

    const footercustomersubtotal = [
      {
        content: "SUB TOTAL",
        styles: {
          fillColor: "#bab5b5",
        },
      },
      {
        content: item.reduce((a, b) => a + parseFloat(b.total_stock_spl3), 0),
        styles: {
          fillColor: "#bab5b5",
        },
      },
      {
        content: item
          .reduce((a, b) => a + parseFloat(b.total_berat_spl3), 0)
          .toFixed(3),
        styles: {
          fillColor: "#bab5b5",
        },
      },
      {
        content: item.reduce((a, b) => a + parseFloat(b.total_stock_spl1), 0),
        styles: {
          fillColor: "#bab5b5",
        },
      },
      {
        content: item
          .reduce((a, b) => a + parseFloat(b.total_berat_spl1), 0)
          .toFixed(3),
        styles: {
          fillColor: "#bab5b5",
        },
      },
      {
        content: item.reduce((a, b) => a + parseFloat(b.total_stock_jr), 0),
        styles: {
          fillColor: "#bab5b5",
        },
      },
      {
        content: item
          .reduce((a, b) => a + parseFloat(b.total_berat_jr), 0)
          .toFixed(3),
        styles: {
          fillColor: "#bab5b5",
        },
      },
      {
        content: item.reduce((a, b) => a + parseFloat(b.total_stock_nim), 0),
        styles: {
          fillColor: "#bab5b5",
        },
      },
      {
        content: item
          .reduce((a, b) => a + parseFloat(b.total_berat_nim), 0)
          .toFixed(3),
        styles: {
          fillColor: "#bab5b5",
        },
      },
      {
        content: item.reduce((a, b) => a + parseFloat(b.total_stock_nij), 0),
        styles: {
          fillColor: "#bab5b5",
        },
      },
      {
        content: item
          .reduce((a, b) => a + parseFloat(b.total_berat_nij), 0)
          .toFixed(3),
        styles: {
          fillColor: "#bab5b5",
        },
      },
    ];
    tableRowsCustomer.push(footercustomersubtotal);
  });

  const footercustomer = [
    {
      content: "GRAND TOTAL",
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.total_stock_spl3), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat_spl3), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.total_stock_spl1), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat_spl1), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.total_stock_jr), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat_jr), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.total_stock_nim), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat_nim), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data.reduce((a, b) => a + parseFloat(b.total_stock_nij), 0),
      styles: {
        fillColor: "#bab5b5",
      },
    },
    {
      content: data
        .reduce((a, b) => a + parseFloat(b.total_berat_nij), 0)
        .toFixed(3),
      styles: {
        fillColor: "#bab5b5",
      },
    },
  ];
  tableRowsCustomer.push(footercustomer);

  const printedcust = [
    {
      content: `printed by admin`,
      colSpan: 11,
      styles: {
        fontStyle: "italic",
        textColor: "#000",
        halign: "left",
      },
    },
  ];
  tableRowsCustomer.push(printedcust);

  doc.autoTable({
    head: tableColumnCustomer,
    body: tableRowsCustomer,
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
  tableRowsCustomer = [];
  tableColumnCustomer = [];
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
    <title>PO MASUK FORMAT BARU</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
