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
  }

  data = {
    username: "",
    email: "",
    address: ""
  };

  componentWillMount() {
    if (this.props.data) this.data = this.props.data;
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.data);

    if (this.data.id) this.props.UserStore.edit(this.data);
    else this.props.UserStore.create(this.data);
  }

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
              id="firstname"
              name="firstname"
              value={this.data.username}
              onChange={event => (this.data.username = event.target.value)}
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
              id="lastname"
              name="lastname"
              value={this.data.email}
              onChange={event => (this.data.email = event.target.value)}
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
              id="lastname"
              name="lastname"
              value={this.data.address}
              onChange={event => (this.data.address = event.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row align="center">
          <Col >
            <Button type="submit" color="success">
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
