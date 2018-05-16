import fetchAPI from "../../Helper/FetchAPI";

export const loadUser = () => {
  return dispatch => {
    fetchAPI.get(`/user/`).then(res => {
      if (!res) {
        console.log(res);
      } else {
        console.log(res);
        dispatch({
          type: "LOAD_USER",
          payload: res
        });
      }
    });
  };
};

export const selectUser = data => {
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

export const createUser = data => {
  return dispatch => {
    console.log("createUser: ", data);
    if (data) {
      fetchAPI.post(`/user/create/`, data).then(res => {
        if (!res) {
          console.log(res);
        } else {
          console.log(res);
          dispatch({
            type: "CREATE_USER",
            payload: res
          });
        }
      });
    } else {
      console.log("data: null");
    }
  };
};

export const editUser = data => {
  return dispatch => {
    console.log("editUser: ", data);
    if (data) {
      fetchAPI.put(`/user/edit/`, data).then(res => {
        if (!res) {
          console.log(res);
        } else {
          console.log(res);
          dispatch({
            type: "EDIT_USER",
            payload: res
          });
        }
      });
    } else {
      console.log("data: null");
    }
  };
};

export const deleteUser = id => {
  return dispatch => {
    console.log("deleteUser: ", id);
    if (id) {
      fetchAPI.delete(`/user/delete/${id}`).then(res => {
        if (!res) {
          console.log(res);
        } else {
          console.log(res);
          dispatch({
            type: "DELETE_USER",
            payload: res.data
          });
        }
      });
    } else {
      console.log("data: null");
    }
  };
};
