const driverModel= {
    id:0,
    firstname:"",
    lastname:"",
    address:"",
    tel:"",
    vehicleDriverTypeName:"",
    no:"",
    expiredDate:"",
    subscribeName:"",
    remark:""
}


export const DriverReducer = (state = driverModel, action) => {
    switch (action.type) {
      case "LOAD_DRIVER":
        return action.payload;
      case "SELECT_DRIVER":     
        return action.payload;
      case "CREATE_DRIVER":
        return action.payload;
      case "EDIT_DRIVER":
        return action.payload;
      case "DELETE_DRIVER":
        return action.payload;
      default:
        return state;
    }
  };