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
          filename={`LAPORAN PROSES PRODUKSI (REKAP)`}
          sheet={`LAPORAN PROSES PRODUKSI (REKAP)`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="27" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN PROSES PRODUKSI (REKAP)
              </th>
            </tr>
            <tr>
              <th colSpan="27">
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
                colSpan={27}
              >
                PROSES PRODUKSI (REKAP)
              </td>
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
                NO PO
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={2}
              >
                QTY
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={2}
              >
                BERAT
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                WAX
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                ADMIN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                FR
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
                TUMBLING
              </td>
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
                HANDSETTING
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                EPOXY
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
                SETOR MARKETING
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                SALDO PRODUKSI
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
                  <td>{item.no_po_marketing}</td>
                  <td style={{ textAlign: "right" }}>{item.qty}</td>
                  <td style={{ textAlign: "right" }}>{item.berat}</td>
                  <td style={{ textAlign: "right" }}>{item.jumlah_wax}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_wax}</td>
                  <td style={{ textAlign: "right" }}>{item.jumlah_admin}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_admin}</td>
                  <td style={{ textAlign: "right" }}>{item.jumlah_fr}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_fr}</td>
                  <td style={{ textAlign: "right" }}>{item.jumlah_casting}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_casting}</td>
                  <td style={{ textAlign: "right" }}>{item.jumlah_tumbling}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_tumbling}</td>
                  <td style={{ textAlign: "right" }}>{item.jumlah_master}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_master}</td>
                  <td style={{ textAlign: "right" }}>
                    {item.jumlah_handsetting}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    {item.berat_handsetting}
                  </td>
                  <td style={{ textAlign: "right" }}>{item.jumlah_epoxy}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_epoxy}</td>
                  <td style={{ textAlign: "right" }}>
                    {item.jumlah_polishing}
                  </td>
                  <td style={{ textAlign: "right" }}>{item.berat_polishing}</td>
                  <td style={{ textAlign: "right" }}>{item.jumlah_platting}</td>
                  <td style={{ textAlign: "right" }}>{item.berat_platting}</td>
                  <td style={{ textAlign: "right" }}>
                    {item.jumlah_setor_marketing}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    {item.berat_setor_marketing}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    {item.jumlah_saldo_produksi}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    {item.berat_saldo_produksi}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                Grand Total :
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce((a, b) => a + parseFloat(b.qty), 0)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_wax),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_wax), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_admin),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_admin), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_fr),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_fr), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_casting),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_casting), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_tumbling),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_tumbling), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_master),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_master), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_handsetting),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_handsetting), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_epoxy),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_epoxy), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_polishing),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_polishing), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_platting),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_platting), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_setor_marketing),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_setor_marketing), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_saldo_produksi),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_saldo_produksi), 0)
                  .toFixed(3)}
              </td>
            </tr>
            <tr></tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReport;
