const getAllSaldoSubDivisi = (state) => state.saldosubdivisi.feedback;
const getErrorSaldoSubDivisi = (state) => state.saldosubdivisi.error;
const getIsEditSaldoSubDivisi = (state) => state.saldosubdivisi.isEdit;
const getType = (state) => state.saldosubdivisi.type;

const data = {
  getAllSaldoSubDivisi,
  getErrorSaldoSubDivisi,
  getIsEditSaldoSubDivisi,
  getType,
};

export default data;
