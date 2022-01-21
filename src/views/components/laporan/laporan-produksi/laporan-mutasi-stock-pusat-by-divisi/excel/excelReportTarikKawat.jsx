import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReportTarikKawat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename={`LAPORAN ${this.props.dataHead?.type} STOCK BY DIVISI (${this.props.dataHead?.divisi})`}
          sheet={`LAPORAN ${this.props.dataHead?.type} STOCK BY DIVISI (${this.props.dataHead?.divisi})`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="15" style={{ textAlign: "center" }}>
                LAPORAN {this.props.dataHead?.type} STOCK BY DIVISI (
                {this.props.dataHead?.divisi})
              </th>
            </tr>
            <tr>
              <th colSpan="15">
                Tanggal :
                {`${this.props.dataHead?.tgl_dari}  s/d  ${this.props.dataHead?.tgl_sampai}`}
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
                NO JO ORDER
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
                BUBUK
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={2}
              >
                SUSUT
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
                  <td style={{ textAlign: "right" }}>{item.jumlah_kirim}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_kirim}</td>
                  <td style={{ textAlign: "right" }}>{item.bubuk}</td>
                  <td style={{ textAlign: "right" }}>{item.susut}</td>
                  <td>{item.keterangan}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan="6"
                style={{
                  textAlign: "right",
                }}
              >
                Grand Total :
              </td>
              <td
                style={{
                  backgroundColor: "#dddddd",
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_terima),
                  0
                )}
              </td>
              <td
                style={{
                  backgroundColor: "#dddddd",
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_terima), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  backgroundColor: "#dddddd",
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_rusak),
                  0
                )}
              </td>
              <td
                style={{
                  backgroundColor: "#dddddd",
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_rusak), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  backgroundColor: "#dddddd",
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_kirim),
                  0
                )}
              </td>
              <td
                style={{
                  backgroundColor: "#dddddd",
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_kirim), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  backgroundColor: "#dddddd",
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.bubuk), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  backgroundColor: "#dddddd",
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.susut), 0)
                  .toFixed(3)}
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReportTarikKawat;
