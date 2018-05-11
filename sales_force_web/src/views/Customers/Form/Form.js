import React, { Component } from "react";
import {  
  Col,
  Button,
  Form,
  FormGroup,   
  Input,
  Label
} from "reactstrap";

import { connect } from "react-redux";
import {  } from "../../../Redux/Actions/CustomerAction";

export class From extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      phoneNumber: "",
      address: "",
      zipcode: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    if (this.props.data) this.state = this.props.data;
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    if (this.state.id) this.props.customerStore.edit(this.state);
    else this.props.customerStore.create(this.state);
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
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
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
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
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
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
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
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
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
              name="zipcode"
              value={this.state.zipcode}
              onChange={this.handleChange}
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
