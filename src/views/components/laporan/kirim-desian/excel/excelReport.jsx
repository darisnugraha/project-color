import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import service from "../../../../../infrastructure/services/index";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "" };
  }

  componentDidMount() {
    let data = service.getLocal("kirim_desain_head") || [];
    this.setState({
      tgl_dari_string: data.tgl_dari,
      tgl_sampai_string: data.tgl_sampai,
    });
  }

  render() {
    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename="LAPORAN KIRIM DESAIN"
          sheet="LAPORAN KIRIM DESAIN"
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="10" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN KIRIM PER DESAIN{" "}
              </th>
            </tr>
            <tr>
              <th colSpan="10">
                {" "}
                Tanggal :{" "}
                {this.state.tgl_dari_string +
                  " s/d " +
                  this.state.tgl_sampai_string}
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
                Jenis
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="5"
              >
                P.spru
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan="5"
              >
                Total
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
                BG
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                R
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                P
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                E
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                LAIN-LAIN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BG
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                R
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                P
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                E
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                LAIN-LAIN
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel.map((element) => {
              let BG = 0;
              let R = 0;
              let P = 0;
              let E = 0;

              let BG_NOTA = 0;
              let R_NOTA = 0;
              let P_NOTA = 0;
              let E_NOTA = 0;

              let lain_lain = 0;
              let lain_lain_nota = 0;

              if (element.jenis === "BG") {
                BG = element.berat_kirim;
                BG_NOTA = element.nota;
              } else if (element.jenis === "R") {
                R = element.berat_kirim;
                R_NOTA = element.nota;
              } else if (element.jenis === "P") {
                P = element.berat_kirim;
                P_NOTA = element.nota;
              } else if (element.jenis === "E") {
                E = element.berat_kirim;
                E_NOTA = element.nota;
              } else {
                lain_lain += parseFloat(element.berat_kirim);
                lain_lain_nota += parseFloat(element.nota);
              }
              return (
                <>
                  <tr>
                    <td rowSpan="3" style={{ verticalAlign: "middle" }}>
                      {element.tanggal}
                    </td>
                    <td>Nota</td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(BG_NOTA).toFixed(3)}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(R_NOTA).toFixed(3)}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(P_NOTA).toFixed(3)}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(E_NOTA).toFixed(3)}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(lain_lain_nota).toFixed(3)}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(BG_NOTA).toFixed(3)}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(R_NOTA).toFixed(3)}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(P_NOTA).toFixed(3)}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(E_NOTA).toFixed(3)}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      {parseFloat(lain_lain_nota).toFixed(3)}
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan="2" style={{ verticalAlign: "middle" }}>
                      Berat
                    </td>
                    <td style={{ textAlign: "right" }}>{BG.toFixed(3)}</td>
                    <td style={{ textAlign: "right" }}>{R.toFixed(3)}</td>
                    <td style={{ textAlign: "right" }}>{P.toFixed(3)}</td>
                    <td style={{ textAlign: "right" }}>{E.toFixed(3)}</td>
                    <td style={{ textAlign: "right" }}>
                      {lain_lain.toFixed(3)}
                    </td>
                    <td style={{ textAlign: "right" }}>{BG.toFixed(3)}</td>
                    <td style={{ textAlign: "right" }}>{R.toFixed(3)}</td>
                    <td style={{ textAlign: "right" }}>{P.toFixed(3)}</td>
                    <td style={{ textAlign: "right" }}>{E.toFixed(3)}</td>
                    <td style={{ textAlign: "right" }}>
                      {lain_lain.toFixed(3)}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "right" }}>{BG.toFixed(3)}</td>
                    <td style={{ textAlign: "right" }}>{R.toFixed(3)}</td>
                    <td style={{ textAlign: "right" }}>{P.toFixed(3)}</td>
                    <td style={{ textAlign: "right" }}>{E.toFixed(3)}</td>
                    <td style={{ textAlign: "right" }}>
                      {lain_lain.toFixed(3)}
                    </td>
                    <td style={{ textAlign: "right" }}>{BG.toFixed(3)}</td>
                    <td style={{ textAlign: "right" }}>{R.toFixed(3)}</td>
                    <td style={{ textAlign: "right" }}>{P.toFixed(3)}</td>
                    <td style={{ textAlign: "right" }}>{E.toFixed(3)}</td>
                    <td style={{ textAlign: "right" }}>
                      {lain_lain.toFixed(3)}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
export default ExcelReport;
