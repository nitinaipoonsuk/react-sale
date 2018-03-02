import { observable, action } from "mobx";
import Mockup from "./mockup"

class JobStore {
    @observable datas = []

    @action
    getDatas() {
        this.datas = Mockup
    }

    confirmGoods(result, id) {
        console.log('id:', id)
        console.log('encoded', result.encoded)
        console.log('pathName', result.pathName)
    }
}

export default new JobStore()