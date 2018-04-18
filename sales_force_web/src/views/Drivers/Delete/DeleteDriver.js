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
import BackButton from "../../../components/Buttons/BackButton";
import { inject } from "mobx-react";
import _ from "lodash";

@inject("driverStore")
export class DeleteDriver extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);    
    this.data;
  }

  handleSubmit(id) {
    event.preventDefault();
    this.props.driverStore.delete(id);
  }

  render() {
    const { driverData } = this.props.driverStore;
    let data = _.filter(driverData, c => {
      return c.id == this.props.location.data.id;
    });

    console.log(data[0])

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
                <Col md="5" align="right">
                  <Label htmlFor="text-input">Fistname</Label>
                </Col>
                <Col xs="12" md="5">
                  <p className="form-control-static">{data[0].firstname}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="text-input">Lastname</Label>
                </Col>
                <Col xs="12" md="5">
                  <p className="form-control-static">{data[0].lastname}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="text-input">Tel.</Label>
                </Col>
                <Col xs="12" md="5">
                  <p className="form-control-static">{data[0].tel}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="text-input">Address</Label>
                </Col>
                <Col xs="12" md="5">
                  <p className="form-control-static">{data[0].address}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="select">Vehicle driver type</Label>
                </Col>
                <Col xs="12" md="5">
                  <p className="form-control-static">{data[0].vehicleDriverTypeName}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="text-input">No</Label>
                </Col>
                <Col xs="12" md="5">
                  <p className="form-control-static">{data[0].no}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="text-input">Expired date</Label>
                </Col>
                <Col xs="12" md="5">
                  <p className="form-control-static">{data[0].expireddate}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="select">Subscribe</Label>
                </Col>
                <Col xs="12" md="5">
                  <p className="form-control-static">{data[0].subscribe}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="text-input">Note</Label>
                </Col>
                <Col xs="12" md="5">
                  <p className="form-control-static">{data[0].remark}</p>
                </Col>
              </FormGroup>
              <FormGroup row align="center">
                <Col >
                  <Button onClick={() => this.handleSubmit(data[0].id)} color="danger">
                    Delete
                  </Button>
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

export default DeleteDriver;
