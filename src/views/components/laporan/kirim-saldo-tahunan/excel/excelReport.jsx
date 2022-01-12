import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import service from "../../../../../infrastructure/services/index";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let totalSelesai = 0;
    let totalSaldo = 0;
    let totalFrSelesai = 0;
    let totalFrSaldo = 0;
    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename="LAPORAN KIRIM DAN SALDO PER TAHUN"
          sheet="LAPORAN KIRIM DAN SALDO PER TAHUN"
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="14" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN SALDO BAHAN{" "}
              </th>
            </tr>
            <tr>
              <th colSpan="14">
                {" "}
                Tanggal : {service.getLocal("kirim_saldo_tahun").date}
              </th>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  verticalAlign: "middle",
                }}
                rowSpan="2"
              >
                BULAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  verticalAlign: "middle",
                }}
                rowSpan="2"
              >
                KERJA HARI
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  verticalAlign: "middle",
                }}
                rowSpan="2"
              >
                JENIS
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="2"
              >
                FR1
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="2"
              >
                FR2
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="2"
              >
                FR3
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
                HAND STG 1
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="2"
              >
                HAND STG 2
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
                SELESAI
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SALDO
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SELESAI
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SALDO
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SELESAI
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SALDO
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SELESAI
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SALDO
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SELESAI
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SALDO
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SELESAI
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                SALDO
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel.map((row) => {
              totalSelesai = row.fr_selesai + row.fr2_selesai + row.fr3_selesai;
              totalSaldo = row.fr_saldo + row.fr2_saldo + row.fr3_saldo;
              totalFrSelesai += totalSelesai;
              totalFrSaldo += totalSaldo;
              return (
                <tr>
                  <td>{row.bulan}</td>
                  <td>{row.kerja_hari}</td>
                  <td>{row.jenis}</td>
                  <td>
                    {row.fr_selesai === 0 ? 0 : row.fr_selesai.toFixed(3)}
                  </td>
                  <td>{row.fr_saldo === 0 ? 0 : row.fr_saldo.toFixed(3)}</td>
                  <td>
                    {row.fr2_selesai === 0 ? 0 : row.fr2_selesai.toFixed(3)}
                  </td>
                  <td>{row.fr2_saldo === 0 ? 0 : row.fr2_saldo.toFixed(3)}</td>
                  <td>
                    {row.fr3_selesai === 0 ? 0 : row.fr3_selesai.toFixed(3)}
                  </td>
                  <td>{row.fr3_saldo === 0 ? 0 : row.fr3_saldo.toFixed(3)}</td>
                  <td>{totalSelesai === 0 ? 0 : totalSelesai.toFixed(3)}</td>
                  <td>{totalSaldo === 0 ? 0 : totalSaldo.toFixed(3)}</td>
                  <td>
                    {row.handsetting1_selesai === 0
                      ? 0
                      : row.handsetting1_selesai.toFixed(3)}
                  </td>
                  <td>
                    {row.handsetting1_saldo === 0
                      ? 0
                      : row.handsetting1_saldo.toFixed(3)}
                  </td>
                  <td>
                    {row.handsetting2_selesai === 0
                      ? 0
                      : row.handsetting2_selesai.toFixed(3)}
                  </td>
                  <td>
                    {row.handsetting2_saldo === 0
                      ? 0
                      : row.handsetting2_saldo.toFixed(3)}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="3">Total</th>
              <th style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + b.fr_selesai, 0)
                  .toFixed(3)}
              </th>
              <th style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + b.fr_saldo, 0)
                  .toFixed(3)}
              </th>
              <th style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + b.fr2_selesai, 0)
                  .toFixed(3)}
              </th>
              <th style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + b.fr2_saldo, 0)
                  .toFixed(3)}
              </th>
              <th style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + b.fr3_selesai, 0)
                  .toFixed(3)}
              </th>
              <th style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + b.fr3_saldo, 0)
                  .toFixed(3)}
              </th>
              <th style={{ textAlign: "right" }}>
                {totalFrSelesai.toFixed(3)}
              </th>
              <th style={{ textAlign: "right" }}>{totalFrSaldo.toFixed(3)}</th>
              <th style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + b.handsetting1_selesai, 0)
                  .toFixed(3)}
              </th>
              <th style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + b.handsetting1_saldo, 0)
                  .toFixed(3)}
              </th>
              <th style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + b.handsetting2_selesai, 0)
                  .toFixed(3)}
              </th>
              <th style={{ textAlign: "right" }}>
                {this.props.dataExel
                  .reduce((a, b) => a + b.handsetting2_saldo, 0)
                  .toFixed(3)}
              </th>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReport;
