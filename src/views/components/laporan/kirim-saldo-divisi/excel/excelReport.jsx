import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "" };
  }

  componentDidMount() {
    let data =
      JSON.parse(localStorage.getItem("kirim_saldo_divisi_head")) || [];
    this.setState({
      tgl_dari_string: data.tgl_dari,
      tgl_sampai_string: data.tgl_sampai,
    });
  }

  render() {
    let total_selesai_all = 0;
    let total_saldo_all = 0;
    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename="LAPORAN KIRIM SALDO PER DIVISI"
          sheet="LAPORAN KIRIM SALDO PER DIVISI"
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="23">
                {" "}
                Tanggal :{" "}
                {this.state.tgl_dari_string +
                  " s/d " +
                  this.state.tgl_sampai_string}
              </th>
            </tr>
            <tr>
              <th
                colSpan="23"
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                  // verticalAlign: "middle",
                }}
              >
                {" "}
                LAPORAN KIRIM DAN SALDO PER DIVISI{" "}
              </th>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  // textAlign: "center",
                  verticalAlign: "middle",
                }}
                rowSpan="2"
              >
                Tgl
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  // textAlign: "center",
                  verticalAlign: "middle",
                }}
                rowSpan="2"
              >
                Kerja Hari
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  // textAlign: "center",
                  verticalAlign: "middle",
                }}
                rowSpan="2"
              >
                Casting
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="2"
              >
                POTONG SPRU
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="2"
              >
                FILLING
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="2"
              >
                FR 1
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="2"
              >
                FR 2
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="2"
              >
                FR 3
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="2"
              >
                FR TOTAL
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="2"
              >
                HAND STG
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="2"
              >
                POLISHING
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="2"
              >
                PLATTING
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="2"
              >
                TOTAL
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
                Selesai
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Saldo
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Selesai
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Saldo
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Selesai
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Saldo
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Selesai
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Saldo
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Selesai
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Saldo
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Selesai
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Saldo
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Selesai
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Saldo
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Selesai
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Saldo
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Selesai
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Saldo
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Selesai
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                Saldo
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel.map((row) => {
              let total_selesai = 0;
              total_selesai =
                row.fr_selesai +
                row.fr2_selesai +
                row.fr3_selesai +
                row.frTotal_selesai +
                row.handsetting1_selesai +
                row.handsetting2_selesai +
                row.casting_selesai +
                row.filling_selesai +
                row.polishing_selesai +
                row.platting_selesai;

              total_selesai_all +=
                row.fr_selesai +
                row.fr2_selesai +
                row.fr3_selesai +
                row.frTotal_selesai +
                row.handsetting1_selesai +
                row.handsetting2_selesai +
                row.casting_selesai +
                row.filling_selesai +
                row.polishing_selesai +
                row.platting_selesai;

              let total_saldo = 0;
              total_saldo =
                row.fr_saldo +
                row.fr2_saldo +
                row.fr3_saldo +
                row.frTotal_saldo +
                row.handsetting1_saldo +
                row.handsetting2_saldo +
                row.casting_saldo +
                row.filling_saldo +
                row.polishing_saldo +
                row.platting_saldo;

              total_saldo_all +=
                row.fr_saldo +
                row.fr2_saldo +
                row.fr3_saldo +
                row.frTotal_saldo +
                row.handsetting1_saldo +
                row.handsetting2_saldo +
                row.casting_saldo +
                row.filling_saldo +
                row.polishing_saldo +
                row.platting_saldo;

              return (
                <tr>
                  <td>{row.tanggal}</td>
                  <td>{row.kerja_hari}</td>
                  <td>{row.casting_selesai.toFixed(3)}</td>
                  <td>{row.potong_spru_selesai.toFixed(3)}</td>
                  <td>{row.potong_spru_saldo.toFixed(3)}</td>
                  <td>{row.filling_selesai.toFixed(3)}</td>
                  <td>{row.filling_saldo.toFixed(3)}</td>
                  <td>{row.fr_selesai.toFixed(3)}</td>
                  <td>{row.fr_saldo.toFixed(3)}</td>
                  <td>{row.fr2_selesai.toFixed(3)}</td>
                  <td>{row.fr2_saldo.toFixed(3)}</td>
                  <td>{row.fr3_selesai.toFixed(3)}</td>
                  <td>{row.fr3_saldo.toFixed(3)}</td>
                  <td>{row.frTotal_selesai.toFixed(3)}</td>
                  <td>{row.frTotal_saldo.toFixed(3)}</td>
                  <td>{row.handsetting1_selesai.toFixed(3)}</td>
                  <td>{row.handsetting1_saldo.toFixed(3)}</td>
                  <td>{row.polishing_selesai.toFixed(3)}</td>
                  <td>{row.polishing_saldo.toFixed(3)}</td>
                  <td>{row.platting_selesai.toFixed(3)}</td>
                  <td>{row.platting_saldo.toFixed(3)}</td>
                  <td>{total_selesai.toFixed(3)}</td>
                  <td>{total_saldo.toFixed(3)}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total</td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.casting_selesai, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.potong_spru_selesai, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.potong_spru_saldo, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.filling_selesai, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.filling_saldo, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.fr_selesai, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.fr_saldo, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.fr2_selesai, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.fr2_saldo, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.fr3_selesai, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.fr3_saldo, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.frTotal_selesai, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.frTotal_saldo, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.handsetting1_selesai, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.handsetting1_saldo, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.polishing_selesai, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.polishing_saldo, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.platting_selesai, 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + b.platting_saldo, 0)
                  .toFixed(3)}
              </td>
              <td>{total_selesai_all.toFixed(3)}</td>
              <td>{total_saldo_all.toFixed(3)}</td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReport;
