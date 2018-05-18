import fetchAPI from "../../Helper/FetchAPI";

export const loadDriver = () => {
    return dispatch => {
      fetchAPI.get(`/driver/`).then(res => {
        if (!res) {
          console.log(res);
        } else {
          console.log(res);
          dispatch({
            type: "LOAD_DRIVER",
            payload: res
          });
        }
      });
    };
  };
  
  export const selectDriver = data => {
    return dispatch => {
      console.log("dispatch: ", data);
      if (data) {
        dispatch({
          type: "SELECT_DRIVER",
          payload: data
        });
      }
    };
  };
  
  export const createDriver = data => {
    return dispatch => {
      console.log("createdriver: ", data);
      if (data) {
        fetchAPI.post(`/driver/create/`, data).then(res => {
          if (!res) {
            console.log(res);
          } else {
            console.log(res);
            dispatch({
              type: "CREATE_DRIVER",
              payload: res
            });
          }
        });
      } else {
        console.log("data: null");
      }
    };
  };
  
  export const editDriver = data => {
    return dispatch => {
      console.log("editdriver: ", data);
      if (data) {
        fetchAPI.put(`/driver/edit/`, data).then(res => {
          if (!res) {
            console.log(res);
          } else {
            console.log(res);
            dispatch({
              type: "EDIT_DRIVER",
              payload: res
            });
          }
        });
      } else {
        console.log("data: null");
      }
    };
  };
  
  export const deleteDriver = id => {
    return dispatch => {
      console.log("deletedriver: ", id);
      if (id) {
        fetchAPI.delete(`/driver/delete/${id}`).then(res => {
          if (!res) {
            console.log(res);
          } else {
            console.log(res);
            dispatch({
              type: "DELETE_DRIVER",
              payload: res.data
            });
          }
        });
      } else {
        console.log("data: null");
      }
    };
  };
  