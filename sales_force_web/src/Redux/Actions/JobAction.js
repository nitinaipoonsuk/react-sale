import fetchAPI from "../../Helper/FetchAPI";

export const loadJob = () => {
    return dispatch => {
      fetchAPI.get(`/job/bydriver`).then(res => {
        if (!res) {
          console.log(res);
        } else {
          console.log(res);
          dispatch({
            type: "LOAD_JOB",
            payload: res
          });
        }
      });
    };
  };
  
  export const selectJob = data => {
    return dispatch => {
      console.log("dispatch: ", data);
      if (data) {
        dispatch({
          type: "SELECT_JOB",
          payload: data
        });
      }
    };
  };
  
  export const createJob = data => {
    return dispatch => {
      console.log("createjob: ", data);
      if (data) {
        fetchAPI.post(`/job/create/`, data).then(res => {
          if (!res) {
            console.log(res);
          } else {
            console.log(res);
            dispatch({
              type: "CREATE_JOB",
              payload: res
            });
          }
        });
      } else {
        console.log("data: null");
      }
    };
  };
  
  export const editJob = data => {
    return dispatch => {
      console.log("editjob: ", data);
      if (data) {
        fetchAPI.put(`/job/edit/`, data).then(res => {
          if (!res) {
            console.log(res);
          } else {
            console.log(res);
            dispatch({
              type: "EDIT_JOB",
              payload: res
            });
          }
        });
      } else {
        console.log("data: null");
      }
    };
  };
  
  
  export const deleteJob = id => {
    return dispatch => {
      console.log("deletejob: ", id);
      if (id) {
        fetchAPI.delete(`/job/delete/${id}`).then(res => {
          if (!res) {
            console.log(res);
          } else {
            console.log(res);
            dispatch({
              type: "DELETE_JOB",
              payload: res.data
            });
          }
        });
      } else {
        console.log("data: null");
      }
    };
  };