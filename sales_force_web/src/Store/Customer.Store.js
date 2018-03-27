import { observable, action, useStrict } from "mobx";

import { observer } from "mobx-react";

class CustomerStore {
  constructor(api) {
    this._api = api;
  }

  @observable loading = true;
  @observable customerData = [];

  getCustomer() {
    this._api.get(`/customer/`).then(Response => {
      this.setCustomer(Response);
    });
  }

  @action
  setCustomer(data) {
    this.customerData = data;
    this.loading = false;
    console.log(this.customerData);
  }

  @action
  create(data) {
    console.log(data);
    this._api
      .post(`/customer/create/`, {
        firstname: data.firstname,
        lastname: data.lastname,
        phoneNumber: data.phoneNumber,
        zipcode: data.zipcode,
        address: data.address
      })
      .then(Response => {
        this.customerData = Response.data.data;
        console.log(this.customerData.slice());
      });
  }

  @action
  edit(data) {
    this._api
      .put(`/customer/edit/`, {
        id: data.id,
        firstname: data.firstname,
        lastname: data.lastname,
        phoneNumber: data.phoneNumber,
        zipcode: data.zipcode,
        address: data.address
      })
      .then(Response => {
        this.customerData = Response.data.data;
        console.log(this.customerData.slice());
      });
  }

  @action
  delete(id) {
    console.log(id);
    this._api.delete(`/customer/delete/${id}`).then(Response => {
      
      console.log(Response);
    });
  }
}

export default CustomerStore;
