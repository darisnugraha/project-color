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
          filename={`LAPORAN PO MASUK FORMAT BARU`}
          sheet={`LAPORAN PO MASUK FORMAT BARU`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="3" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN PO MASUK FORMAT BARU
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
                colSpan={11}
              >
                PER CUSTOMER BARANG
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={3}
              >
                SPL 3
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                SPL 1
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                JR
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                NIM
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                NIJ
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
                      colSpan={11}
                    >
                      BULAN : {element[0]?.bulan}
                    </td>
                  </tr>
                  {element.map((item) => {
                    return (
                      <tr>
                        <td colSpan={2}>{item.total_stock_spl3}</td>
                        <td>{item.total_berat_spl3}</td>
                        <td>{item.total_stock_spl1}</td>
                        <td>{item.total_berat_spl1}</td>
                        <td>{item.total_stock_jr}</td>
                        <td>{item.total_berat_jr}</td>
                        <td>{item.total_stock_nim}</td>
                        <td>{item.total_berat_nim}</td>
                        <td>{item.total_stock_nij}</td>
                        <td>{item.total_berat_nij}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>SUB TOTAL : </td>
                    <td>
                      {element.reduce(
                        (a, b) => a + parseFloat(b.total_stock_spl3),
                        0
                      )}
                    </td>
                    <td>
                      {element
                        .reduce((a, b) => a + parseFloat(b.total_berat_spl3), 0)
                        .toFixed(3)}
                    </td>
                    <td>
                      {element.reduce(
                        (a, b) => a + parseFloat(b.total_stock_spl1),
                        0
                      )}
                    </td>
                    <td>
                      {element
                        .reduce((a, b) => a + parseFloat(b.total_berat_spl1), 0)
                        .toFixed(3)}
                    </td>
                    <td>
                      {element.reduce(
                        (a, b) => a + parseFloat(b.total_stock_jr),
                        0
                      )}
                    </td>
                    <td>
                      {element
                        .reduce((a, b) => a + parseFloat(b.total_berat_jr), 0)
                        .toFixed(3)}
                    </td>
                    <td>
                      {element.reduce(
                        (a, b) => a + parseFloat(b.total_stock_nim),
                        0
                      )}
                    </td>
                    <td>
                      {element
                        .reduce((a, b) => a + parseFloat(b.total_berat_nim), 0)
                        .toFixed(3)}
                    </td>
                    <td>
                      {element.reduce(
                        (a, b) => a + parseFloat(b.total_stock_nij),
                        0
                      )}
                    </td>
                    <td>
                      {element
                        .reduce((a, b) => a + parseFloat(b.total_berat_nij), 0)
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
                  (a, b) => a + parseFloat(b.total_stock_spl3),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.total_berat_spl3), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.total_stock_spl1),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.total_berat_spl1), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.total_stock_jr),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.total_berat_jr), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.total_stock_nim),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.total_berat_nim), 0)
                  .toFixed(3)}
              </td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.total_stock_nij),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.total_berat_nij), 0)
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
