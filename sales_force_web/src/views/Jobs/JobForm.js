import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Input, Label } from "reactstrap";

import { connect } from "react-redux";
import { editJob, createJob } from "../../Redux/Actions/JobAction";

class JobForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMappingModel = this.handleMappingModel.bind(this);

    this.state = {
      id: 0,
      jobCode: "",
      jobName: "",
      license: "",
      sourceStationName: "",
      destStationName: "",
      sourceDate: Date,
      destDate: Date,
      sourceConfirmDate: Date,
      destConfirmDate: Date,
      isDelete: false,
      customerName: "",
      driverId: 0,
      driverName: ""
    };
  }

  componentWillMount() {
    console.log(this.props);
    this.handleMappingModel();
  }

  handleMappingModel() {
    if (this.props.jobModel) {
      this.setState(() => {
        return {
          id: this.props.jobModel.id,
          jobCode: this.props.jobModel.jobCode,
          jobName: this.props.jobModel.jobName,
          license: this.props.jobModel.license,
          sourceStationName: this.props.jobModel.sourceStationName,
          destStationName: this.props.jobModel.destStationName,
          sourceDate: this.props.jobModel.sourceDate,
          destDate: this.props.jobModel.destDate,
          sourceConfirmDate: (!this.props.jobModel.sourceConfirmDate ? "" : this.props.jobModel.sourceConfirmDate),
          destConfirmDate: this.props.jobModel.destConfirmDate,
          isDelete: this.props.jobModel.isDelete,
          customerName: this.props.jobModel.customerName,
          driverName: this.props.jobModel.driverName
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
    console.log(this.props.jobModel);

    if (this.props.jobModel.id > 0) {
      this.handleMappingModel();
    } else {
      console.log("else");

      this.setState(() => {
        return {
          jobCode: "",
          jobName: "",
          license: "",
          sourceStationName: "",
          destStationName: "",
          sourceDate: "",
          destDate: "",
          sourceConfirmDate: "",
          destConfirmDate: "",
          isDelete: false,
          customerName: "",
          driverId: 0,
          driverName: ""
        };
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submit");

    if (this.state.id) this.props.dispatch(editJob(this.state));
    else this.props.dispatch(createJob(this.state));
  }

  render() {
    console.log("render");
    console.log(this.state);

    const jobModel = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">JobCode</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              name="jobcode"
              value={jobModel.jobCode}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">JobName</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              name="jobName"
              value={jobModel.jobName}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">License</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              name="license"
              value={jobModel.license}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Source Station</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              name="sourceStationName"
              value={jobModel.sourceStationName}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Dest Station</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              name="destStationName"
              value={jobModel.destStationName}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">SourceDate</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              name="sourceDate"
              value={jobModel.sourceDate}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">DestDate</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              name="destDate"
              value={jobModel.destDate}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">SourceConfirmDate</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              name="sourceConfirmDate"
              value={jobModel.sourceConfirmDate}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">DestConfirmDate</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              name="destConfirmDate"
              value={jobModel.destConfirmDate}
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Customer</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              name="customerName"
              value={jobModel.customerName}
              onChange={this.handleChange}
            />       
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md="5" align="right">
            <Label htmlFor="text-input">Driver</Label>
          </Col>
          <Col xs="12" md="3">
            <Input
              type="text"
              name="driverName"
              value={jobModel.driverName}
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
    jobModel: state.jobReducer
  };
};

export default connect(mapStateToProps)(JobForm);
