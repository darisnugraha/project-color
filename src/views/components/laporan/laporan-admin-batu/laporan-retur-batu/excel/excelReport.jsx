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

    const dataGroup = groupBy(this.props.dataExel, "no_retur");
    const dataGroupArr = Object.values(dataGroup);

    let jmlterimaAll = 0;
    let brtterimaAll = 0;

    this.props.dataExel.forEach((element) => {
      jmlterimaAll = jmlterimaAll + parseFloat(element.jumlah_retur);
      brtterimaAll = brtterimaAll + parseFloat(element.berat_retur);
    });

    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename={`LAPORAN RETUR BATU`}
          sheet={`LAPORAN RETUR BATU`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="9" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN RETUR BATU
              </th>
            </tr>
            <tr>
              <th colSpan="9">
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
                JENIS BAHAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                KODE BATU
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                UKURAN BATU
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                JUMLAH RETUR
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BERAT RETUR
              </td>
            </tr>
          </thead>
          <tbody>
            {dataGroupArr.map((element) => {
              let jmlterima = 0;
              let brtterima = 0;

              return (
                <>
                  <tr>
                    <td
                      colSpan="9"
                      style={{
                        backgroundColor: "#bbbbbb",
                        textAlign: "left",
                      }}
                    >
                      NO : {element[0].no_retur}
                    </td>
                  </tr>
                  {element.map((item) => {
                    jmlterima = jmlterima + parseFloat(item.jumlah_retur);
                    brtterima = brtterima + parseFloat(item.berat_retur);

                    return (
                      <tr>
                        <td>{item.tanggal}</td>
                        <td>{item.no_job_order}</td>
                        <td>{item.kode_barang}</td>
                        <td>{item.jenis_bahan}</td>
                        <td>{item.kode_batu}</td>
                        <td>{item.ukuran_batu}</td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.jumlah_retur}
                        </td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.berat_retur}
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td
                      colSpan="7"
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
                      {jmlterima}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {brtterima.toFixed(3)}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan="7"
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
                {jmlterimaAll}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {brtterimaAll.toFixed(3)}
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReport;
