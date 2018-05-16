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

export const selectCustomer = data => {
  return dispatch => {
    console.log("dispatch: ", data);
    if (data) {
      dispatch({
        type: "SELECT_DATA",
        payload: data
      });
    }
  };
};

export const createCustomer = data => {
  return dispatch => {
    console.log("createCustomer: ", data);
    if (data) {
      fetchAPI.post(`/customer/create/`, data).then(res => {
        if (!res) {
          console.log(res);
        } else {
          console.log(res);
          dispatch({
            type: "CREATE_CUSTOMER",
            payload: res
          });
        }
      });
    } else {
      console.log("data: null");
    }
  };
};

export const editCustomer = data => {
  return dispatch => {
    console.log("editCustomer: ", data);
    if (data) {
      fetchAPI.put(`/customer/edit/`, data).then(res => {
        if (!res) {
          console.log(res);
        } else {
          console.log(res);
          dispatch({
            type: "EDIT_CUSTOMER",
            payload: res
          });
        }
      });
    } else {
      console.log("data: null");
    }
  };
};


export const deleteCustomer = id => {
  return dispatch => {
    console.log("deleteCustomer: ", id);
    if (id) {
      fetchAPI.delete(`/customer/delete/${id}`).then(res => {
        if (!res) {
          console.log(res);
        } else {
          console.log(res);
          dispatch({
            type: "DELETE_CUSTOMER",
            payload: res.data
          });
        }
      });
    } else {
      console.log("data: null");
    }
  };
};