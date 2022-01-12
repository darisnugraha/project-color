import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import service from "../../../../../../infrastructure/services/index";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "", divisi: "" };
  }

  componentDidMount() {
    let data = service.getLocal("sample_terima_bahan_head") || [];
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
          filename={`LAPORAN SAMPLE TERIMA BAHAN`}
          sheet={`LAPORAN SAMPLE TERIMA BAHAN`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="6" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN SAMPLE TERIMA BAHAN
              </th>
            </tr>
            <tr>
              <th colSpan="6">
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
                KODE BAHAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                ASAL DIVISI
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
                JENIS BAHAN
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
                      colSpan="3"
                      style={{
                        backgroundColor: "#bbbbbb",
                        textAlign: "left",
                      }}
                    >
                      No Terima : {element[0].no_terima}
                    </td>
                    <td
                      colSpan="3"
                      style={{
                        backgroundColor: "#bbbbbb",
                        textAlign: "left",
                      }}
                    >
                      {""}
                    </td>
                  </tr>
                  {element.map((item) => {
                    return (
                      <tr>
                        <td>{item.tanggal_terima}</td>
                        <td>{item.kode_bahan}</td>
                        <td>{item.asal_divisi}</td>
                        <td>{item.no_job_order}</td>
                        <td>{item.jenis_bahan}</td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.berat}
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
                      {element
                        .reduce((a, b) => a + parseFloat(b.berat), 0)
                        .toFixed(3)}
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
