import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let jmlkirimAll = 0;
    let brtkirimAll = 0;
    let jmlrusakAll = 0;
    let brtrusakAll = 0;
    let susutAll = 0;

    this.props.dataExel.forEach((element) => {
      jmlkirimAll = jmlkirimAll + parseFloat(element.stock_in);
      brtkirimAll = brtkirimAll + parseFloat(element.berat_in);
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
              <th colSpan="10"> Tanggal : </th>
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
                NO TERIMA
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
                DESIGN
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
                SUSUT
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel.map((element) => {
              return (
                <tr>
                  <td>{element.tgl_terima}</td>
                  <td>{element.no_terima}</td>
                  <td>{element.no_job_order}</td>
                  <td>{element.kode_barang}</td>
                  <td>{element.nama_barang}</td>
                  <td>{element.kode_jenis_bahan}</td>
                  <td>{element.design}</td>
                  <td
                    style={{
                      textAlign: "right",
                    }}
                  >
                    {element.stock_in}
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                    }}
                  >
                    {element.berat_in}
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                    }}
                  >
                    {element.stock_rusak}
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                    }}
                  >
                    {element.berat_rusak}
                  </td>
                  <td
                    style={{
                      textAlign: "right",
                    }}
                  >
                    {element.susut}
                  </td>
                </tr>
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
                {jmlkirimAll.toFixed(3)}
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
                {jmlrusakAll.toFixed(3)}
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
