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
  }

  data = {
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

  componentWillMount() {
    if (this.props.data) this.data = this.props.data;
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.data);

    if (this.data.id) this.props.driverStore.edit(this.data);
    else this.props.driverStore.create(this.data);
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
              id="firstname"
              name="firstname"
              value={this.data.firstname}
              onChange={event => (this.data.firstname = event.target.value)}
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
              id="tel"
              name="tel"
              value={this.data.tel}
              onChange={event => (this.data.tel = event.target.value)}
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
              id="no"
              name="no"
              value={this.data.no}
              onChange={event => (this.data.no = event.target.value)}
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
              id="expiredDate"
              name="expiredDate"
              value={this.data.expiredDate}
              onChange={event => (this.data.expiredDate = event.target.value)}
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
              id="remark"
              name="remark"
              value={this.data.remark}
              onChange={event => (this.data.remark = event.target.value)}
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

export default DriveFrom;
