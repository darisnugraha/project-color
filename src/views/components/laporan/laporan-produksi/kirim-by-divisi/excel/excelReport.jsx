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
    let brtspruAll = 0;
    let bubukAll = 0;
    let baturusakAll = 0;
    let susutAll = 0;

    this.props.dataExel.forEach((element) => {
      jmlkirimAll = jmlkirimAll + parseFloat(element.stock_out);
      brtkirimAll = brtkirimAll + parseFloat(element.berat_out);
      jmlrusakAll = jmlrusakAll + parseFloat(element.stock_rusak);
      brtrusakAll = brtrusakAll + parseFloat(element.berat_rusak);
      brtspruAll = brtspruAll + parseFloat(element.berat_spru || 0);
      bubukAll = bubukAll + parseFloat(element.bubuk || 0);
      baturusakAll = baturusakAll + parseFloat(element.batu_rusak || 0);
      susutAll = susutAll + parseFloat(element.susut);
    });

    if (this.props.dataHead?.divisi === "SAMPLE") {
      return (
        <>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
            table="table-to-xls"
            filename={`LAPORAN KIRIM BY DIVISI (${this.props.dataHead?.divisi})`}
            sheet={`LAPORAN KIRIM BY DIVISI (${this.props.dataHead?.divisi})`}
            buttonText="Export Excel"
          />
          <table id="table-to-xls" style={{ display: "none" }}>
            <thead>
              <tr>
                <th colSpan="10" style={{ textAlign: "center" }}>
                  {" "}
                  LAPORAN KIRIM BY DIVISI {this.props.dataHead?.divisi}
                </th>
              </tr>
              <tr>
                <th colSpan="10">
                  {" "}
                  Tanggal :{" "}
                  {this.props.dataHead.tgl_dari_string +
                    " s/d " +
                    this.props.dataHead.tgl_sampai_string}{" "}
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
              </tr>
            </tfoot>
          </table>
        </>
      );
    } else if (
      this.props.dataHead?.divisi === "MASTER" ||
      this.props.dataHead?.divisi === "HANDSETTING1" ||
      this.props.dataHead?.divisi === "HANDSETTING2" ||
      this.props.dataHead?.divisi === "HANDSETTING3"
    ) {
      return (
        <>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
            table="table-to-xls"
            filename={`LAPORAN KIRIM BY DIVISI (${this.props.dataHead?.divisi})`}
            sheet={`LAPORAN KIRIM BY DIVISI (${this.props.dataHead?.divisi})`}
            buttonText="Export Excel"
          />
          <table id="table-to-xls" style={{ display: "none" }}>
            <thead>
              <tr>
                <th colSpan="10" style={{ textAlign: "center" }}>
                  {" "}
                  LAPORAN KIRIM BY DIVISI {this.props.dataHead?.divisi}
                </th>
              </tr>
              <tr>
                <th colSpan="10">
                  {" "}
                  Tanggal :{" "}
                  {this.props.dataHead.tgl_dari_string +
                    " s/d " +
                    this.props.dataHead.tgl_sampai_string}{" "}
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
                  BUBUK
                </td>
                <td
                  style={{
                    backgroundColor: "#99CCFF",
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  BATU RUSAK
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
                let bubuk = 0;
                let baturusak = 0;
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
                      bubuk = bubuk + parseFloat(item.bubuk);
                      baturusak = baturusak + parseFloat(item.batu_rusak);
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
                            {item.bubuk}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            {item.batu_rusak}
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
                        {bubuk}
                      </td>
                      <td
                        style={{
                          backgroundColor: "#dddddd",
                          textAlign: "right",
                        }}
                      >
                        {baturusak.toFixed(3)}
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
                  {bubukAll}
                </td>
                <td
                  style={{
                    textAlign: "right",
                  }}
                >
                  {baturusakAll.toFixed(3)}
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
    } else if (
      this.props.dataHead?.divisi === "FR1" ||
      this.props.dataHead?.divisi === "FR2" ||
      this.props.dataHead?.divisi === "FR3"
    ) {
      return (
        <>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
            table="table-to-xls"
            filename={`LAPORAN KIRIM BY DIVISI (${this.props.dataHead?.divisi})`}
            sheet={`LAPORAN KIRIM BY DIVISI (${this.props.dataHead?.divisi})`}
            buttonText="Export Excel"
          />
          <table id="table-to-xls" style={{ display: "none" }}>
            <thead>
              <tr>
                <th colSpan="10" style={{ textAlign: "center" }}>
                  {" "}
                  LAPORAN KIRIM BY DIVISI {this.props.dataHead?.divisi}
                </th>
              </tr>
              <tr>
                <th colSpan="10">
                  {" "}
                  Tanggal :{" "}
                  {this.props.dataHead.tgl_dari_string +
                    " s/d " +
                    this.props.dataHead.tgl_sampai_string}{" "}
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
                  BATU RUSAK
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
                let brtspru = 0;
                let bubuk = 0;
                let baturusak = 0;
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
                      brtspru = brtspru + parseFloat(item.berat_spru);
                      bubuk = bubuk + parseFloat(item.bubuk);
                      baturusak = baturusak + parseFloat(item.batu_rusak);
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
                            {item.berat_spru}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            {item.bubuk}
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                            }}
                          >
                            {item.batu_rusak}
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
                        {brtspru.toFixed(3)}
                      </td>
                      <td
                        style={{
                          backgroundColor: "#dddddd",
                          textAlign: "right",
                        }}
                      >
                        {bubuk}
                      </td>
                      <td
                        style={{
                          backgroundColor: "#dddddd",
                          textAlign: "right",
                        }}
                      >
                        {baturusak.toFixed(3)}
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
                  {brtspruAll.toFixed(3)}
                </td>
                <td
                  style={{
                    textAlign: "right",
                  }}
                >
                  {bubukAll}
                </td>
                <td
                  style={{
                    textAlign: "right",
                  }}
                >
                  {baturusakAll.toFixed(3)}
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
    } else {
      return (
        <>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="ant-btn ant-btn-primary ant-btn-block ant-btn-success"
            table="table-to-xls"
            filename={`LAPORAN KIRIM BY DIVISI (${this.props.dataHead?.divisi})`}
            sheet={`LAPORAN KIRIM BY DIVISI (${this.props.dataHead?.divisi})`}
            buttonText="Export Excel"
          />
          <table id="table-to-xls" style={{ display: "none" }}>
            <thead>
              <tr>
                <th colSpan="10" style={{ textAlign: "center" }}>
                  {" "}
                  LAPORAN KIRIM BY DIVISI {this.props.dataHead?.divisi}
                </th>
              </tr>
              <tr>
                <th colSpan="10">
                  {" "}
                  Tanggal :{" "}
                  {this.props.dataHead.tgl_dari_string +
                    " s/d " +
                    this.props.dataHead.tgl_sampai_string}{" "}
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
}
export default ExcelReport;
