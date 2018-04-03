import FetchAPI from "../Helper/FetchAPI";
import CustomerStore from "./Customer.Store";
import DriverStore from "./Driver.Store";

export default {
  customerStore: new CustomerStore(FetchAPI),
  driverStore: new DriverStore(FetchAPI)
};
