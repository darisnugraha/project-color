import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "", divisi: "" };
  }

  componentDidMount() {
    let data =
      JSON.parse(localStorage.getItem("mutasi_history_by_divisi_head")) || [];
    this.setState({
      tgl_dari_string: data.tgl_dari,
      tgl_sampai_string: data.tgl_sampai,
      divisi: data.divisi,
    });
  }
  render() {
    if (
      this.props.dataHead?.divisi === "TUMBLING" ||
      this.props.dataHead?.divisi === "BOOM" ||
      this.props.dataHead?.divisi === "POLISHING" ||
      this.props.dataHead?.divisi === "EPOXY" ||
      this.props.dataHead?.divisi === "LASER" ||
      this.props.dataHead?.divisi === "MARKING" ||
      this.props.dataHead?.divisi === "PLATTING" ||
      this.props.dataHead?.divisi === "EC" ||
      this.props.dataHead?.divisi === "KULIT KERAMIK" ||
      this.props.dataHead?.divisi === "AMPLAS"
    ) {
      return (
        <>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
            table="table-to-xls"
            filename={`LAPORAN MUTASI HISTORY BY DIVISI (${this.props.dataHead?.divisi})`}
            sheet={`LAPORAN MUTASI HISTORY BY DIVISI (${this.props.dataHead?.divisi})`}
            buttonText="Export Excel"
          />
          <table id="table-to-xls" style={{ display: "none" }}>
            <thead>
              <tr>
                <th colSpan="10" style={{ textAlign: "center" }}>
                  {" "}
                  LAPORAN MUTASI HISTORY BY DIVISI {this.props.dataHead?.divisi}
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
                    <td>{item.susut}</td>
                    <td>{item.keterangan}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
        </>
      );
    } else if (
      this.props.dataHead?.divisi === "FILLING" ||
      this.props.dataHead?.divisi === "POTONG SPRU"
    ) {
      return (
        <>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
            table="table-to-xls"
            filename={`LAPORAN MUTASI HISTORY BY DIVISI (${this.props.dataHead?.divisi})`}
            sheet={`LAPORAN MUTASI HISTORY BY DIVISI (${this.props.dataHead?.divisi})`}
            buttonText="Export Excel"
          />
          <table id="table-to-xls" style={{ display: "none" }}>
            <thead>
              <tr>
                <th colSpan="10" style={{ textAlign: "center" }}>
                  {" "}
                  LAPORAN MUTASI HISTORY BY DIVISI {this.props.dataHead?.divisi}
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
                    <td>{item.spru}</td>
                    <td>{item.susut}</td>
                    <td>{item.keterangan}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
        </>
      );
    } else if (
      this.props.dataHead?.divisi === "FR EPOXY" ||
      this.props.dataHead?.divisi === "AMPLAS EPOXY"
    ) {
      return (
        <>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
            table="table-to-xls"
            filename={`LAPORAN MUTASI HISTORY BY DIVISI (${this.props.dataHead?.divisi})`}
            sheet={`LAPORAN MUTASI HISTORY BY DIVISI (${this.props.dataHead?.divisi})`}
            buttonText="Export Excel"
          />
          <table id="table-to-xls" style={{ display: "none" }}>
            <thead>
              <tr>
                <th colSpan="10" style={{ textAlign: "center" }}>
                  {" "}
                  LAPORAN MUTASI HISTORY BY DIVISI {this.props.dataHead?.divisi}
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
                  BUBUK
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
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
                    <td>{item.bubuk}</td>
                    <td>{item.susut}</td>
                    <td>{item.keterangan}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
        </>
      );
    } else if (
      this.props.dataHead?.divisi === "MASTER" ||
      this.props.dataHead?.divisi === "HANDSETTING1" ||
      this.props.dataHead?.divisi === "HANDSETTING2" ||
      this.props.dataHead?.divisi === "HANDSETTING3"
    ) {
      return (
        <>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
            table="table-to-xls"
            filename={`LAPORAN MUTASI HISTORY BY DIVISI (${this.props.dataHead?.divisi})`}
            sheet={`LAPORAN MUTASI HISTORY BY DIVISI (${this.props.dataHead?.divisi})`}
            buttonText="Export Excel"
          />
          <table id="table-to-xls" style={{ display: "none" }}>
            <thead>
              <tr>
                <th colSpan="10" style={{ textAlign: "center" }}>
                  {" "}
                  LAPORAN MUTASI HISTORY BY DIVISI {this.props.dataHead?.divisi}
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
                  BUBUK
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
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
                    <td>{item.bubuk}</td>
                    <td>{item.susut}</td>
                    <td>{item.keterangan}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot></tfoot>
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
            filename={`LAPORAN MUTASI HISTORY BY DIVISI (${this.props.dataHead?.divisi})`}
            sheet={`LAPORAN MUTASI HISTORY BY DIVISI (${this.props.dataHead?.divisi})`}
            buttonText="Export Excel"
          />
          <table id="table-to-xls" style={{ display: "none" }}>
            <thead>
              <tr>
                <th colSpan="10" style={{ textAlign: "center" }}>
                  {" "}
                  LAPORAN MUTASI HISTORY BY DIVISI {this.props.dataHead?.divisi}
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
                    color: "#000",
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
                    <td>{item.spru}</td>
                    <td>{item.bubuk}</td>
                    <td>{item.susut}</td>
                    <td>{item.keterangan}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
        </>
      );
    }
  }
}
export default ExcelReport;
