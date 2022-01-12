import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "", type: "" };
  }

  render() {
    const berat_in = this.props.dataExel.reduce(
      (a, b) => a + parseFloat(b.berat_terima),
      0
    );
    const berat_rusak = this.props.dataExel.reduce(
      (a, b) => a + parseFloat(b.berat_rusak),
      0
    );
    const berat_spru = this.props.dataExel.reduce(
      (a, b) => a + parseFloat(b.spru),
      0
    );
    const berat_bubuk = this.props.dataExel.reduce(
      (a, b) => a + parseFloat(b.bubuk),
      0
    );
    const berat_sisa = this.props.dataExel.reduce(
      (a, b) => a + parseFloat(b.berat_sisa),
      0
    );
    const batu_sisa = this.props.dataExel.reduce(
      (a, b) => a + parseFloat(b.batu_sisa),
      0
    );
    const batu_rusak = this.props.dataExel.reduce(
      (a, b) => a + parseFloat(b.batu_rusak),
      0
    );
    const berat_out = this.props.dataExel.reduce(
      (a, b) => a + parseFloat(b.berat_kirim),
      0
    );

    const saldo =
      berat_in +
      berat_rusak +
      berat_spru +
      berat_bubuk +
      berat_sisa +
      batu_sisa +
      batu_rusak -
      berat_out;

    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename={`LAPORAN MUTASI STOCK GUDANG QC (${this.props.dataHead?.type})`}
          sheet={`LAPORAN MUTASI STOCK GUDANG QC (${this.props.dataHead?.type})`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="10" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN MUTASI STOCK GUDANG QC ({this.props.dataHead?.type})
              </th>
            </tr>
            <tr>
              <th colSpan="10">
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
                BAHAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={9}
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
                QTY. RUSAK
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BERAT. RUSAK
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
                BUBUK
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BERAT. SISA
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
            {this.props.dataExel.map((element) => {
              return (
                <tr>
                  <td>{element.tanggal}</td>
                  <td>{element.jam}</td>
                  <td>{element.no_job_order}</td>
                  <td>{element.kode_barang}</td>
                  <td>{element.nama_barang}</td>
                  <td>{element.bahan}</td>
                  <td style={{ textAlign: "right" }}>
                    {element.jumlah_terima}
                  </td>
                  <td style={{ textAlign: "right" }}>{element.berat_terima}</td>
                  <td style={{ textAlign: "right" }}>{element.jumlah_rusak}</td>
                  <td style={{ textAlign: "right" }}>{element.berat_rusak}</td>
                  <td style={{ textAlign: "right" }}>{element.spru}</td>
                  <td style={{ textAlign: "right" }}>{element.bubuk}</td>
                  <td style={{ textAlign: "right" }}>{element.berat_sisa}</td>
                  <td style={{ textAlign: "right" }}>{element.batu_rusak}</td>
                  <td style={{ textAlign: "right" }}>{element.batu_sisa}</td>
                  <td style={{ textAlign: "right" }}>{element.jumlah_kirim}</td>
                  <td style={{ textAlign: "right" }}>{element.berat_kirim}</td>
                  <td>{element.keterangan}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td style={{ textAlign: "right" }}>Saldo :</td>
              <td colSpan={5} style={{ textAlign: "left" }}>
                {saldo.toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>Total :</td>
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
                  .reduce((a, b) => a + parseFloat(b.spru), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.bubuk), 0)
                  .toFixed(3)}
              </td>
              <td style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_sisa), 0)
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
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReport;
