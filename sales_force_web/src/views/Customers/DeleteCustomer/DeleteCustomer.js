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
  Label,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "reactstrap";
import BackButton from "../../Buttons/BackButton/BackButton";
import { inject } from "mobx-react";
import _ from "lodash";

@inject("customerStore")
export class DeleteCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.customerData = this.props.customerStore;    
    this.data;
  }

  handleSubmit(id) {
    event.preventDefault();
    this.props.customerStore.delete(id);
  }

  /*componentWillMount() {
    //this.data = this.props.data;

    console.log(this.props.location.data);
    console.log(this.data);
  }*/

  render() {
    const { customerData } = this.props.customerStore;
    let data = _.filter(customerData, c => {
      return c.id == this.props.location.data.id;
    });

    console.log(data[0])

    const location = {
      pathname: "/customer",
      state: { fromDashboard: true }
    };

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <h4>Delete Customer</h4>
          </CardHeader>
          <CardBody>
            <Form>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="text-input">FistName</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label htmlFor="text-input">{data[0].firstname}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="text-input">LastName</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label htmlFor="text-input">{data[0].lastname}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="text-input">Tel.</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label htmlFor="text-input">{data[0].phoneNumber}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="text-input">Address</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label htmlFor="text-input">{data[0].address}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="select">Province</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label htmlFor="text-input">Province</Label>
                </Col>
              </FormGroup>{" "}
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="select">District</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label htmlFor="text-input">District</Label>
                </Col>
              </FormGroup>{" "}
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="select">SubDistrict</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label htmlFor="text-input">SubDistrict</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="text-input">Zipcode</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label htmlFor="text-input">{data[0].zipcode}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col xs="12" md="6">
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

export default DeleteCustomer;
