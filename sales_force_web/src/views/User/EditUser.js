import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import { inject } from "mobx-react";
import _ from "lodash";
import BackButton from "../../components/Buttons/BackButton";
import UserForm from "./UserForm";

@inject("userStore")
class EditUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userData } = this.props.userStore;
    let data = _.filter(userData, d => {
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
            <h4>Edit User</h4>
          </CardHeader>
          <CardBody>
            <UserForm data={data[0]}/>
          </CardBody>
          <CardFooter>
            <BackButton pathname={location} />
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default EditUser;
