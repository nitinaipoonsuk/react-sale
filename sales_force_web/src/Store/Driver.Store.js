import { observable, action, useStrict } from "mobx";

import { observer } from "mobx-react";

class DriverStore {
  constructor(api) {
    this._api = api;
  }

  @observable loading = true;
  @observable driverData = [];

  getDriver() {
    this._api.get(`/driver/`).then(Response => {    
      if (!Response) {
        this.setDriver(this.driverData);
      } else {
        this.setDriver(Response);
      }
    });
  }

  @action
  setDriver(datas) {
    this.driverData = datas;
    this.loading = false;
    console.log(this.driverData);
  }

  @action
  create(data) {
    console.log(data);
    this._api.post(`/driver/create/`, data).then(Response => {
      this.driverData = Response.data.data;
      console.log(this.driverData.slice());
    });
  }

  @action
  edit(data) {
    this._api.put(`/driver/edit/`, data).then(Response => {
      this.driverData = Response.data.data;
      console.log(this.driverData.slice());
    });
  }

  @action
  delete(id) {
    this._api.delete(`/driver/delete/${id}`).then(Response => {
      //this.driverData = Response.data.data;
      console.log(Response);
    });
  }
}

export default DriverStore;
