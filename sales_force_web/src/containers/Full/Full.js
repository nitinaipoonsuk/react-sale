import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

//views
import Dashboard from '../../views/Dashboard/';
import { CustomerTable } from '../../views/Customers/Customer/CustomerTable';
import { Create } from '../../views/Customers/Create/Create';
import { CreateDriver } from '../../views/Drivers/Create/CreateDriver';
import Driver  from '../../views/Drivers/Driver/Driver';


class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard} />
                <Route path="/customer/create" name="Create" component={Create} />   
                <Route path="/customer" name="Customer" component={CustomerTable} /> 
                <Route path="/driver/createdriver" name="CreateDriver" component={CreateDriver}/>                            
                <Route path="/driver" name="Driver" component={Driver} />
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
