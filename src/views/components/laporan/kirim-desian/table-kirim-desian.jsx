import React from "react";
import { useSelector } from "react-redux";
import "antd/dist/antd.css";
import KirimDesain from "../../../../application/selectors/kirimdesian";

const TableLaporanKirimDesian = () => {
  const dataTableKirimDesain = useSelector(KirimDesain.getAllKirimdesian);

  return (
    <table
      className="table table-striped table-bordered table-sm"
      border="1"
      width="100%"
      style={{ textAlign: "center" }}
    >
      <thead>
        <tr>
          <th rowSpan="2" style={{ verticalAlign: "middle" }}>
            Tanggal
          </th>
          <th rowSpan="2" style={{ verticalAlign: "middle" }}>Jenis</th>
          <th colSpan="5">P.spru</th>
          <th colSpan="5">Total</th>
        </tr>
        <tr>
          <th>BG</th>
          <th>R</th>
          <th>P</th>
          <th>E</th>
          <th>Lain-lain</th>
          <th>BG</th>
          <th>R</th>
          <th>P</th>
          <th>E</th>
          <th>Lain-lain</th>
        </tr>
      </thead>
      <tbody>
        {dataTableKirimDesain.map((element) => {
          let BG = 0;
          let R = 0;
          let P = 0;
          let E = 0;

          let BG_NOTA = 0;
          let R_NOTA = 0;
          let P_NOTA = 0;
          let E_NOTA = 0;

          let lain_lain = 0;
          let lain_lain_nota = 0;

          if (element.jenis === "BG") {
            BG = element.berat_kirim;
            BG_NOTA = element.nota;
          } else if (element.jenis === "R") {
            R = element.berat_kirim;
            R_NOTA = element.nota;
          } else if (element.jenis === "P") {
            P = element.berat_kirim;
            P_NOTA = element.nota;
          } else if (element.jenis === "E") {
            E = element.berat_kirim;
            E_NOTA = element.nota;
          } else {
            lain_lain += parseFloat(element.berat_kirim);
            lain_lain_nota += parseFloat(element.nota);
          }
          return (
            <>
              <tr>
                <td rowSpan="3">{element.tanggal}</td>
                <td>Nota</td>
                <td>{parseFloat(BG_NOTA).toFixed(3)}</td>
                <td>{parseFloat(R_NOTA).toFixed(3)}</td>
                <td>{parseFloat(P_NOTA).toFixed(3)}</td>
                <td>{parseFloat(E_NOTA).toFixed(3)}</td>
                <td>{parseFloat(lain_lain_nota).toFixed(3)}</td>
                <td>{parseFloat(BG_NOTA).toFixed(3)}</td>
                <td>{parseFloat(R_NOTA).toFixed(3)}</td>
                <td>{parseFloat(P_NOTA).toFixed(3)}</td>
                <td>{parseFloat(E_NOTA).toFixed(3)}</td>
                <td>{parseFloat(lain_lain_nota).toFixed(3)}</td>
              </tr>
              <tr>
                <td rowSpan="2">Berat</td>
                <td>{BG.toFixed(3)}</td>
                <td>{R.toFixed(3)}</td>
                <td>{P.toFixed(3)}</td>
                <td>{E.toFixed(3)}</td>
                <td>{lain_lain.toFixed(3)}</td>
                <td>{BG.toFixed(3)}</td>
                <td>{R.toFixed(3)}</td>
                <td>{P.toFixed(3)}</td>
                <td>{E.toFixed(3)}</td>
                <td>{lain_lain.toFixed(3)}</td>
              </tr>
              <tr>
                <td>{BG.toFixed(3)}</td>
                <td>{R.toFixed(3)}</td>
                <td>{P.toFixed(3)}</td>
                <td>{E.toFixed(3)}</td>
                <td>{lain_lain.toFixed(3)}</td>
                <td>{BG.toFixed(3)}</td>
                <td>{R.toFixed(3)}</td>
                <td>{P.toFixed(3)}</td>
                <td>{E.toFixed(3)}</td>
                <td>{lain_lain.toFixed(3)}</td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableLaporanKirimDesian;
