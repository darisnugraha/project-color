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

    const dataGroup = groupBy(this.props.dataExel, "no_po_marketing");
    const dataGroupArr = Object.values(dataGroup);

    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename={`LAPORAN REPARASI KELUAR`}
          sheet={`LAPORAN REPARASI KELUAR`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <thead>
            <tr>
              <th colSpan={20} style={{ textAlign: "center" }}>
                LAPORAN REPARASI KELUAR
              </th>
            </tr>
            <tr>
              <th colSpan={20} style={{ textAlign: "center" }}>
                TANGGAL : {this.props.dataHead?.tgl_dari} s/d &nbsp;
                {this.props.dataHead?.tgl_sampai}
              </th>
            </tr>
          </thead>
          {dataGroupArr.map((element) => {
            return (
              <>
                <thead>
                  <tr>
                    <td
                      colSpan={14}
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      {element[0].no_po_marketing}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                      colSpan={2}
                    >
                      TANGGAL ORDER
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      {element[0].tanggal_order}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      TANGGAL SELESAI
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      {element[0].tanggal_selesai}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                      colSpan={9}
                    >
                      {""}
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
                      NO
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
                      GAMBAR
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
                      ONGKOS
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      BERAT / PCS
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      AWH 75
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      AYL 75
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      AYL 70
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      AWH 375
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      AYL 375
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      ALLOY
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      TOTAL BERAT
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {element.map((item) => {
                    return (
                      <>
                        <tr>
                          <td
                            colSpan={14}
                            style={{
                              backgroundColor: "#bbbbbb",
                              color: "#000",
                              textAlign: "left",
                            }}
                          >
                            {item.no_job_order}
                          </td>
                        </tr>
                        <tr>
                          <td style={{ textAlign: "center" }}>{item.no}</td>
                          <td style={{ textAlign: "center" }}>
                            {item.kode_barang}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            {item.nama_barang}
                          </td>
                          <td style={{ textAlign: "center" }}>{item.gambar}</td>
                          <td style={{ textAlign: "center" }}>
                            {item.keterangan}
                          </td>
                          <td>{item.ongkos}</td>
                          <td>{item.berat_pcs}</td>
                          <td>{item.awh75}</td>
                          <td>{item.ayl75}</td>
                          <td>{item.ayl70}</td>
                          <td>{item.awh375}</td>
                          <td>{item.ayl375}</td>
                          <td>{item.alloy}</td>
                          <td>{item.total_berat}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td
                      colSpan={5}
                      style={{ textAlign: "right", backgroundColor: "#80a1c2" }}
                    >
                      TOTAL
                    </td>
                    <td
                      style={{ textAlign: "right", backgroundColor: "#80a1c2" }}
                    >
                      {this.props.dataExel
                        .reduce((a, b) => a + parseFloat(b.ongkos), 0)
                        .toFixed(3)}
                    </td>
                    <td
                      style={{ textAlign: "right", backgroundColor: "#80a1c2" }}
                    >
                      {this.props.dataExel
                        .reduce((a, b) => a + parseFloat(b.berat_pcs), 0)
                        .toFixed(3)}
                    </td>
                    <td
                      colSpan={6}
                      style={{
                        textAlign: "center",
                        backgroundColor: "#80a1c2",
                      }}
                    >
                      {this.props.dataExel
                        .reduce(
                          (a, b) =>
                            a +
                            parseFloat(b.awh75) +
                            parseFloat(b.ayl75) +
                            parseFloat(b.ayl70) +
                            parseFloat(b.awh375) +
                            parseFloat(b.ayl375) +
                            parseFloat(b.alloy),
                          0
                        )
                        .toFixed(3)}
                    </td>
                    <td
                      style={{ textAlign: "right", backgroundColor: "#80a1c2" }}
                    >
                      {this.props.dataExel
                        .reduce((a, b) => a + parseFloat(b.total_berat), 0)
                        .toFixed(3)}
                    </td>
                  </tr>
                </tfoot>
              </>
            );
          })}
        </table>
      </>
    );
  }
}
export default ExcelReport;
