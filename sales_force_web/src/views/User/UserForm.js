import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  FormText,
  abel,
  Input,
  Label
} from "reactstrap";
import { observer, inject } from "mobx-react";
import { observable, action } from "mobx";

@inject("userStore")
@observer
class UserFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      address: ""
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handelChangeAddress = this.handelChangeAddress.bind(this);
  }

  componentWillMount() {
    if (this.props.data) this.state = this.props.data;
  }

  handleChangeUsername(e) {
    console.log(e.target.value);
    this.setState({
      username: e.target.value
    });
  }

  handleChangeEmail(e) {
    console.log(e.target.value);
    this.setState({
      email: e.target.value
    });
  }

  handelChangeAddress(e) {
    console.log(e.target.value);
    this.setState({ address: e.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state);

    if (this.data.id) this.props.UserStore.edit(this.data);
    else this.props.UserStore.create(this.data);
  };

  render() {
    return (
      <Form>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Username</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChangeUsername}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Email</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Address</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              id="address"
              name="address"
              value={this.state.address}
              onChange={this.handelChangeAddress}
            />
          </Col>
        </FormGroup>
        <FormGroup row align="center">
          <Col>
            <Button onClick={this.handleSubmit} color="success">
              Save
            </Button>{" "}
            <Button color="secondary">Cancel</Button>{" "}
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default UserFrom;
