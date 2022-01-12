import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import service from "../../../../../../infrastructure/services/index";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "", divisi: "" };
  }

  componentDidMount() {
    let data = service.getLocal("mutasi_outstand_by_divisi_head") || [];
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

    const dataGroup = groupBy(this.props.dataExel, "kode_jenis");
    const dataGroupArr = Object.values(dataGroup);

    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename={`LAPORAN MUTASI OUTSTAND (${this.state.divisi})`}
          sheet={`LAPORAN MUTASI OUTSTAND (${this.state.divisi})`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="10" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN MUTASI OUTSTAND {this.state.divisi}
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
                NO
              </td>
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
                JAM
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
                FOTO
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
                JENIS BAHAN
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
                BERAT TAMBAHAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                KETERANGAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NIJ 75
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NIJ 70
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                NIM 75
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
              return (
                <>
                  <tr>
                    <td
                      colSpan="8"
                      style={{
                        backgroundColor: "#bbbbbb",
                        textAlign: "left",
                      }}
                    >
                      Kode Jenis : {element[0].kode_jenis}
                    </td>
                    <td
                      colSpan="8"
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
                        <td>{item.no}</td>
                        <td>{item.tanggal}</td>
                        <td>{item.jam}</td>
                        <td>{item.no_job_order}</td>
                        <td>{item.kode_barang}</td>
                        <td>{item.foto}</td>
                        <td>{item.nama_barang}</td>
                        <td>{item.jenis_bahan}</td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.qty}
                        </td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.berat}
                        </td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.berat_tambahan}
                        </td>
                        <td>{item.keterangan}</td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.nij75}
                        </td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.nij70}
                        </td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.nim75}
                        </td>
                        <td>{item.design}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td
                      colSpan="8"
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
                      {element.reduce((a, b) => a + parseFloat(b.qty), 0)}
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
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {element
                        .reduce((a, b) => a + parseFloat(b.berat_tambahan), 0)
                        .toFixed(3)}
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
                      {element.reduce((a, b) => a + parseFloat(b.nij75), 0)}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {element.reduce((a, b) => a + parseFloat(b.nij70), 0)}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {element.reduce((a, b) => a + parseFloat(b.nim75), 0)}
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
                colSpan="8"
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
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_tambahan), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {""}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.nij75),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.nij70),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.nim75),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {""}
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReport;
