export const validtion = (validation) => {
    return dispatch => {
        dispatch({
            type: "ISVALID",
            payload: (validation.invalid == false ? true : false)
        })
    }
}