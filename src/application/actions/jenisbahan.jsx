export const GET_ALL_JENIS_BAHAN = "[jenisbahan] get all jenisbahan";
export const SET_DATA_JENIS_BAHAN_SUCCESS = "[jenisbahan] get all jenisbahan success";
export const SET_DATA_JENIS_BAHAN_FAILED = "[jenisbahan] get all jenisbahan failed";

export const getAllJenisBahan ={
	type : GET_ALL_JENIS_BAHAN,
}
export const setDataJenisBahanSuccess =(feedback) => ({
	type : SET_DATA_JENIS_BAHAN_SUCCESS,
	payload : { data : feedback }
})
export const setDataJenisBahanFailed =(error) => ({
	type : SET_DATA_JENIS_BAHAN_FAILED,
	payload : { data : error }
})