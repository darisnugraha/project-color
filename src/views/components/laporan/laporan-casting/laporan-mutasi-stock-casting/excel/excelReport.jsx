import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "", divisi: "" };
  }

  render() {
    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename={`LAPORAN MUTASI STOCK CASTING`}
          sheet={`LAPORAN MUTASI STOCK CASTING`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="16" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN MUTASI STOCK CASTING
              </th>
            </tr>
            <tr>
              <th colSpan="16">
                {" "}
                Tanggal :{" "}
                {this.props.dataHead?.tgl_dari +
                  " s/d " +
                  this.props.dataHead?.tgl_sampai}{" "}
              </th>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={2}
              >
                TANGGAL
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={2}
              >
                JAM
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={2}
              >
                NO JOB ORDER
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={2}
              >
                KODE BARANG
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={2}
              >
                NAMA BARANG
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={2}
              >
                JENIS BAHAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                TERIMA
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                RUSAK
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                BATU
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={3}
              >
                KIRIM
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={2}
              >
                KETERANGAN
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                QTY
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BERAT
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                QTY
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BERAT
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                RUSAK
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SISA
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                QTY
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BERAT
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SISA
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel.map((item) => {
              return (
                <tr>
                  <td>{item.tanggal}</td>
                  <td>{item.jam}</td>
                  <td>{item.no_job_order}</td>
                  <td>{item.kode_barang}</td>
                  <td>{item.nama_barang}</td>
                  <td>{item.jenis_bahan}</td>
                  <td style={{ textAlign: "right" }}>{item.jumlah_terima}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_terima}</td>
                  <td style={{ textAlign: "right" }}>{item.jumlah_rusak}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_rusak}</td>
                  <td style={{ textAlign: "right" }}>{item.batu_rusak}</td>
                  <td style={{ textAlign: "right" }}>{item.batu_sisa}</td>
                  <td style={{ textAlign: "right" }}>{item.jumlah_kirim}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_kirim}</td>
                  <td style={{ textAlign: "right" }}>{item.sisa_kirim}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="6" style={{ textAlign: "right" }}>
                Grand Total :
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_terima),
                  0
                )}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_terima), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_rusak),
                  0
                )}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_rusak), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.batu_rusak), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.batu_sisa), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_kirim),
                  0
                )}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_kirim), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.sisa_kirim), 0)
                  .toFixed(3)}
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReport;
