export const GET_ALL_SAMPLE_TERIMA_BAHAN =
  "[sampleterimabahan] get all sample terima bahan";
export const SET_DATA_SAMPLE_TERIMA_BAHAN_SUCCESS =
  "[sampleterimabahan] get all sample terima bahan success";
export const SET_DATA_SAMPLE_TERIMA_BAHAN_FAILED =
  "[sampleterimabahan] get all sample terima bahan failed";

export const getAllSampleTerimaBahan = {
  type: GET_ALL_SAMPLE_TERIMA_BAHAN,
};
export const setDataSampleTerimaBahanSuccess = ({ feedback }) => ({
  type: SET_DATA_SAMPLE_TERIMA_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataSampleTerimaBahanFailed = ({ error }) => ({
  type: SET_DATA_SAMPLE_TERIMA_BAHAN_FAILED,
  payload: { data: error },
});
