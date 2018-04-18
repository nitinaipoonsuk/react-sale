import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import { inject } from "mobx-react";
import _ from "lodash";

import BackButton from "../../../components/Buttons/BackButton";
import { DriveFrom } from "../DriveFrom";

@inject("driverStore")
export class EditDriver extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { driverData } = this.props.driverStore;
    let data = _.filter(driverData, d => {
      return d.id == this.props.location.data.id;
    });

    console.log("data form _lodash: ", data[0]);

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
            <DriveFrom data={data[0]} />
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
