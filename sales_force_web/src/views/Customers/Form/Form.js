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

@inject("customerStore")
@observer
export class From extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  data = {
    firstname: "",
    lastname: "",
    phoneNumber: "",
    address: "",
    zipcode: ""
  };

  componentWillMount() {
    if (this.props.data) this.data = this.props.data;
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.data);

    if (this.data.id) this.props.customerStore.edit(this.data);
    else this.props.customerStore.create(this.data);
  }

  render() {
    return (
      <Form>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">FistName</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              id="firstname"
              name="firstname"
              value={this.data.firstname}
              onChange={event => (this.data.firstname = event.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">LastName</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              id="lastname"
              name="lastname"
              value={this.data.lastname}
              onChange={event => (this.data.lastname = event.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Tel.</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={this.data.phoneNumber}
              onChange={event => (this.data.phoneNumber = event.target.value)}
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
              value={this.data.address}
              onChange={event => (this.data.address = event.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="select">Province</Label>
          </Col>
          <Col xs="12" md="3">
            <Input type="select" name="select" id="provice">
              <option value="0">Please select</option>
              <option value="1">Option #1</option>
              <option value="2">Option #2</option>
              <option value="3">Option #3</option>
            </Input>
          </Col>
        </FormGroup>{" "}
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="select">District</Label>
          </Col>
          <Col xs="12" md="3">
            <Input type="select" name="select" id="district">
              <option value="0">Please select</option>
              <option value="1">Option #1</option>
              <option value="2">Option #2</option>
              <option value="3">Option #3</option>
            </Input>
          </Col>
        </FormGroup>{" "}
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="select">SubDistrict</Label>
          </Col>
          <Col xs="12" md="3">
            <Input type="select" name="select" id="subdistrict">
              <option value="0">Please select</option>
              <option value="1">Option #1</option>
              <option value="2">Option #2</option>
              <option value="3">Option #3</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Zipcode</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              id="zipcode"
              name="zipcode"
              value={this.data.zipcode}
              onChange={event => (this.data.zipcode = event.target.value)}
            />
          </Col>
        </FormGroup>
        <FormGroup row align="center">
          <Col>
            <Button onClick={this.handleSubmit} color="success">
              Save
            </Button>{" "}
            <Button type="button" color="secondary">
              Cancel
            </Button>{" "}
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default From;
