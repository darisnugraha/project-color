export const GET_ALL_ANALYSIS_STOCK_BY_DIVISI =
  "[analysisstock] get all analysis stock by divisi";
export const SET_DATA_ANALYSIS_STOCK_BY_DIVISI_SUCCESS =
  "[analysisstock] get all analysis stock by divisi success";
export const SET_DATA_ANALYSIS_STOCK_BY_DIVISI_FAILED =
  "[analysisstock] get all analysis stock by divisi failed";
export const SET_DIVISI = "[analysisstock] set divisi";

export const getAllAnalysisStockByDivisi = {
  type: GET_ALL_ANALYSIS_STOCK_BY_DIVISI,
};
export const setDataAnalysisStockByDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_ANALYSIS_STOCK_BY_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataAnalysisStockByDivisiFailed = ({ error }) => ({
  type: SET_DATA_ANALYSIS_STOCK_BY_DIVISI_FAILED,
  payload: { data: error },
});

export const getDivisi = ({ divisi }) => ({
  type: SET_DIVISI,
  payload: { data: divisi },
});
