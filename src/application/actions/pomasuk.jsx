export const GET_ALL_PO_MASUK = "[pomasuk] get all po masuk";
export const SET_DATA_PO_MASUK_SUCCESS = "[pomasuk] get all po masuk success";
export const SET_DATA_PO_MASUK_FAILED = "[pomasuk] get all po masuk failed";
export const SET_TYPE = "[pomasuk] set type";

export const getAllPOMasuk = {
  type: GET_ALL_PO_MASUK,
};
export const setDataPOMasukSuccess = ({ feedback }) => ({
  type: SET_DATA_PO_MASUK_SUCCESS,
  payload: { data: feedback },
});
export const setDataPOMasukFailed = ({ error }) => ({
  type: SET_DATA_PO_MASUK_FAILED,
  payload: { data: error },
});

export const setType = ({ type }) => ({
  type: SET_TYPE,
  payload: { data: type },
});
