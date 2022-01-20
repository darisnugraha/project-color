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

    const dataGroup = groupBy(this.props.dataExel, "no_terima");
    const dataGroupArr = Object.values(dataGroup);

    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename={`LAPORAN TERIMA BY DIVISI (${this.props.dataHead?.divisi})`}
          sheet={`LAPORAN TERIMA BY DIVISI (${this.props.dataHead?.divisi})`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="9" style={{ textAlign: "center" }}>
                LAPORAN TERIMA BY DIVISI ({this.props.dataHead?.divisi})
              </th>
            </tr>
            <tr>
              <th colSpan="9">
                Tanggal :
                {`${this.props.dataHead?.tgl_dari}  s/d  ${this.props.dataHead?.tgl_sampai}`}
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
                KODE BAHAN
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
                JUMLAH TERIMA
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BERAT TERIMA
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                JUMLAH RUSAK
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BERAT RUSAK
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
            </tr>
          </thead>
          <tbody>
            {dataGroupArr.map((element) => {
              return (
                <>
                  <tr>
                    <td
                      colSpan="5"
                      style={{
                        backgroundColor: "#bbbbbb",
                        textAlign: "left",
                      }}
                    >
                      NO TERIMA : {element[0].no_terima}
                    </td>
                    <td
                      colSpan="4"
                      style={{
                        backgroundColor: "#bbbbbb",
                        textAlign: "right",
                      }}
                    >
                      SUSUT : {element[0].susut}
                    </td>
                  </tr>
                  {element.map((item) => {
                    return (
                      <tr>
                        <td>{item.tanggal}</td>
                        <td>{item.no_kirim}</td>
                        <td>{item.kode_bahan}</td>
                        <td>{item.bahan}</td>
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
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.jumlah_rusak}
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
                          {item.bubuk}
                        </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td
                      colSpan="4"
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
                      {element.reduce(
                        (a, b) => a + parseFloat(b.jumlah_terima),
                        0
                      )}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {element
                        .reduce((a, b) => a + parseFloat(b.berat_terima), 0)
                        .toFixed(3)}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {element.reduce(
                        (a, b) => a + parseFloat(b.jumlah_rusak),
                        0
                      )}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {element
                        .reduce((a, b) => a + parseFloat(b.berat_rusak), 0)
                        .toFixed(3)}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {element
                        .reduce((a, b) => a + parseFloat(b.bubuk), 0)
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
                colSpan="4"
                style={{
                  textAlign: "right",
                }}
              >
                Grand Total :
              </td>
              <td
                style={{
                  backgroundColor: "#dddddd",
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_terima),
                  0
                )}
              </td>
              <td
                style={{
                  backgroundColor: "#dddddd",
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_terima), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  backgroundColor: "#dddddd",
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_rusak),
                  0
                )}
              </td>
              <td
                style={{
                  backgroundColor: "#dddddd",
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_rusak), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  backgroundColor: "#dddddd",
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.bubuk), 0)
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
