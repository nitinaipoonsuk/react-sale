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

@inject("driverStore")
@observer
export class DriveFrom extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      address: "",
      tel: "",
      vehicledrivertype: "",
      no: "",
      expireddate: "",
      subscribe: "",
      remark: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  componentWillMount() {
    if (this.props.data) this.state = this.props.data;
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);

    if (this.state.id) this.props.driverStore.edit(this.state);
    else this.props.driverStore.create(this.state);
  }

  render() {
    return (
      <Form>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Fistname</Label>
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
            <Label htmlFor="text-input">Lastname</Label>
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
              name="tel"
              value={this.state.tel}
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
            <Label htmlFor="select">Vehicle driver type</Label>
          </Col>
          <Col xs="12" md="3">
            <Input type="select" name="select" id="select">
              <option value="0">Please select</option>
              <option value="1">Private car</option>
              <option value="2">Truck</option>
              <option value="3">Rickshaw</option>
              <option value="3">Dangerous goods transport car</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">No</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              name="no"
              value={this.state.no}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Expired date</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              name="expireddate"
              value={this.state.expireddate}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="select">Subscribe</Label>
          </Col>
          <Col xs="12" md="3">
            <Input type="select" name="select" id="select">
              <option value="0">Please select</option>
              <option value="1">1 Year</option>
              <option value="2">2 Year</option>
              <option value="3">Life time</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Note</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              name="remark"
              value={this.state.remark}
              onChange={this.handleChange}
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

export default DriveFrom;
