import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";
import { CustomerReducer } from "./CustomerReducer";
import { DriverReducer } from "./DriverReducer";

 
export default combineReducers({
    userReducer: UserReducer,
    customerReducer: CustomerReducer,  
    driverReducer: DriverReducer
});