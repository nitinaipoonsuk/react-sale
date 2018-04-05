import FetchAPI from "../Helper/FetchAPI";
import CustomerStore from "./Customer.Store";
import DriverStore from "./Driver.Store";
import UserStore from "./User.Store";

export default {
  customerStore: new CustomerStore(FetchAPI),
  driverStore: new DriverStore(FetchAPI),
  userStore: new UserStore(FetchAPI)
};
