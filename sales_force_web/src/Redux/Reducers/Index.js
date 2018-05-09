import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";
import { CustomerReducer } from "./CustomerReducer";
import { ValidateReducer } from "./HelperReducer";
 
export default combineReducers({
    userReducer: UserReducer,
    customerReducer: CustomerReducer,
    valiDateReducer: ValidateReducer,
});