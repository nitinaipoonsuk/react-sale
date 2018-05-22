const jobModel = {
    id: 0,
    jobCode: "",
    jobName: "",
    license: "",
    sourceStationId: "",
    sourceStationName: "",    
    destStationName: "",
    sourceDate: Date,
    destDate: Date,
    sourceConfirmDate: Date,
    destConfirmDate: Date,
    isDelete: false,
    customerId: 0,
    customerName: "",
    driverId: 0,
    driverName: "",
   // binaryCode?: any;
};

export const JobReducer = (state = jobModel, action) => {
  switch (action.type) {
    case "LOAD_JOB":
      return action.payload;
    case "SELECT_JOB":
      return action.payload;
    case "CREATE_JOB":
      return action.payload;
    case "EDIT_JOB":
      return action.payload;
    case "DELETE_JOB":
      return action.payload;
    default:
      return state;
  }
};
