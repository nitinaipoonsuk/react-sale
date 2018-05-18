import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Form,
  FormGroup,
  FormText,
  abel,
  Input,
  Label
} from "reactstrap";
import { Link } from "react-router-dom";
import * as moment from 'moment/moment'

import BackButton from "../../components/Buttons/BackButton";
import { connect } from "react-redux";
import { deleteDriver } from "../../Redux/Actions/DriverAction";

class DeleteDriver extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formatDateTime = this.formatDateTime.bind(this);
  }

  handleSubmit(id) {
    event.preventDefault();
    this.props.dispatch(deleteDriver(id));
  }

  formatDateTime(datetime) {
    return moment.utc(datetime).format("DD/MM/YYYY HH:mm");
  }

  render() {
    const { driverModel } = this.props;

    const location = {
      pathname: "/driver",
      state: { fromDashboard: true }
    };

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <h4>Delete Driver</h4>
          </CardHeader>
          <CardBody>
            <Form>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="text-input">Fistname</Label>
                </Col>
                <Col xs="12" md="3">
                  <p className="form-control-static">{driverModel.firstname}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="text-input">Lastname</Label>
                </Col>
                <Col xs="12" md="3">
                  <p className="form-control-static">{driverModel.lastname}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="text-input">Tel.</Label>
                </Col>
                <Col xs="12" md="3">
                  <p className="form-control-static">{driverModel.tel}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="text-input">Address</Label>
                </Col>
                <Col xs="12" md="3">
                  <p className="form-control-static">{driverModel.address}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="select">Vehicle driver type</Label>
                </Col>
                <Col xs="12" md="3">
                  <p className="form-control-static">
                    {driverModel.vehicleDriverTypeName}
                  </p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="text-input">No</Label>
                </Col>
                <Col xs="12" md="3">
                  <p className="form-control-static">{driverModel.no}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="text-input">Expired date</Label>
                </Col>
                <Col xs="12" md="3">
                  <p className="form-control-static">
                    {this.formatDateTime(driverModel.expiredDate)}
                  </p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="select">Subscribe</Label>
                </Col>
                <Col xs="12" md="3">
                  <p className="form-control-static">
                    {driverModel.subscribeName}
                  </p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="text-input">Note</Label>
                </Col>
                <Col xs="12" md="3">
                  <p className="form-control-static">{driverModel.remark}</p>
                </Col>
              </FormGroup>
              <FormGroup row align="center">
                <Col>
                  <Link to={location}>
                    {" "}
                    <Button
                      onClick={() => this.handleSubmit(driverModel.id)}
                      color="danger"
                    >
                      Delete
                    </Button>
                  </Link>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
          <CardFooter>
            <BackButton pathname={location} />
          </CardFooter>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    driverModel: state.driverReducer
  };
};

export default connect(mapStateToProps)(DeleteDriver);
