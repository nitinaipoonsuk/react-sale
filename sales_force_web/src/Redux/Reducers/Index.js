import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";
import { CustomerReducer } from "./CustomerReducer";
 
export default combineReducers({
    userReducer: UserReducer,
    customerReducer: CustomerReducer,  
});