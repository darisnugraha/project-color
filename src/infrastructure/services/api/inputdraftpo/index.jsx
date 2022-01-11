import get from "../../../axios/get";
import word from "../../../shared/static";

const InputDraftPO = {
  getAllInputDraftPO: async (params) => {
    const response = await get({
      url:
        word.URL_GET_ALL_INPUT_DRAFT_PO +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&customer=" +
        params.customer +
        "&no_po=" +
        params.no_po +
        "&validasi=" +
        params.validasi +
        "&type=" +
        params.type,
    });
    return response;
  },
};

export default InputDraftPO;
