import fetchAPI from "../../Helper/FetchAPI";

export const loadCustomer = () => {
  return dispatch => {
    fetchAPI.get(`/customer/`).then(res => {
      if (!res) {
        console.log(res);
      } else {
        console.log(res);
        dispatch({
          type: "LOAD_CUSTOMER",
          payload: res
        });
      }
    });
  };
};
