import {
  GET_ALL_DESIGN,
  setDataDesignSuccess,
  setDataDesignFailed,
} from "../actions/design";

const getDesign =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_DESIGN) {
      const response = await api.Design.getAllDesign();
      if (response?.value !== null) {
        dispatch(setDataDesignSuccess(response?.value));
      } else {
        dispatch(setDataDesignFailed(response?.error));
      }
    }
  };

const data = [getDesign];

export default data;
