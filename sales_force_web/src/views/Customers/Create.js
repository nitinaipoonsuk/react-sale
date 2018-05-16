import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import BackButton from "../../components/Buttons/BackButton";
import CustomerForm from "./CustomerForm";

class Create extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const location = {
      pathname: "/customer",
      state: { fromDashboard: true }
    };

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <h4>Create Customer</h4>
          </CardHeader>
          <CardBody>
            <CustomerForm />
          </CardBody>
          <CardFooter>
            <BackButton pathname={location} />
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default Create;
