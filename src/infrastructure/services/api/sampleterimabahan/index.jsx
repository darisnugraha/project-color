import get from "../../../axios/get";
import word from "../../../shared/static";

const SampleTerimaBahan = {
  getAllSampleTerimaBahan: async ({ params }) => {
    const response = await get({
      url:
        word.URL_GET_ALL_SAMPLE_TERIMA_BAHAN +
        "startDate=" +
        params.tgl_dari +
        "&endDate=" +
        params.tgl_sampai +
        "&bahan=" +
        params.bahan,
    });
    return response;
  },
};

export default SampleTerimaBahan;
