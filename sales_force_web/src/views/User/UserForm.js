import React, { Component } from "react";
import { Row, Col, Button, FormGroup, FormText, abel, Label } from "reactstrap";
import {
  AvForm,
  AvInput,
  AvGroup,
  AvFeedback,
  AvField 
} from "availity-reactstrap-validation";

import { connect } from "react-redux";
import { createUser, editUser } from "../../Redux/Actions/UserAction";
import { validtion } from "../../Redux/Actions/HelperAction";

class UserFrom extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMappingModel = this.handleMappingModel.bind(this);

    this.state = {
      id: 0,
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      address: ""
    };
  }

  componentWillMount() {
    console.log(this.props.userModel);
    this.handleMappingModel();
  }

  handleMappingModel() {
    if (this.props.userModel) {
      this.setState(() => {
        return {
          id: this.props.userModel.id,
          username: this.props.userModel.username,
          password: this.props.userModel.password,
          confirmPassword: this.props.userModel.confirmPassword,
          email: this.props.userModel.email,
          address: this.props.userModel.address
        };
      });
    }
  }

  handleChange(e) {
    console.log(e.target.name);
    console.log(e.target.value);

    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  }

  handleCancel() {
    console.log("handleCancel");
    console.log(this.props.userModel);

    if (this.props.userModel.id > 0) {
      this.handleMappingModel();
    } else {
      console.log("else");

      this.setState(() => {
        return {
          username: "",
          password: "",
          confirmPassword: "",
          email: "",
          address: ""
        };
      });
    }
  }

  handleSubmit(event, errors, values) {
    event.preventDefault();
    console.log("Submit");
    console.log(event);
    console.log(errors);
    console.log(values);

    if (errors.length > 0) {
      return;
    } else {
      if (this.state.id) this.props.dispatch(editUser(this.state));
      else this.props.dispatch(createUser(this.state));
    }

    /*if (this.state.id) this.props.dispatch(editUser(this.state));
    else this.props.dispatch(createUser(this.state));*/
  }

  render() {
    console.log("render");

    console.log(this.state);

    const userModel = this.state;

    return (
      <AvForm onInvalidSubmit={this.handleSubmit}>
        <AvGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Username</Label>
          </Col>
          <Col xs="12" md="3">
            <AvInput
              type="text"
              name="username"
              value={userModel.username}
              //onChange={this.handleChange}
              required
            />
            <AvFeedback>Please input Username</AvFeedback>
          </Col>
        </AvGroup>
        <AvGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Password</Label>
          </Col>
          <Col xs="12" md="3">
            <AvInput
              type="text"
              name="password"
              value={userModel.password}
              //onChange={this.handleChange}
              required
            />
            <AvFeedback>Please input Password</AvFeedback>
          </Col>
        </AvGroup>
        <AvGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Confirm Password</Label>
          </Col>
          <Col xs="12" md="3">
            <AvInput
              type="text"
              name="confirmPassword"
              value={userModel.confirmPassword}
              //onChange={this.handleChange}
              required
            />
            <AvFeedback>Please input Confirm Password</AvFeedback>
          </Col>
        </AvGroup>
        <AvGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Email</Label>
          </Col>
          <Col xs="12" md="3">
            <AvInput
              type="text"
              name="email"
              value={userModel.email}
              //onChange={this.handleChange}
              required
            />
          </Col>
        </AvGroup>
        <FormGroup row align="center">
          <Col>
            <Button color="success">Save</Button>{" "}
            <Button onClick={this.handleCancel} color="secondary">
              Cancel
            </Button>{" "}
          </Col>
        </FormGroup>
      </AvForm>
    );
  }
}

const mapStateToProps = state => {
  return {
    userModel: state.userReducer,
    validation: state.valiDateReducer
  };
};

export default connect(mapStateToProps)(UserFrom);
