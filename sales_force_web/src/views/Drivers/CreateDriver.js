import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import BackButton from "../../components/Buttons/BackButton";
import DriveFrom from "./DriveFrom";

export class CreateDriver extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const location = {
      pathname: "/driver",
      state: { fromDashboard: true }
    };

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <h4>Create Driver</h4>
          </CardHeader>
          <CardBody>
            <DriveFrom />
          </CardBody>
          <CardFooter>
            <BackButton pathname={location} />
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default CreateDriver;
