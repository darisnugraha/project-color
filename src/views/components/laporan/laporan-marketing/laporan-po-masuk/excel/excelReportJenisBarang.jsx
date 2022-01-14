import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "", divisi: "" };
  }

  render() {
    const groupBy = (array, key) => {
      return array.reduce((result, currentValue) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
          currentValue
        );
        return result;
      }, {});
    };

    const dataGroup = groupBy(this.props.dataExel || [], "bulan");
    const dataGroupArr = Object.values(dataGroup);
    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename={`LAPORAN PO MASUK JENIS BARANG`}
          sheet={`LAPORAN PO MASUK JENIS BARANG`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="3" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN PO MASUK JENIS BARANG
              </th>
            </tr>
            <tr>
              <th colSpan="3">
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
                colSpan={3}
              >
                TOTAL MASUK PO
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
                BULAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                PCS
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
                  <td>{item.bulan}</td>
                  <td style={{ textAlign: "right" }}>{item.pcs}</td>
                  <td style={{ textAlign: "right" }}>{item.berat}</td>
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
                {this.props.dataExel.reduce((a, b) => a + parseFloat(b.pcs), 0)}
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
            </tr>
            <tr></tr>
          </tfoot>
          <thead>
            <tr>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={17}
              >
                PER JENIS BARANG
              </td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={3}
              >
                MR
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                PR
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                BR
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                BG
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                NK
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                PD
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                ER
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                WR
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
                PCS
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
                PCS
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
                PCS
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
                PCS
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
                PCS
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
                PCS
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
                PCS
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
                PCS
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
            {dataGroupArr.map((element) => {
              return (
                <>
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#4DA6FF",
                        color: "#000",
                        textAlign: "center",
                      }}
                      colSpan={17}
                    >
                      BULAN : {element[0]?.bulan}
                    </td>
                  </tr>
                  {element.map((item) => {
                    return (
                      <tr>
                        <td colSpan={2}>{item.total_stock_mr}</td>
                        <td>{item.total_berat_mr}</td>
                        <td>{item.total_stock_pr}</td>
                        <td>{item.total_berat_pr}</td>
                        <td>{item.total_stock_br}</td>
                        <td>{item.total_berat_br}</td>
                        <td>{item.total_stock_bg}</td>
                        <td>{item.total_berat_bg}</td>
                        <td>{item.total_stock_nk}</td>
                        <td>{item.total_berat_nk}</td>
                        <td>{item.total_stock_pd}</td>
                        <td>{item.total_berat_pd}</td>
                        <td>{item.total_stock_er}</td>
                        <td>{item.total_berat_er}</td>
                        <td>{item.total_stock_wr}</td>
                        <td>{item.total_berat_wr}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>SUB TOTAL : </td>
                    <td>
                      {element.reduce(
                        (a, b) => a + parseFloat(b.total_stock_mr),
                        0
                      )}
                    </td>
                    <td>
                      {element
                        .reduce((a, b) => a + parseFloat(b.total_berat_mr), 0)
                        .toFixed(3)}
                    </td>
                    <td>
                      {element.reduce(
                        (a, b) => a + parseFloat(b.total_stock_pr),
                        0
                      )}
                    </td>
                    <td>
                      {element
                        .reduce((a, b) => a + parseFloat(b.total_berat_pr), 0)
                        .toFixed(3)}
                    </td>
                    <td>
                      {element.reduce(
                        (a, b) => a + parseFloat(b.total_stock_br),
                        0
                      )}
                    </td>
                    <td>
                      {element
                        .reduce((a, b) => a + parseFloat(b.total_berat_br), 0)
                        .toFixed(3)}
                    </td>
                    <td>
                      {element.reduce(
                        (a, b) => a + parseFloat(b.total_stock_bg),
                        0
                      )}
                    </td>
                    <td>
                      {element
                        .reduce((a, b) => a + parseFloat(b.total_berat_bg), 0)
                        .toFixed(3)}
                    </td>
                    <td>
                      {element.reduce(
                        (a, b) => a + parseFloat(b.total_stock_nk),
                        0
                      )}
                    </td>
                    <td>
                      {element
                        .reduce((a, b) => a + parseFloat(b.total_berat_nk), 0)
                        .toFixed(3)}
                    </td>
                    <td>
                      {element.reduce(
                        (a, b) => a + parseFloat(b.total_stock_pd),
                        0
                      )}
                    </td>
                    <td>
                      {element
                        .reduce((a, b) => a + parseFloat(b.total_berat_pd), 0)
                        .toFixed(3)}
                    </td>
                    <td>
                      {element.reduce(
                        (a, b) => a + parseFloat(b.total_stock_er),
                        0
                      )}
                    </td>
                    <td>
                      {element
                        .reduce((a, b) => a + parseFloat(b.total_berat_er), 0)
                        .toFixed(3)}
                    </td>
                    <td>
                      {element.reduce(
                        (a, b) => a + parseFloat(b.total_stock_wr),
                        0
                      )}
                    </td>
                    <td>
                      {element
                        .reduce((a, b) => a + parseFloat(b.total_berat_wr), 0)
                        .toFixed(3)}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>GRAND TOTAL : </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.total_stock_mr),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.total_berat_mr), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.total_stock_pr),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.total_berat_pr), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.total_stock_br),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.total_berat_br), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.total_stock_bg),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.total_berat_bg), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.total_stock_nk),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.total_berat_nk), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.total_stock_pd),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.total_berat_pd), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.total_stock_er),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.total_berat_er), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.total_stock_wr),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.total_berat_wr), 0)
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
