import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import service from "../../../../../../infrastructure/services/index";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "", divisi: "" };
  }

  componentDidMount() {
    let data = service.getLocal("mutasi_saldo_by_divisi_head") || [];
    this.setState({
      tgl_dari_string: data.tgl_dari,
      tgl_sampai_string: data.tgl_sampai,
      divisi: data.divisi,
    });
  }
  render() {
    const totalSaldo =
      this.props.dataExel.reduce(
        (a, b) => a + parseFloat(b.berat_terima || 0),
        0
      ) -
      (this.props.dataExel.reduce(
        (a, b) => a + parseFloat(b.berat_rusak || 0),
        0
      ) +
        this.props.dataExel.reduce((a, b) => a + parseFloat(b.spru || 0), 0) +
        this.props.dataExel.reduce((a, b) => a + parseFloat(b.bubuk || 0), 0) +
        this.props.dataExel.reduce(
          (a, b) => a + parseFloat(b.berat_kirim || 0),
          0
        ) +
        this.props.dataExel.reduce(
          (a, b) => a + parseFloat(b.sisa_kirim || 0),
          0
        ) +
        this.props.dataExel.reduce(
          (a, b) => a + parseFloat(b.batu_rusak || 0),
          0
        ));

    if (
      this.props.dataHead?.divisi === "TUMBLING" ||
      this.props.dataHead?.divisi === "BOOM" ||
      this.props.dataHead?.divisi === "AMPLAS" ||
      this.props.dataHead?.divisi === "EPOXY" ||
      this.props.dataHead?.divisi === "LASER" ||
      this.props.dataHead?.divisi === "MARKING" ||
      this.props.dataHead?.divisi === "PLATTING"
    ) {
      return (
        <>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
            table="table-to-xls"
            filename={`LAPORAN MUTASI SALDO BY DIVISI (${this.props.dataHead?.divisi})`}
            sheet={`LAPORAN MUTASI SALDO BY DIVISI (${this.props.dataHead?.divisi})`}
            buttonText="Export Excel"
          />
          <table id="table-to-xls" style={{ display: "none" }}>
            <thead>
              <tr>
                <th colSpan="10" style={{ textAlign: "center" }}>
                  {" "}
                  LAPORAN MUTASI SALDO BY DIVISI {this.props.dataHead?.divisi}
                </th>
              </tr>
              <tr>
                <th colSpan="10">
                  {" "}
                  Tanggal :{" "}
                  {this.state.tgl_dari_string +
                    " s/d " +
                    this.state.tgl_sampai_string}{" "}
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  TANGGAL
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  JAM
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  NO JOB ORDER
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  KODE BARANG
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  NAMA BARANG
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  JENIS BAHAN
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="2"
                >
                  TERIMA
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="2"
                >
                  RUSAK
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="3"
                >
                  KIRIM
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  SPRU
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "red",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  SUSUT
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
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
                    <td>{item.jumlah_terima}</td>
                    <td>{item.berat_terima}</td>
                    <td>{item.jumlah_rusak}</td>
                    <td>{item.berat_rusak}</td>
                    <td>{item.jumlah_kirim}</td>
                    <td>{item.berat_kirim}</td>
                    <td>{item.sisa_kirim}</td>
                    <td>{item.spru}</td>
                    <td style={{ color: "red" }}>{item.susut}</td>
                    <td>{item.keterangan}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td style={{ color: "red" }}>Saldo : </td>
                <td colSpan="4" style={{ textAlign: "left" }}>
                  {totalSaldo}
                </td>
                <td>Total : </td>
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
                  {this.props.dataExel.reduce(
                    (a, b) => a + parseFloat(b.jumlah_kirim),
                    0
                  )}
                </td>
                <td style={{ textAlign: "right" }}>
                  {this.props.dataExel.reduce(
                    (a, b) => a + parseFloat(b.berat_kirim),
                    0
                  )}
                </td>
                <td style={{ textAlign: "right" }}>
                  {this.props.dataExel
                    .reduce((a, b) => a + parseFloat(b.sisa_kirim), 0)
                    .toFixed(3)}
                </td>
                <td style={{ textAlign: "right" }}>
                  {this.props.dataExel
                    .reduce((a, b) => a + parseFloat(b.spru), 0)
                    .toFixed(3)}
                </td>
                <td style={{ color: "red", textAlign: "right" }}>
                  {this.props.dataExel
                    .reduce((a, b) => a + parseFloat(b.susut), 0)
                    .toFixed(3)}
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      );
    } else if (this.props.dataHead?.divisi === "FILLING") {
      return (
        <>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
            table="table-to-xls"
            filename={`LAPORAN MUTASI SALDO BY DIVISI (${this.props.dataHead?.divisi})`}
            sheet={`LAPORAN MUTASI SALDO BY DIVISI (${this.props.dataHead?.divisi})`}
            buttonText="Export Excel"
          />
          <table id="table-to-xls" style={{ display: "none" }}>
            <thead>
              <tr>
                <th colSpan="10" style={{ textAlign: "center" }}>
                  {" "}
                  LAPORAN MUTASI SALDO BY DIVISI {this.props.dataHead?.divisi}
                </th>
              </tr>
              <tr>
                <th colSpan="10">
                  {" "}
                  Tanggal :{" "}
                  {this.state.tgl_dari_string +
                    " s/d " +
                    this.state.tgl_sampai_string}{" "}
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  TANGGAL
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  JAM
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  NO JOB ORDER
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  KODE BARANG
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  NAMA BARANG
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  JENIS BAHAN
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="2"
                >
                  TERIMA
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="2"
                >
                  RUSAK
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="2"
                >
                  BATU
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="3"
                >
                  KIRIM
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  SPRU
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "red",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  SUSUT
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
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
                    <td>{item.jumlah_terima}</td>
                    <td>{item.berat_terima}</td>
                    <td>{item.jumlah_rusak}</td>
                    <td>{item.berat_rusak}</td>
                    <td>{item.batu_rusak}</td>
                    <td>{item.batu_sisa}</td>
                    <td>{item.jumlah_kirim}</td>
                    <td>{item.berat_kirim}</td>
                    <td>{item.sisa_kirim}</td>
                    <td>{item.spru}</td>
                    <td style={{ color: "red" }}>{item.susut}</td>
                    <td>{item.keterangan}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td style={{ color: "red" }}>Saldo : </td>
                <td colSpan="4" style={{ textAlign: "left" }}>
                  {totalSaldo}
                </td>
                <td>Total : </td>
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
                  {this.props.dataExel.reduce(
                    (a, b) => a + parseFloat(b.berat_kirim),
                    0
                  )}
                </td>
                <td style={{ textAlign: "right" }}>
                  {this.props.dataExel
                    .reduce((a, b) => a + parseFloat(b.sisa_kirim), 0)
                    .toFixed(3)}
                </td>
                <td style={{ textAlign: "right" }}>
                  {this.props.dataExel
                    .reduce((a, b) => a + parseFloat(b.spru), 0)
                    .toFixed(3)}
                </td>
                <td style={{ color: "red", textAlign: "right" }}>
                  {this.props.dataExel
                    .reduce((a, b) => a + parseFloat(b.susut), 0)
                    .toFixed(3)}
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      );
    } else if (
      this.props.dataHead?.divisi === "FR1" ||
      this.props.dataHead?.divisi === "FR2" ||
      this.props.dataHead?.divisi === "FR3"
    ) {
      return (
        <>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
            table="table-to-xls"
            filename={`LAPORAN MUTASI SALDO BY DIVISI (${this.props.dataHead?.divisi})`}
            sheet={`LAPORAN MUTASI SALDO BY DIVISI (${this.props.dataHead?.divisi})`}
            buttonText="Export Excel"
          />
          <table id="table-to-xls" style={{ display: "none" }}>
            <thead>
              <tr>
                <th colSpan="10" style={{ textAlign: "center" }}>
                  {" "}
                  LAPORAN MUTASI SALDO BY DIVISI {this.props.dataHead?.divisi}
                </th>
              </tr>
              <tr>
                <th colSpan="10">
                  {" "}
                  Tanggal :{" "}
                  {this.state.tgl_dari_string +
                    " s/d " +
                    this.state.tgl_sampai_string}{" "}
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  TANGGAL
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  JAM
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  NO JOB ORDER
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  KODE BARANG
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  NAMA BARANG
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  JENIS BAHAN
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="2"
                >
                  TERIMA
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="2"
                >
                  RUSAK
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="3"
                >
                  KIRIM
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  BATU
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  SPRU
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  BUBUK
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "red",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  SUSUT
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
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
                  RUSAK
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
                    <td>{item.jumlah_terima}</td>
                    <td>{item.berat_terima}</td>
                    <td>{item.jumlah_rusak}</td>
                    <td>{item.berat_rusak}</td>
                    <td>{item.jumlah_kirim}</td>
                    <td>{item.berat_kirim}</td>
                    <td>{item.sisa_kirim}</td>
                    <td>{item.batu_rusak}</td>
                    <td>{item.spru}</td>
                    <td>{item.bubuk}</td>
                    <td style={{ color: "red" }}>{item.susut}</td>
                    <td>{item.keterangan}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td style={{ color: "red" }}>Saldo : </td>
                <td colSpan="4" style={{ textAlign: "left" }}>
                  {totalSaldo}
                </td>
                <td>Total : </td>
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
                  {this.props.dataExel.reduce(
                    (a, b) => a + parseFloat(b.jumlah_kirim),
                    0
                  )}
                </td>
                <td style={{ textAlign: "right" }}>
                  {this.props.dataExel.reduce(
                    (a, b) => a + parseFloat(b.berat_kirim),
                    0
                  )}
                </td>
                <td style={{ textAlign: "right" }}>
                  {this.props.dataExel
                    .reduce((a, b) => a + parseFloat(b.sisa_kirim), 0)
                    .toFixed(3)}
                </td>
                <td style={{ textAlign: "right" }}>
                  {this.props.dataExel
                    .reduce((a, b) => a + parseFloat(b.batu_rusak), 0)
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
                <td style={{ color: "red", textAlign: "right" }}>
                  {this.props.dataExel
                    .reduce((a, b) => a + parseFloat(b.susut), 0)
                    .toFixed(3)}
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      );
    } else if (
      this.props.dataHead?.divisi === "FR EPOXY" ||
      this.props.dataHead?.divisi === "AMPLAS EPOXY" ||
      this.props.dataHead?.divisi === "KULIT KERAMIK"
    ) {
      return (
        <>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
            table="table-to-xls"
            filename={`LAPORAN MUTASI SALDO BY DIVISI (${this.props.dataHead?.divisi})`}
            sheet={`LAPORAN MUTASI SALDO BY DIVISI (${this.props.dataHead?.divisi})`}
            buttonText="Export Excel"
          />
          <table id="table-to-xls" style={{ display: "none" }}>
            <thead>
              <tr>
                <th colSpan="10" style={{ textAlign: "center" }}>
                  {" "}
                  LAPORAN MUTASI SALDO BY DIVISI {this.props.dataHead?.divisi}
                </th>
              </tr>
              <tr>
                <th colSpan="10">
                  {" "}
                  Tanggal :{" "}
                  {this.state.tgl_dari_string +
                    " s/d " +
                    this.state.tgl_sampai_string}{" "}
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  TANGGAL
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  JAM
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  NO JOB ORDER
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  KODE BARANG
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  NAMA BARANG
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  JENIS BAHAN
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="2"
                >
                  TERIMA
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="2"
                >
                  RUSAK
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="3"
                >
                  KIRIM
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  SPRU
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  BUBUK
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "red",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  SUSUT
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
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
                    <td>{item.jumlah_terima}</td>
                    <td>{item.berat_terima}</td>
                    <td>{item.jumlah_rusak}</td>
                    <td>{item.berat_rusak}</td>
                    <td>{item.jumlah_kirim}</td>
                    <td>{item.berat_kirim}</td>
                    <td>{item.sisa_kirim}</td>
                    <td>{item.spru}</td>
                    <td>{item.bubuk}</td>
                    <td style={{ color: "red" }}>{item.susut}</td>
                    <td>{item.keterangan}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td style={{ color: "red" }}>Saldo : </td>
                <td colSpan="4" style={{ textAlign: "left" }}>
                  {totalSaldo}
                </td>
                <td>Total : </td>
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
                  {this.props.dataExel.reduce(
                    (a, b) => a + parseFloat(b.jumlah_kirim),
                    0
                  )}
                </td>
                <td style={{ textAlign: "right" }}>
                  {this.props.dataExel.reduce(
                    (a, b) => a + parseFloat(b.berat_kirim),
                    0
                  )}
                </td>
                <td style={{ textAlign: "right" }}>
                  {this.props.dataExel
                    .reduce((a, b) => a + parseFloat(b.sisa_kirim), 0)
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
                <td style={{ color: "red", textAlign: "right" }}>
                  {this.props.dataExel
                    .reduce((a, b) => a + parseFloat(b.susut), 0)
                    .toFixed(3)}
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      );
    } else if (this.props.dataHead?.divisi === "POLISHING") {
      return (
        <>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
            table="table-to-xls"
            filename={`LAPORAN MUTASI SALDO BY DIVISI (${this.props.dataHead?.divisi})`}
            sheet={`LAPORAN MUTASI SALDO BY DIVISI (${this.props.dataHead?.divisi})`}
            buttonText="Export Excel"
          />
          <table id="table-to-xls" style={{ display: "none" }}>
            <thead>
              <tr>
                <th colSpan="10" style={{ textAlign: "center" }}>
                  {" "}
                  LAPORAN MUTASI SALDO BY DIVISI {this.props.dataHead?.divisi}
                </th>
              </tr>
              <tr>
                <th colSpan="10">
                  {" "}
                  Tanggal :{" "}
                  {this.state.tgl_dari_string +
                    " s/d " +
                    this.state.tgl_sampai_string}{" "}
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  TANGGAL
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  JAM
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  NO JOB ORDER
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  KODE BARANG
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  NAMA BARANG
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  JENIS BAHAN
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="2"
                >
                  TERIMA
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="2"
                >
                  RUSAK
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="3"
                >
                  KIRIM
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "red",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  SUSUT
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
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
                    <td>{item.jumlah_terima}</td>
                    <td>{item.berat_terima}</td>
                    <td>{item.jumlah_rusak}</td>
                    <td>{item.berat_rusak}</td>
                    <td>{item.jumlah_kirim}</td>
                    <td>{item.berat_kirim}</td>
                    <td>{item.sisa_kirim}</td>
                    <td style={{ color: "red" }}>{item.susut}</td>
                    <td>{item.keterangan}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td style={{ color: "red" }}>Saldo : </td>
                <td colSpan="4" style={{ textAlign: "left" }}>
                  {totalSaldo}
                </td>
                <td>Total : </td>
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
                  {this.props.dataExel.reduce(
                    (a, b) => a + parseFloat(b.jumlah_kirim),
                    0
                  )}
                </td>
                <td style={{ textAlign: "right" }}>
                  {this.props.dataExel.reduce(
                    (a, b) => a + parseFloat(b.berat_kirim),
                    0
                  )}
                </td>
                <td style={{ textAlign: "right" }}>
                  {this.props.dataExel
                    .reduce((a, b) => a + parseFloat(b.sisa_kirim), 0)
                    .toFixed(3)}
                </td>
                <td style={{ color: "red", textAlign: "right" }}>
                  {this.props.dataExel
                    .reduce((a, b) => a + parseFloat(b.susut), 0)
                    .toFixed(3)}
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      );
    } else if (this.props.dataHead?.divisi === "SAMPLE") {
      return (
        <>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
            table="table-to-xls"
            filename={`LAPORAN MUTASI SALDO BY DIVISI (${this.props.dataHead?.divisi})`}
            sheet={`LAPORAN MUTASI SALDO BY DIVISI (${this.props.dataHead?.divisi})`}
            buttonText="Export Excel"
          />
          <table id="table-to-xls" style={{ display: "none" }}>
            <thead>
              <tr>
                <th colSpan="10" style={{ textAlign: "center" }}>
                  {" "}
                  LAPORAN MUTASI SALDO BY DIVISI {this.props.dataHead?.divisi}
                </th>
              </tr>
              <tr>
                <th colSpan="10">
                  {" "}
                  Tanggal :{" "}
                  {this.state.tgl_dari_string +
                    " s/d " +
                    this.state.tgl_sampai_string}{" "}
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  TANGGAL
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  JAM
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  NO JOB ORDER
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  KODE BARANG
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  NAMA BARANG
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  JENIS BAHAN
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="2"
                >
                  TERIMA
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="2"
                >
                  RUSAK
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="3"
                >
                  KIRIM
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
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
                    <td>{item.jumlah_terima}</td>
                    <td>{item.berat_terima}</td>
                    <td>{item.jumlah_rusak}</td>
                    <td>{item.berat_rusak}</td>
                    <td>{item.jumlah_kirim}</td>
                    <td>{item.berat_kirim}</td>
                    <td>{item.keterangan}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td style={{ color: "red" }}>Saldo : </td>
                <td colSpan="4" style={{ textAlign: "left" }}>
                  {totalSaldo}
                </td>
                <td>Total : </td>
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
                    (a, b) => a + parseFloat(b.jumlah_kirim),
                    0
                  )}
                </td>
                <td style={{ textAlign: "right" }}>
                  {this.props.dataExel.reduce(
                    (a, b) => a + parseFloat(b.berat_kirim),
                    0
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </>
      );
    } else {
      return (
        <>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
            table="table-to-xls"
            filename={`LAPORAN MUTASI SALDO BY DIVISI (${this.props.dataHead?.divisi})`}
            sheet={`LAPORAN MUTASI SALDO BY DIVISI (${this.props.dataHead?.divisi})`}
            buttonText="Export Excel"
          />
          <table id="table-to-xls" style={{ display: "none" }}>
            <thead>
              <tr>
                <th colSpan="10" style={{ textAlign: "center" }}>
                  {" "}
                  LAPORAN MUTASI SALDO BY DIVISI {this.props.dataHead?.divisi}
                </th>
              </tr>
              <tr>
                <th colSpan="10">
                  {" "}
                  Tanggal :{" "}
                  {this.state.tgl_dari_string +
                    " s/d " +
                    this.state.tgl_sampai_string}{" "}
                </th>
              </tr>
              <tr>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  TANGGAL
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  JAM
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  NO JOB ORDER
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  KODE BARANG
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  NAMA BARANG
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  JENIS BAHAN
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="2"
                >
                  TERIMA
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="2"
                >
                  RUSAK
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="2"
                >
                  BATU
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  colSpan="3"
                >
                  KIRIM
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  SPRU
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  BUBUK
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "red",
                    textAlign: "center",
                  }}
                  rowSpan="2"
                >
                  SUSUT
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                  rowSpan="2"
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
                    <td>{item.jumlah_terima}</td>
                    <td>{item.berat_terima}</td>
                    <td>{item.jumlah_rusak}</td>
                    <td>{item.berat_rusak}</td>
                    <td>{item.batu_rusak}</td>
                    <td>{item.batu_sisa}</td>
                    <td>{item.jumlah_kirim}</td>
                    <td>{item.berat_kirim}</td>
                    <td>{item.sisa_kirim}</td>
                    <td>{item.spru}</td>
                    <td>{item.bubuk}</td>
                    <td style={{ color: "red" }}>{item.susut}</td>
                    <td>{item.keterangan}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td style={{ color: "red" }}>Saldo : </td>
                <td colSpan="4" style={{ textAlign: "left" }}>
                  {totalSaldo}
                </td>
                <td>Total : </td>
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
                  {this.props.dataExel.reduce(
                    (a, b) => a + parseFloat(b.berat_kirim),
                    0
                  )}
                </td>
                <td style={{ textAlign: "right" }}>
                  {this.props.dataExel
                    .reduce((a, b) => a + parseFloat(b.sisa_kirim), 0)
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
                <td style={{ color: "red", textAlign: "right" }}>
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
}
export default ExcelReport;
