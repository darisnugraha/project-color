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

    const dataGroup = groupBy(this.props.dataExel, "no_po_marketing");
    const dataGroupArr = Object.values(dataGroup);

    let no = 0;

    return (
      <>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
          table="table-to-xls"
          filename={`LAPORAN INPUT DRAFT PO`}
          sheet={`LAPORAN INPUT DRAFT PO`}
          buttonText="Export Excel"
        />
        <table id="table-to-xls" style={{ display: "none" }}>
          <tr>
            <th colSpan={20} style={{ textAlign: "center" }}>
              LAPORAN INPUT DRAFT PO
            </th>
          </tr>
          <tr>
            <th colSpan={20} style={{ textAlign: "center" }}>
              TANGGAL : {this.props.dataHead?.tgl_dari} s/d &nbsp;
              {this.props.dataHead?.tgl_sampai}
            </th>
          </tr>
          {dataGroupArr.map((element) => {
            return (
              <>
                <thead>
                  <tr>
                    <td
                      colSpan={20}
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
                      colSpan={2}
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
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
                      DEADLINE
                    </td>
                    <td
                      colSpan={4}
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      {element[0].tanggal_deadline}
                    </td>
                    <td
                      colSpan={7}
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      {""}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      STONE
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      {""}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      {""}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      {""}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
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
                      PEMBAGIAN
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      RING SIZE
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      CLR
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      SIZE
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      JML
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      TOTAL BERAT BATU
                    </td>
                    <td
                      style={{
                        backgroundColor: "#99CCFF",
                        color: "#000",
                        textAlign: "center",
                      }}
                    >
                      %
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {element.map((item) => {
                    no++;
                    return (
                      <>
                        <tr>
                          <td
                            colSpan={20}
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
                          <td style={{ textAlign: "center" }}>{no}</td>
                          <td style={{ textAlign: "center" }}>
                            {item.kode_barang}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            {item.nama_barang}
                          </td>
                          <td style={{ textAlign: "center" }}>{item.gambar}</td>
                          <td>{item.berat_pcs}</td>
                          <td>{item.awh75}</td>
                          <td>{item.ayl75}</td>
                          <td>{item.ayl70}</td>
                          <td>{item.awh375}</td>
                          <td>{item.ayl375}</td>
                          <td>{item.alloy}</td>
                          <td>{item.total_berat}</td>
                          <td>{item.keterangan}</td>
                          <td style={{ textAlign: "center" }}>
                            {item.pembagian}
                          </td>
                          <td>{item.ring_size}</td>
                          <td>{item.clr}</td>
                          <td>{item.size}</td>
                          <td>{item.jumlah}</td>
                          <td>{item.total_berat_batu}</td>
                          <td>{item.persen}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
                <tfoot></tfoot>
              </>
            );
          })}
        </table>
      </>
    );
  }
}
export default ExcelReport;
