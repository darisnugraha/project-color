import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "", type: "" };
  }

  componentDidMount() {
    let data = this.props.dataHead || [];
    this.setState({
      tgl_dari_string: data.tgl_dari,
      tgl_sampai_string: data.tgl_sampai,
      type: data.type,
    });
  }
  render() {
    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename={`LAPORAN JOB PROCESSING (${this.state.type})`}
          sheet={`LAPORAN JOB PROCESSING (${this.state.type})`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="10" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN JOB PROCESSING ({this.state.type})
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
                rowSpan={3}
              >
                NO
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={3}
              >
                NO PO
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={3}
              >
                TANGGAL
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={3}
              >
                DELIVERY
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={3}
              >
                FIN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={3}
              >
                QTY
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={3}
              >
                BERAT
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={20}
              >
                PROCESSING
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
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
                colSpan={2}
              >
                MASTER
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                MOLDING
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                WAX & WAX SETTING
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                CASTING
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                ADM
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                FILLING
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                HAND SETT
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                POLISHING
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                PLATTING
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                {"ADMIN (BARANG) => KELUAR"}
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                PROCESSING
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
                  <td style={{ textAlign: "center" }}>{item.no}</td>
                  <td>{item.no_po}</td>
                  <td>{item.tanggal}</td>
                  <td>{item.delivery}</td>
                  <td>{item.fin}</td>
                  <td>{item.qty}</td>
                  <td>{item.berat}</td>
                  <td>{item.jumlah_master}</td>
                  <td>{item.berat_master}</td>
                  <td>{item.jumlah_molding}</td>
                  <td>{item.berat_molding}</td>
                  <td>{item.jumlah_wax}</td>
                  <td>{item.berat_wax}</td>
                  <td>{item.jumlah_casting}</td>
                  <td>{item.berat_casting}</td>
                  <td>{item.jumlah_adm}</td>
                  <td>{item.berat_adm}</td>
                  <td>{item.jumlah_filling}</td>
                  <td>{item.berat_filling}</td>
                  <td>{item.jumlah_handsetting}</td>
                  <td>{item.berat_handsetting}</td>
                  <td>{item.jumlah_polishing}</td>
                  <td>{item.berat_polishing}</td>
                  <td>{item.jumlah_platting}</td>
                  <td>{item.berat_platting}</td>
                  <td>{item.jumlah_admin}</td>
                  <td>{item.berat_admin}</td>
                  <td>{item.jumlah_processing}</td>
                  <td>{item.berat_processing}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5} style={{ textAlign: "right" }}>
                TOTAL :{" "}
              </td>
              <td>
                {this.props.dataExel.reduce((a, b) => a + parseFloat(b.qty), 0)}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.berat),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_master),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.berat_master),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_molding),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.berat_molding),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_wax),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.berat_wax),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_casting),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.berat_casting),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_adm),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.berat_adm),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_filling),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.berat_filling),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_handsetting),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.berat_handsetting),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_polishing),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.berat_polishing),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_platting),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.berat_platting),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_admin),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.berat_admin),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_processing),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.berat_processing),
                  0
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReport;
