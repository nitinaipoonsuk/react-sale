import { computed, observable, action, autorun, useStrict } from "mobx"
import { observer } from "mobx-react"
import FetchAPI from "../../../Helper/FetchAPI";

useStrict(true);

class CustomerStore {
    constructor(){
        this.fetchAPI = new FetchAPI();
    }
}

export const CustomerStore
