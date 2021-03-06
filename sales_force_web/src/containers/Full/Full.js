import React, { Component } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
//import { Provider } from 'mobx-react';
//import Store from '../../Store'
import { Provider } from "react-redux";
import store from "../../Redux/Store/store";

import Header from "../../components/Header/";
import Sidebar from "../../components/Sidebar/";
import Breadcrumb from "../../components/Breadcrumb/";
import Aside from "../../components/Aside/";
import Footer from "../../components/Footer/";

//views
import Dashboard from "../../views/Dashboard/";
import CustomerTable from "../../views/Customers/CustomerTable";
import Create from "../../views/Customers/Create";
import EditCustomer from "../../views/Customers/EditCustomer";
import DeleteCustomer from "../../views/Customers/DeleteCustomer";
import CreateDriver from "../../views/Drivers/CreateDriver";
import Driver from "../../views/Drivers/Driver";
import EditDriver from "../../views/Drivers/EditDriver";
import DeleteDriver from "../../views/Drivers/DeleteDriver";
import User from "../../views/User/User";
import CreateUser from "../../views/User/CreateUser";
import EditUser from "../../views/User/EditUser";
import DeleteUser from "../../views/User/DeleteUser";
import Job from "../../views/Jobs/Job";
import CreateJob from "../../views/Jobs/CreateJob";
import CreateEdit from "../../views/Jobs/EditJob";
import EditJob from "../../views/Jobs/EditJob";

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Breadcrumb />
            <Provider store={store}>
              <Container fluid>
                <Switch>
                  <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                  <Route path="/job/edit" name="Edit" component={EditJob} />
                  <Route path="/job/create" name="Create" component={CreateJob}/>
                  <Route path="/job" name="Job" component={Job} />
                  <Route path="/customer/delete" name="Delete" component={DeleteCustomer}/>
                  <Route path="/customer/edit" name="Edit" component={EditCustomer}/>
                  <Route path="/customer/create" name="Create" component={Create}/>
                  <Route path="/customer" name="Customer" component={CustomerTable}/>
                  <Route path="/driver/create" name="Edit" component={CreateDriver} />
                  <Route path="/driver/edit" name="Edit" component={EditDriver}/>
                  <Route path="/driver/delete" name="Delete" component={DeleteDriver} />
                  <Route path="/driver" name="Driver" component={Driver} />
                  <Route path="/user/delete" name="Delete" component={DeleteUser}/>
                  <Route path="/user/edit" name="Edit" component={EditUser} />
                  <Route path="/user/create" name="Create" component={CreateUser}/>
                  <Route path="/user" name="User" component={User} />               
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Container>
            </Provider>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
