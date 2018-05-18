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
import * as moment from 'moment/moment'
import { connect } from "react-redux";
import { editDriver, createDriver } from "../../Redux/Actions/DriverAction";

class DriveFrom extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMappingModel = this.handleMappingModel.bind(this);
    this.formatDateTime = this.formatDateTime.bind(this);

    this.state = {
      id: 0,
      firstname: "",
      lastname: "",
      address: "",
      tel: "",
      vehicleDriverTypeName: "",
      no: "",
      expiredDate: "",
      subscribeName: "",
      remark: ""
    };
  }

  componentWillMount() {
    console.log(this.props);
    this.handleMappingModel();
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  handleMappingModel() {
    if (this.props.driverModel) {

      this.formatDateTime(this.props.driverModel.expiredDate);

      this.setState(() => {
        return {
          id: this.props.driverModel.id,
          firstname: this.props.driverModel.firstname,
          lastname: this.props.driverModel.lastname,
          address: this.props.driverModel.address,
          tel: this.props.driverModel.tel,
          vehicleDriverTypeName: this.props.driverModel.vehicleDriverTypeName,
          no: this.props.driverModel.no,
          expiredDate: this.formatDateTime() ,
          subscribeName: this.props.driverModel.subscribeName,
          remark: this.props.driverModel.remark
        };
      });
    }
  }

  formatDateTime(datetime){
    return moment.utc(datetime).format('DD/MM/YYYY HH:mm')
  }

  handleCancel() {
    console.log("handleCancel");
    console.log(this.props.driverModel);   

    if (this.props.driverModel.id > 0) {
      this.handleMappingModel();
    } else {
      console.log("else");
      this.setState(() => {
        return {
          firstname: "",
          lastname: "",
          address: "",
          tel: "",
          vehicleDriverTypeName: "",
          no: "",
          expiredDate: "",
          subscribeName: "",
          remark: ""
        };
      });
    }
  }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log("Submit");

    if (this.state.id) this.props.dispatch(editDriver(this.state));
    else this.props.dispatch(createDriver(this.state));
  }

  render() {
    console.log("render");

    console.log(this.state);

    const driverModel = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
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
              invalid={!driverModel.firstname ? true : false}
              valid
              required
            />
            <FormFeedback>Please enter your firstname</FormFeedback>
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
              invalid={!driverModel.lastname ? true : false}
              valid
              required
            />
            <FormFeedback>Please enter your lastname</FormFeedback>
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
              type="date" name="expiredDate"
              value={this.state.expiredDate}
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
    driverModel: state.driverReducer
  };
};

export default connect(mapStateToProps)(DriveFrom);
