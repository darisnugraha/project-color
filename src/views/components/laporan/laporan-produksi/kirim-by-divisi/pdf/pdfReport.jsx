import { jsPDF } from "jspdf";
import "jspdf-autotable";

const pdfReport = (data = "") => {
  let data_head =
    JSON.parse(localStorage.getItem("kirim_by_divisi_head")) || [];
  let tgl_dari_string = data_head.tgl_dari;
  let tgl_sampai_string = data_head.tgl_sampai;
  const doc = new jsPDF("l", "mm", [297, 210]);
  let tableRows = [];
  let tableColumn = [];

  let finalY = 30;
  doc.text(`Laporan KIRIM BY DIVISI (${data_head.divisi})`, 14, 15);
  doc.setFontSize(20);
  doc.text("AMG", 200, 15);

  doc.setFontSize(10);
  doc.setProperties({
    title: "KIRIM BY DIVISI",
  });
  doc.text(`PERIODE : ${tgl_dari_string} s/d ${tgl_sampai_string}`, 14, 25);

  if (data_head.divisi === "SAMPLE") {
    tableColumn = [
      [
        {
          content: `TANGGAL`,
        },
        {
          content: `NO KIRIM`,
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
          colSpan: 6,
        },
      ];
      tableRows.push(rowKirim);
      element.forEach((item) => {
        jmlkirim = jmlkirim + parseFloat(item.stock_out);
        brtkirim = brtkirim + parseFloat(item.berat_out);

        const row = [
          {
            content: item.tgl_kirim,
            styles: {
              halign: "center",
            },
          },
          {
            content: item.no_kirim,
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
            content: item.stock_out,
          },
          {
            content: item.berat_out,
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
          colSpan: 6,
        },
        {
          content: jmlkirim,
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

    data.forEach((element) => {
      jmlkirimAll = jmlkirimAll + parseFloat(element.stock_out);
      brtkirimAll = brtkirimAll + parseFloat(element.berat_out);
    });

    const footer = [
      {
        content: "Grand Total :",
        colSpan: 6,
      },
      {
        content: jmlkirimAll,
      },
      {
        content: brtkirimAll.toFixed(3),
      },
    ];
    tableRows.push(footer);
  } else if (
    data_head.divisi === "MASTER" ||
    data_head.divisi === "HANDSETTING1" ||
    data_head.divisi === "HANDSETTING2" ||
    data_head.divisi === "HANDSETTING3"
  ) {
    tableColumn = [
      [
        {
          content: `TANGGAL`,
        },
        {
          content: `NO KIRIM`,
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
          content: `BUBUK`,
        },
        {
          content: `BATU RUSAK`,
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
      let susut = 0;
      let bubuk = 0;
      let baturusak = 0;

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
          colSpan: 8,
        },
      ];
      tableRows.push(rowKirim);
      element.forEach((item) => {
        jmlkirim = jmlkirim + parseFloat(item.stock_out);
        brtkirim = brtkirim + parseFloat(item.berat_out);
        jmlrusak = jmlrusak + parseFloat(item.stock_rusak);
        brtrusak = brtrusak + parseFloat(item.berat_rusak);
        susut = susut + parseFloat(item.susut);
        bubuk = bubuk + parseFloat(item.bubuk);
        baturusak = baturusak + parseFloat(item.batu_rusak);

        const row = [
          {
            content: item.tgl_kirim,
            styles: {
              halign: "center",
            },
          },
          {
            content: item.no_kirim,
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
            content: item.stock_out,
          },
          {
            content: item.berat_out,
          },
          {
            content: item.stock_rusak,
          },
          {
            content: item.berat_rusak,
          },
          {
            content: item.bubuk,
          },
          {
            content: item.batu_rusak,
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
          colSpan: 6,
        },
        {
          content: jmlkirim,
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
          content: jmlrusak,
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
          content: bubuk.toFixed(3),
          styles: {
            halign: "right",
            fillColor: "#dddddd",
          },
        },
        {
          content: baturusak.toFixed(3),
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
    let susutAll = 0;
    let bubukAll = 0;
    let baturusakAll = 0;

    data.forEach((element) => {
      jmlkirimAll = jmlkirimAll + parseFloat(element.stock_out);
      brtkirimAll = brtkirimAll + parseFloat(element.berat_out);
      jmlrusakAll = jmlrusakAll + parseFloat(element.stock_rusak);
      brtrusakAll = brtrusakAll + parseFloat(element.berat_rusak);
      susutAll = susutAll + parseFloat(element.susut);
      bubukAll = bubukAll + parseFloat(element.bubuk);
      baturusakAll = baturusakAll + parseFloat(element.batu_rusak);
    });

    const footer = [
      {
        content: "Grand Total :",
        colSpan: 6,
      },
      {
        content: jmlkirimAll,
      },
      {
        content: brtkirimAll.toFixed(3),
      },
      {
        content: jmlrusakAll,
      },
      {
        content: brtrusakAll.toFixed(3),
      },
      {
        content: bubukAll.toFixed(3),
      },
      {
        content: baturusakAll.toFixed(3),
      },
      {
        content: susutAll.toFixed(3),
      },
    ];
    tableRows.push(footer);
  } else if (
    data_head.divisi === "FR1" ||
    data_head.divisi === "FR2" ||
    data_head.divisi === "FR3"
  ) {
    tableColumn = [
      [
        {
          content: `TANGGAL`,
        },
        {
          content: `NO KIRIM`,
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
          content: `BERAT SPRU`,
        },
        {
          content: `BUBUK`,
        },
        {
          content: `BATU RUSAK`,
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
      let brtspru = 0;
      let susut = 0;
      let bubuk = 0;
      let baturusak = 0;

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
          colSpan: 9,
        },
      ];
      tableRows.push(rowKirim);
      element.forEach((item) => {
        jmlkirim = jmlkirim + parseFloat(item.stock_out);
        brtkirim = brtkirim + parseFloat(item.berat_out);
        jmlrusak = jmlrusak + parseFloat(item.stock_rusak);
        brtrusak = brtrusak + parseFloat(item.berat_rusak);
        brtspru = brtspru + parseFloat(item.berat_spru);
        susut = susut + parseFloat(item.susut);
        bubuk = bubuk + parseFloat(item.bubuk);
        baturusak = baturusak + parseFloat(item.baturusak);

        const row = [
          {
            content: item.tgl_kirim,
            styles: {
              halign: "center",
            },
          },
          {
            content: item.no_kirim,
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
            content: item.stock_out,
          },
          {
            content: item.berat_out,
          },
          {
            content: item.stock_rusak,
          },
          {
            content: item.berat_rusak,
          },
          {
            content: item.berat_spru,
          },
          {
            content: item.bubuk,
          },
          {
            content: item.batu_rusak,
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
          colSpan: 6,
        },
        {
          content: jmlkirim,
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
          content: jmlrusak,
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
          content: brtspru.toFixed(3),
          styles: {
            halign: "right",
            fillColor: "#dddddd",
          },
        },
        {
          content: bubuk.toFixed(3),
          styles: {
            halign: "right",
            fillColor: "#dddddd",
          },
        },
        {
          content: baturusak.toFixed(3),
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
    let brtspruAll = 0;
    let susutAll = 0;
    let bubukAll = 0;
    let baturusakAll = 0;

    data.forEach((element) => {
      jmlkirimAll = jmlkirimAll + parseFloat(element.stock_out);
      brtkirimAll = brtkirimAll + parseFloat(element.berat_out);
      jmlrusakAll = jmlrusakAll + parseFloat(element.stock_rusak);
      brtrusakAll = brtrusakAll + parseFloat(element.berat_rusak);
      brtspruAll = brtspruAll + parseFloat(element.berat_spru);
      susutAll = susutAll + parseFloat(element.susut);
      bubukAll = bubukAll + parseFloat(element.bubuk);
      baturusakAll = baturusakAll + parseFloat(element.baturusak);
    });

    const footer = [
      {
        content: "Grand Total :",
        colSpan: 6,
      },
      {
        content: jmlkirimAll,
      },
      {
        content: brtkirimAll.toFixed(3),
      },
      {
        content: jmlrusakAll,
      },
      {
        content: brtrusakAll.toFixed(3),
      },
      {
        content: brtspruAll.toFixed(3),
      },
      {
        content: bubukAll.toFixed(3),
      },
      {
        content: baturusakAll.toFixed(3),
      },
      {
        content: susutAll.toFixed(3),
      },
    ];
    tableRows.push(footer);
  } else {
    tableColumn = [
      [
        {
          content: `TANGGAL`,
        },
        {
          content: `NO KIRIM`,
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
          colSpan: 6,
        },
      ];
      tableRows.push(rowKirim);
      element.forEach((item) => {
        jmlkirim = jmlkirim + parseFloat(item.stock_out);
        brtkirim = brtkirim + parseFloat(item.berat_out);
        jmlrusak = jmlrusak + parseFloat(item.stock_rusak);
        brtrusak = brtrusak + parseFloat(item.berat_rusak);
        susut = susut + parseFloat(item.susut);

        const row = [
          {
            content: item.tgl_kirim,
            styles: {
              halign: "center",
            },
          },
          {
            content: item.no_kirim,
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
            content: item.stock_out,
          },
          {
            content: item.berat_out,
          },
          {
            content: item.stock_rusak,
          },
          {
            content: item.berat_rusak,
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
          colSpan: 6,
        },
        {
          content: jmlkirim,
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
          content: jmlrusak,
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
    let susutAll = 0;

    data.forEach((element) => {
      jmlkirimAll = jmlkirimAll + parseFloat(element.stock_out);
      brtkirimAll = brtkirimAll + parseFloat(element.berat_out);
      jmlrusakAll = jmlrusakAll + parseFloat(element.stock_rusak);
      brtrusakAll = brtrusakAll + parseFloat(element.berat_rusak);
      susutAll = susutAll + parseFloat(element.susut);
    });

    const footer = [
      {
        content: "Grand Total :",
        colSpan: 6,
      },
      {
        content: jmlkirimAll,
      },
      {
        content: brtkirimAll.toFixed(3),
      },
      {
        content: jmlrusakAll,
      },
      {
        content: brtrusakAll.toFixed(3),
      },
      {
        content: susutAll.toFixed(3),
      },
    ];
    tableRows.push(footer);
  }

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
    <title>KIRIM BY DIVISI</title>
    </head>
    <body style='margin:0 !important'>
    <embed width='100%' height='100%'src='${string}'></embed>
    </body>
    </html>`
  );
};

export default pdfReport;
