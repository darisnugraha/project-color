import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "" };
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("kirim_casting_head")) || [];
    this.setState({
      tgl_dari_string: data.tgl_dari,
      tgl_sampai_string: data.tgl_sampai,
    });
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

    const dataGroup = groupBy(this.props.dataExel, "no_kirim");
    const dataGroupArr = Object.values(dataGroup);

    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename="LAPORAN KIRIM CASTING"
          sheet="LAPORAN KIRIM CASTING"
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="6" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN KIRIM CASTING{" "}
              </th>
            </tr>
            <tr>
              <th colSpan="6">
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
                  textAlign: "center",
                }}
              >
                TANGGAL
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NO KIRIM
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                JENIS
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                JENIS BAHAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                STOCK
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
                      colSpan="6"
                      style={{
                        backgroundColor: "#bbbbbb",
                        textAlign: "left",
                      }}
                    >
                      No Kirim : {element[0].no_kirim}
                    </td>
                  </tr>
                  {element.map((item) => {
                    return (
                      <tr>
                        <td>{item.tgl_kirim}</td>
                        <td>{item.no_kirim}</td>
                        <td>{item.jenis_saldo}</td>
                        <td>{item.kode_jenis_bahan}</td>
                        <td>{item.stock}</td>
                        <td>{item.berat}</td>
                      </tr>
                    );
                  })}
                </>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">Grand Total</td>
              <td>
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.stock),
                  0
                )}
              </td>
              <td>
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat), 0)
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
