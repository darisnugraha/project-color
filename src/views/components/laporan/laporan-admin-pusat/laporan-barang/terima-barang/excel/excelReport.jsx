import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "" };
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("terima_barang_head")) || [];
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
    let jmlrusakAll = 0;
    let brtrusakAll = 0;
    let brtspruAll = 0;
    let bubukAll = 0;

    this.props.dataExel.forEach((element) => {
      jmlterimaAll = jmlterimaAll + parseFloat(element.stock_in);
      brtterimaAll = brtterimaAll + parseFloat(element.berat_in);
      jmlrusakAll = jmlrusakAll + parseFloat(element.stock_rusak);
      brtrusakAll = brtrusakAll + parseFloat(element.berat_rusak);
      brtspruAll = brtspruAll + parseFloat(element.berat_spru);
      bubukAll = bubukAll + parseFloat(element.bubuk);
    });

    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename="LAPORAN TERIMA BARANG"
          sheet="LAPORAN TERIMA BARANG"
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="10" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN TERIMA BARANG{" "}
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
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                JML RUSAK
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BRT RUSAK
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BRT SPRU
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BUBUK
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
                DESIGN
              </td>
            </tr>
          </thead>
          <tbody>
            {dataGroupArr.map((element) => {
              let jmlterima = 0;
              let brtterima = 0;
              let jmlrusak = 0;
              let brtrusak = 0;
              let brtspru = 0;
              let bubuk = 0;

              return (
                <>
                  <tr>
                    <td
                      colSpan="13"
                      style={{
                        backgroundColor: "#bbbbbb",
                        textAlign: "left",
                      }}
                    >
                      No TERIMA : {element[0].no_terima}
                    </td>
                  </tr>
                  {element.map((item) => {
                    jmlterima = jmlterima + parseFloat(item.stock_in);
                    brtterima = brtterima + parseFloat(item.berat_in);
                    jmlrusak = jmlrusak + parseFloat(item.stock_rusak);
                    brtrusak = brtrusak + parseFloat(item.berat_rusak);
                    brtspru = brtspru + parseFloat(item.berat_spru);
                    bubuk = bubuk + parseFloat(item.bubuk);

                    return (
                      <tr>
                        <td>{item.tgl_terima}</td>
                        <td>{item.no_job_order}</td>
                        <td>{item.kode_barang}</td>
                        <td>{item.nama_barang}</td>
                        <td>{item.kode_jenis_bahan}</td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.stock_in}
                        </td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.berat_in}
                        </td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.stock_rusak}
                        </td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.berat_rusak}
                        </td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.berat_spru}
                        </td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.bubuk}
                        </td>
                        <td>{item.asal_divisi}</td>
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
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {jmlrusak}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {brtrusak.toFixed(3)}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {brtspru.toFixed(3)}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {bubuk.toFixed(3)}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {""}
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
                {jmlterimaAll}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {brtterimaAll.toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {jmlrusakAll}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {brtrusakAll.toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {brtspruAll.toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {bubukAll.toFixed(3)}
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReport;
