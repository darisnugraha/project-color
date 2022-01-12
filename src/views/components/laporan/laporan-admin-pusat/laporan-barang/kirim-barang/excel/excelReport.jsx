import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import service from "../../../../../../../infrastructure/services/index";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "" };
  }

  componentDidMount() {
    let data = service.getLocal("kirim_barang_head") || [];
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

    let jmlkirimAll = 0;
    let brtkirimAll = 0;

    this.props.dataExel.forEach((element) => {
      jmlkirimAll = jmlkirimAll + parseFloat(element.stock_out);
      brtkirimAll = brtkirimAll + parseFloat(element.berat_out);
    });

    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename="LAPORAN KIRIM BARANG"
          sheet="LAPORAN KIRIM BARANG"
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="10" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN KIRIM BARANG{" "}
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
                NO JOB ORDER
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                KODE BARANG
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NAMA BARANG
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BAHAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                JML KIRIM
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BRT KIRIM
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                DESIGN
              </td>
            </tr>
          </thead>
          <tbody>
            {dataGroupArr.map((element) => {
              let jmlkirim = 0;
              let brtkirim = 0;

              return (
                <>
                  <tr>
                    <td
                      colSpan="4"
                      style={{
                        backgroundColor: "#bbbbbb",
                        textAlign: "left",
                      }}
                    >
                      No Kirim : {element[0].no_kirim}
                    </td>
                    <td
                      colSpan="4"
                      style={{
                        backgroundColor: "#bbbbbb",
                        textAlign: "left",
                      }}
                    >
                      Tujuan Divisi : {element[0].tujuan_divisi}
                    </td>
                  </tr>
                  {element.map((item) => {
                    jmlkirim = jmlkirim + parseFloat(item.stock_out);
                    brtkirim = brtkirim + parseFloat(item.berat_out);

                    return (
                      <tr>
                        <td>{item.tgl_kirim}</td>
                        <td>{item.no_job_order}</td>
                        <td>{item.kode_barang}</td>
                        <td>{item.nama_barang}</td>
                        <td>{item.kode_jenis_bahan}</td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.stock_out}
                        </td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.berat_out}
                        </td>
                        <td>{item.design}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td
                      colSpan="5"
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      Sub Total :
                    </td>
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {jmlkirim}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {brtkirim.toFixed(3)}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {""}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan="5"
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
                {jmlkirimAll}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {brtkirimAll.toFixed(3)}
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReport;
