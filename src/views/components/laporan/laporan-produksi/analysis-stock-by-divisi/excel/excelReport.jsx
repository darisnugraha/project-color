import React, { Component } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class ExcelReport extends Component {
  constructor(props) {
    super(props);
    this.state = { tgl_dari_string: "", tgl_sampai_string: "", divisi: "" };
  }

  componentDidMount() {
    let data =
      JSON.parse(localStorage.getItem("analysis_stock_by_divisi_head")) || [];
    this.setState({
      tgl_dari_string: data.tgl_dari,
      tgl_sampai_string: data.tgl_sampai,
      divisi: data.divisi,
    });
  }
  render() {
    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename={`LAPORAN ANALYSIS STOCK (${this.state.divisi})`}
          sheet={`LAPORAN ANALYSIS STOCK (${this.state.divisi})`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan="10" style={{ textAlign: "center" }}>
                {" "}
                LAPORAN ANALYSIS STOCK {this.state.divisi}
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
                rowSpan={2}
              >
                NO JOB ORDER
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={2}
              >
                KODE BARANG
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={2}
              >
                NAMA BARANG
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                rowSpan={2}
              >
                JENIS BAHAN
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                TERIMA
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "#000",
                  textAlign: "center",
                }}
                colSpan={2}
              >
                KIRIM
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "red",
                  textAlign: "center",
                }}
                rowSpan={2}
              >
                SUSUT
              </td>
              <td
                style={{
                  backgroundColor: "#99CCFF",
                  color: "red",
                  textAlign: "center",
                }}
                rowSpan={2}
              >
                PERSEN
              </td>
            </tr>
            <tr>
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
            </tr>
          </thead>
          <tbody>
            {this.props.dataExel.map((element) => {
              return (
                <tr>
                  <td>{element.no_job_order}</td>
                  <td>{element.kode_barang}</td>
                  <td>{element.nama_barang}</td>
                  <td>{element.jenis_bahan}</td>
                  <td style={{ textAlign: "right" }}>
                    {element.jumlah_terima}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    {parseFloat(element.berat_terima).toFixed(3)}
                  </td>
                  <td style={{ textAlign: "right" }}>{element.jumlah_kirim}</td>
                  <td style={{ textAlign: "right" }}>
                    {parseFloat(element.berat_kirim).toFixed(3)}
                  </td>
                  <td style={{ color: "red", textAlign: "right" }}>
                    {parseFloat(element.susut).toFixed(3)}
                  </td>
                  <td style={{ color: "red", textAlign: "right" }}>
                    {element.persen + " %"}
                  </td>
                </tr>
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
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_terima),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_terima), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel.reduce(
                  (a, b) => a + parseFloat(b.jumlah_kirim),
                  0
                )}
              </td>
              <td
                style={{
                  textAlign: "right",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.berat_kirim), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                  color: "red",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.susut), 0)
                  .toFixed(3)}
              </td>
              <td
                style={{
                  textAlign: "right",
                  color: "red",
                }}
              >
                {this.props.dataExel
                  .reduce((a, b) => a + parseFloat(b.persen), 0)
                  .toFixed(3) + " %"}
              </td>
            </tr>
          </tfoot>
        </table>
      </>
    );
  }
}
export default ExcelReport;
