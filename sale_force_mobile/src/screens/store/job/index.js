import { observable, action } from "mobx";
import Mockup from "./mockup"

class JobStore {
    datas = []

    @action
    getDatas() {
        this.datas = Mockup
    }
}

export default new JobStore()