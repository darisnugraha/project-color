import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "", divisi: "" };
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("kirim_by_divisi_head")) || [];
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

    let jmlkirimAll = 0;
    let brtkirimAll = 0;
    let jmlrusakAll = 0;
    let brtrusakAll = 0;
    let susutAll = 0;

    this.props.dataExel.forEach((element) => {
      jmlkirimAll = jmlkirimAll + parseFloat(element.stock_out);
      brtkirimAll = brtkirimAll + parseFloat(element.berat_out);
      jmlrusakAll = jmlrusakAll + parseFloat(element.stock_rusak);
      brtrusakAll = brtrusakAll + parseFloat(element.berat_rusak);
      susutAll = susutAll + parseFloat(element.susut);
    });

    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename={`LAPORAN KIRIM BY DIVISI (${this.state.divisi})`}
          sheet={`LAPORAN KIRIM BY DIVISI (${this.state.divisi})`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="10" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN KIRIM BY DIVISI {this.state.divisi}
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
                SUSUT
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
              let jmlrusak = 0;
              let brtrusak = 0;
              let susut = 0;

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
                      Kode Jenis : {element[0].kode_jenis}
                    </td>
                    <td
                      colSpan="6"
                      style={{
                        backgroundColor: "#bbbbbb",
                        textAlign: "left",
                      }}
                    >
                      {""}
                    </td>
                  </tr>
                  {element.map((item) => {
                    jmlkirim = jmlkirim + parseFloat(item.stock_out);
                    brtkirim = brtkirim + parseFloat(item.berat_out);
                    jmlrusak = jmlrusak + parseFloat(item.stock_rusak);
                    brtrusak = brtrusak + parseFloat(item.berat_rusak);
                    susut = susut + parseFloat(item.susut);

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
                          {item.susut}
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
                      {susut.toFixed(3)}
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
                {susutAll.toFixed(3)}
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReport;
