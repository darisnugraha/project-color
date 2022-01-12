import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "", type: "" };
  }

  render() {
    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename={`LAPORAN MUTASI STOCK OUTSTAND GUDANG QC`}
          sheet={`LAPORAN MUTASI STOCK OUTSTAND GUDANG QC`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="10" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN MUTASI STOCK OUTSTAND GUDANG QC
              </th>
            </tr>
            <tr>
              <th colSpan="10">
                {" "}
                Tanggal :{" "}
                {this.props.dataHead?.tgl_dari_string +
                  " s/d " +
                  this.props.dataHead?.tgl_sampai_string}{" "}
              </th>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NO
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                TANGGAL
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                JAM
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NO JOB ORDER
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                KODE BARANG
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                FOTO
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NAMA BARANG
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BAHAN
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
                BERAT RUSAK
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BATU RUSAK
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BATU SISA
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BUBUK
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SPRU
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SPAREPART
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                KETERANGAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NIJ 75
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NIJ 70
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NIM 75
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                DESIGN
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel.map((element) => {
              return (
                <tr>
                  <td>{element.no}</td>
                  <td>{element.tanggal}</td>
                  <td>{element.jam}</td>
                  <td>{element.no_job_order}</td>
                  <td>{element.kode_barang}</td>
                  <td>{element.foto}</td>
                  <td>{element.nama_barang}</td>
                  <td>{element.bahan}</td>
                  <td style={{ textAlign: "right" }}>{element.jumlah}</td>
                  <td style={{ textAlign: "right" }}>{element.berat}</td>
                  <td style={{ textAlign: "right" }}>{element.berat_rusak}</td>
                  <td style={{ textAlign: "right" }}>{element.batu_rusak}</td>
                  <td style={{ textAlign: "right" }}>{element.batu_sisa}</td>
                  <td style={{ textAlign: "right" }}>{element.bubuk}</td>
                  <td style={{ textAlign: "right" }}>{element.spru}</td>
                  <td style={{ textAlign: "right" }}>{element.sparepart}</td>
                  <td>{element.keterangan}</td>
                  <td style={{ textAlign: "right" }}>{element.nij75}</td>
                  <td style={{ textAlign: "right" }}>{element.nij70}</td>
                  <td style={{ textAlign: "right" }}>{element.nim75}</td>
                  <td>{element.design}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td style={{ textAlign: "right" }} colSpan={8}>
                Total :
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah),
                  0
                )}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat), 0)
                  .toFixed(3)}
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
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.bubuk), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.spru), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.sparepart), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>{""}</td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.nij75), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.nij70), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.nim75), 0)
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
