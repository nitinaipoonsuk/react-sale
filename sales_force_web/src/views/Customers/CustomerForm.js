import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Input, Label } from "reactstrap";

import { connect } from "react-redux";
import { createCustomer, editCustomer } from "../../Redux/Actions/CustomerAction";

export class CustomerForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleMappingModel = this.handleMappingModel.bind(this);

    this.state = {
      id: 0,
      firstname: "",
      lastname: "",
      phoneNumber: "",
      address: "",
      zipcode: ""
    };
  }

  componentWillMount() {
    console.log(this.props);
    this.handleMappingModel();
  }

  handleMappingModel() {
    if (this.props.customerModel) {
      this.setState(() => {
        return {
          id: this.props.customerModel.id,
          firstname: this.props.customerModel.firstname,
          lastname: this.props.customerModel.lastname,
          phoneNumber: this.props.customerModel.phoneNumber,
          address: this.props.customerModel.address,
          zipcode: this.props.customerModel.zipcode
        };
      });
    }
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  handleCancel() {
    console.log("handleCancel");
    console.log(this.props.customerModel);
    
    

    if (this.props.customerModel.id > 0) {
      this.handleMappingModel();
    } else {
      console.log("else");
      this.setState(() => {
        return {
          firstname: "",
          lastname: "",
          phoneNumber: "",
          address: "",
          zipcode: ""
        };
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    if (this.state.id) this.props.dispatch(editCustomer(this.state));
    else this.props.dispatch(createCustomer(this.state));

    /*if (this.state.id) this.props.customerStore.edit(this.state);
    else this.props.customerStore.create(this.state);*/
  }

  render() {
    console.log("render");
    console.log(this.state);

    const customerModel = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
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
              invalid={!customerModel.firstname ? true : false}
              valid
              required
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
              invalid={!customerModel.lastname ? true : false}
              valid
              required
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
              invalid={!customerModel.address ? true : false}
              valid
              required
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
    customerModel: state.customerReducer,
  };
};

export default connect(mapStateToProps)(CustomerForm);
