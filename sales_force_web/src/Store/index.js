import CustomerStore from "./Customer.Store";
import FetchAPI from "../Helper/FetchAPI";


export default {
    customerStore: new CustomerStore(FetchAPI)
};