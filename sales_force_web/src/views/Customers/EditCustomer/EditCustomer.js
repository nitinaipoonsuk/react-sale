import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import { inject } from "mobx-react";
import _  from "lodash";

import BackButton from "../../Buttons/BackButton/BackButton";
import { From } from "../Form/Form";

@inject("customerStore")
export class EditCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //console.log(this.props);
    const { customerData } = this.props.customerStore;
    let data = _.filter(customerData, c => {
      return c.id == this.props.location.data.id;
    });

    console.log("data form _lodash: ", data[0]);

    const location = {
      pathname: "/customer",
      state: { fromDashboard: true }
    };

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <h4>Edit Customer</h4>
          </CardHeader>
          <CardBody>
            <From data={data[0]}/>
          </CardBody>
          <CardFooter>
            <BackButton pathname={location} />
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default EditCustomer;
