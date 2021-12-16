export const GET_ALL_DESIGN = "[design] get all design";
export const SET_DATA_DESIGN_SUCCESS = "[design] get all design success";
export const SET_DATA_DESIGN_FAILED = "[design] get all design failed";

export const getAllDesign ={
	type : GET_ALL_DESIGN,
}
export const setDataDesignSuccess =(feedback) => ({
	type : SET_DATA_DESIGN_SUCCESS,
	payload : { data : feedback }
})
export const setDataDesignFailed =(error) => ({
	type : SET_DATA_DESIGN_FAILED,
	payload : { data : error }
})