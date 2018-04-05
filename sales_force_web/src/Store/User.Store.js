import { observable, action, useStrict } from "mobx";

import { observer } from "mobx-react";

class UserStore {
  constructor(api) {
    this._api = api;
  }

  @observable loading = true;
  @observable userData = [];

  getUser() {
    this._api.get(`/user/`).then(Response => {
      this.setUser(Response);
      //console.log(Response)
    });
  }

  @action
  setUser(datas) {
    this.userData = datas;
    this.loading = false;
    console.log(this.userData);
  }

  @action
  create(data) {
    console.log(data);
    this._api.post(`/user/create/`, data).then(Response => {
      this.userData = Response.data.data;
      console.log(this.userData.slice());
    });
  }

  @action
  edit(data) {
    this._api.put(`/user/edit/`, data).then(Response => {
      this.userData = Response.data.data;
      console.log(this.userData.slice());
    });
  }

  @action
  delete(id) {
    this._api.delete(`/user/delete/${id}`).then(Response => {
      //this.driverData = Response.data.data;
      console.log(Response);
    });
  }
}

export default UserStore;
