import React, { Component } from "react";
import {
  Col,
  Button,
  FormGroup,
  Label,
  Form,
  Input,
  FormFeedback
} from "reactstrap";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { createUser, editUser } from "../../Redux/Actions/UserAction";
import { validtion } from "../../Redux/Actions/HelperAction";
import { flow } from "mobx";

export class UserFrom extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submit");
    console.log(event.target.checkValidity());

    if (this.state.id) this.props.dispatch(editUser(this.state));
    else this.props.dispatch(createUser(this.state));

    /*if (this.state.id) this.props.dispatch(editUser(this.state));
    else this.props.dispatch(createUser(this.state));*/
  }

  render() {
    console.log("render");

    console.log(this.state);

    const userModel = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Username</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              name="username"
              value={userModel.username}
              onChange={this.handleChange}
              invalid={!userModel.username ? true : false}
              valid
              required
            />
            <FormFeedback>Please enter your username</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Password</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="password"
              name="password"
              value={userModel.password}
              onChange={this.handleChange}
              invalid={!userModel.password ? true : false}
              valid
              required
            />
            <FormFeedback>Please enter your password</FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Confirm Password</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="password"
              name="confirmPassword"
              value={userModel.confirmPassword}
              onChange={this.handleChange}
              invalid={
                !userModel.password ||
                userModel.password !== userModel.confirmPassword
                  ? true
                  : false
              }
              valid
              required
            />
            <FormFeedback>Password doesn't match </FormFeedback>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Email</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              invalid={
                userModel.email &&
                userModel.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                  ? false
                  : true
              }
              type="email"
              name="email"
              value={userModel.email}
              onChange={this.handleChange}
              valid
              required
            />
            <FormFeedback>example@email.com</FormFeedback>
          </Col>
        </FormGroup>

        <FormGroup row align="center">
          <Col>
            <Button color="success">Save</Button>{" "}
            <Button onClick={this.handleCancel} color="secondary">
              Cancel
            </Button>{" "}
          </Col>
        </FormGroup>
      </Form>
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
