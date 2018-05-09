import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import { connect } from "react-redux";
import _ from "lodash";

import BackButton from "../../components/Buttons/BackButton";
import UserForm from "./UserForm";
import { selectData } from "../../Redux/Actions/UserAction";

class EditUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    const { userModel } = this.props;    
    
    let data = _.filter(userModel, u => {
      return u.id == this.props.location.data.id;
    });
    console.log("data form _lodash: ", data[0]);

    this.props.dispatch(selectData(data[0]));
    
    const location = {
      pathname: "/user",
      state: { fromDashboard: true }
    };

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <h4>Edit User</h4>
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

const mapStateToProps = state => {
  return {
    userModel: state.userReducer
  };
};

export default connect(mapStateToProps)(EditUser);
