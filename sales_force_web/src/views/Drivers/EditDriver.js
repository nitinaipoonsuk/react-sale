import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";

import BackButton from "../../components/Buttons/BackButton";
import DriveFrom from "./DriveFrom";

class EditDriver extends Component {
  constructor(props) {
    super(props);
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
            <h4>Edit Driver</h4>
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

export default EditDriver;
