import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import BackButton from "../../components/Buttons/BackButton";
import UserForm from "./UserForm";
//import { UserFrom } from "../UserFrom";

class CreateUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const location = {
      pathname: "/user",
      state: { fromDashboard: true }
    };

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <h4>Create User</h4>
          </CardHeader>
          <CardBody>
            <UserForm />
          </CardBody>
          <CardFooter>
            <BackButton pathname={location} />
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default CreateUser;
