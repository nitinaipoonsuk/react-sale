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

    this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
    this.handleChangeLirstname = this.handleChangeLirstname.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeTel = this.handleChangeTel.bind(this);
    this.handleChangeVehicle = this.handleChangeVehicle.bind(this);
    this.handleChangeNo = this.handleChangeNo.bind(this);
    this.handleChangeExpireddate = this.handleChangeExpireddate.bind(this);
    this.handleChangeSubscribe = this.handleChangeSubscribe.bind(this);
    this.handleChangeRemark = this.handleChangeRemark.bind(this);
  }

  handleChangeFirstname(e) {
    this.setState({
      firstname: e.target.value
    });
  }

  handleChangeLirstname(e) {
    this.setState({
      lastname: e.target.value
    });
  }

  handleChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  handleChangeTel(e) {
    this.setState({
      tel: e.target.value
    });
  }

  handleChangeVehicle(e) {
    this.setState({
      vehicledrivertype: e.target.value
    });
  }

  handleChangeNo(e) {
    this.setState({
      no: e.target.value
    });
  }

  handleChangeExpireddate(e) {
    this.setState({
      expireddate: e.target.value
    });
  }

  handleChangeSubscribe(e) {
    this.setState({
      subscribe: e.target.value
    });
  }

  handleChangeRemark(e) {
    this.setState({
      remark: e.target.value
    });
  }

  componentWillMount() {
    if (this.props.data) this.state = this.props.data;
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
              value={this.state.firstname}
              onChange={this.handleChangeFirstname}
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
              value={this.state.lastname}
              onChange={this.handleChangeLirstname}
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
              value={this.state.tel}
              onChange={this.handleChangeTel}
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
              value={this.state.no}
              onChange={this.handleChangeNo}
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
              id="expireddate"
              name="expireddate"
              value={this.state.expireddate}
              onChange={this.handleChangeExpireddate}
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
              value={this.state.remark}
              onChange={this.handleChangeRemark}
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
