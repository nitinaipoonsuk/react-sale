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

    this.state = {
      firstname: "",
      lastname: "",
      phoneNumber: "",
      address: "",
      zipcode: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
    this.handleChangeLastname = this.handleChangeLastname.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeZipcode = this.handleChangeZipcode.bind(this);
  }

  componentWillMount() {
    if (this.props.data) this.state = this.props.data;
  }

  handleChangeFirstname(e) {
    this.setState({ firstname: e.target.value });
  }
  handleChangeLastname(e) {
    this.setState({ lastname: e.target.value });
  }
  handleChangePhone(e) {
    this.setState({ phoneNumber: e.target.value });
  }
  handleChangeAddress(e) {
    this.setState({ address: e.target.value });
  }
  handleChangeZipcode(e) {
    this.setState({ zipcode: e.target.value });
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
              id="firstname"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChangeFirstname}
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
              value={this.state.lastname}
              onChange={this.handleChangeLastname}
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
              value={this.state.phoneNumber}
              onChange={this.handleChangePhone}
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
              onChange={this.handleChangeAddress}
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
              value={this.state.zipcode}
              onChange={this.handleChangeZipcode}
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
