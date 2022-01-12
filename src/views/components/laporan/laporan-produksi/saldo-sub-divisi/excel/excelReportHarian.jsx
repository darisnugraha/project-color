import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import service from "../../../../../../infrastructure/services/index";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "", divisi: "" };
  }

  componentDidMount() {
    let data = service.getLocal("saldo_sub_divisi_head") || [];
    this.setState({
      tgl_dari_string: data.tgl_dari,
      tgl_sampai_string: data.tgl_sampai,
      divisi: data.divisi,
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

    const dataGroup = groupBy(this.props.dataExel, "no_terima");
    const dataGroupArr = Object.values(dataGroup);

    let jmlterimaAll = 0;
    let brtterimaAll = 0;

    this.props.dataExel.forEach((element) => {
      jmlterimaAll = jmlterimaAll + parseFloat(element.jumlah_terima);
      brtterimaAll = brtterimaAll + parseFloat(element.berat_terima);
    });

    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename={`LAPORAN TERIMA SUB DIVISI (${this.state.divisi})`}
          sheet={`LAPORAN TERIMA SUB DIVISI (${this.state.divisi})`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="10" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN TERIMA SUB DIVISI {this.state.divisi}
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
                SUB DIVISI
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
                BAHAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                JML TERIMA
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BRT TERIMA
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
                      colSpan="7"
                      style={{
                        backgroundColor: "#bbbbbb",
                        textAlign: "left",
                      }}
                    >
                      No Terima : {element[0].no_terima}
                    </td>
                  </tr>
                  {element.map((item) => {
                    jmlterima = jmlterima + parseFloat(item.jumlah_terima);
                    brtterima = brtterima + parseFloat(item.berat_terima);

                    return (
                      <tr>
                        <td>{item.tanggal}</td>
                        <td>{item.sub_divisi}</td>
                        <td>{item.no_job_order}</td>
                        <td>{item.kode_barang}</td>
                        <td>{item.jenis_bahan}</td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.jumlah_terima}
                        </td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.berat_terima}
                        </td>
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
