import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "", divisi: "" };
  }

  componentDidMount() {
    let data = this.props.dataHead || [];
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

    const dataGroup = groupBy(this.props.dataExel, "no_kirim");
    const dataGroupArr = Object.values(dataGroup);

    let jmlterimaAll = 0;
    let brtterimaAll = 0;

    this.props.dataExel.forEach((element) => {
      jmlterimaAll = jmlterimaAll + parseFloat(element.jumlah_kirim);
      brtterimaAll = brtterimaAll + parseFloat(element.berat_kirim);
    });

    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename={`LAPORAN KIRIM GUDANG QC`}
          sheet={`LAPORAN KIRIM GUDANG QC`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="10" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN KIRIM GUDANG QC
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
                DESIGN
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
                      colSpan="3"
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
                      {""}
                    </td>
                  </tr>
                  {element.map((item) => {
                    jmlterima = jmlterima + parseFloat(item.jumlah_kirim);
                    brtterima = brtterima + parseFloat(item.berat_kirim);

                    return (
                      <tr>
                        <td>{item.tgl_kirim}</td>
                        <td>{item.no_job_order}</td>
                        <td>{item.nama_barang}</td>
                        <td>{item.jenis_bahan}</td>
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
                        <td>{item.design}</td>
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
                colSpan="4"
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
