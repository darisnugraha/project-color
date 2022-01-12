import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import service from "../../../../../../../infrastructure/services/index";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "" };
  }

  componentDidMount() {
    let data = service.getLocal("kirim_by_divisi_head") || [];
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

    const dataGroup = groupBy(this.props.dataExel, "kode_jenis");
    const dataGroupArr = Object.values(dataGroup);

    let jmlkirimAll = 0;
    let brtkirimAll = 0;
    let jmlrusakAll = 0;
    let brtrusakAll = 0;
    let jmlsparepartAll = 0;
    let brtsparepartAll = 0;
    let susutAll = 0;

    this.props.dataExel.forEach((element) => {
      jmlkirimAll = jmlkirimAll + parseFloat(element.jumlah_kirim);
      brtkirimAll = brtkirimAll + parseFloat(element.berat_kirim);
      jmlrusakAll = jmlrusakAll + parseFloat(element.jumlah_rusak);
      brtrusakAll = brtrusakAll + parseFloat(element.berat_rusak);
      jmlsparepartAll = jmlsparepartAll + parseFloat(element.jumlah_sparepart);
      brtsparepartAll = brtsparepartAll + parseFloat(element.berat_sparepart);
      susutAll = susutAll + parseFloat(element.susut);
    });

    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename="LAPORAN KIRIM PLATTING"
          sheet="LAPORAN KIRIM PLATTING"
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="10" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN KIRIM PLATTING{" "}
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
                JML SPAREPART
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                BRT SPAREPART
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
              let jmlsparepart = 0;
              let brtsparepart = 0;
              let susut = 0;

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
                      Kode Jenis : {element[0].kode_jenis}
                    </td>
                    <td
                      colSpan="7"
                      style={{
                        backgroundColor: "#bbbbbb",
                        textAlign: "left",
                      }}
                    >
                      {""}
                    </td>
                  </tr>
                  {element.map((item) => {
                    jmlkirim = jmlkirim + parseFloat(item.jumlah_kirim);
                    brtkirim = brtkirim + parseFloat(item.berat_kirim);
                    jmlrusak = jmlrusak + parseFloat(item.jumlah_rusak);
                    brtrusak = brtrusak + parseFloat(item.berat_rusak);
                    jmlsparepart =
                      jmlsparepart + parseFloat(item.jumlah_sparepart);
                    brtsparepart =
                      brtsparepart + parseFloat(item.berat_sparepart);
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
                          {item.jumlah_kirim}
                        </td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.berat_kirim}
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
                          {item.jumlah_sparepart}
                        </td>
                        <td
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {item.berat_sparepart}
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
                      {jmlsparepart}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#dddddd",
                        textAlign: "right",
                      }}
                    >
                      {brtsparepart.toFixed(3)}
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
                {jmlsparepartAll}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {brtsparepartAll.toFixed(3)}
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
