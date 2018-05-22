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
import { Link } from "react-router-dom";
import BackButton from "../../components/Buttons/BackButton";

import { connect } from "react-redux";
import { deleteJob } from "../../Redux/Actions/JobAction";

class DeleteCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id) {
    event.preventDefault();
    this.props.dispatch(deleteJob(id));
  }

  render() {
    const { customerModel } = this.props;

    console.log(customerModel);

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
                <Col md="6" align="right">
                  <Label htmlFor="text-input">FistName</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label htmlFor="text-input">{customerModel.firstname}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="text-input">LastName</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label htmlFor="text-input">{customerModel.lastname}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="text-input">Tel.</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label htmlFor="text-input">
                    {customerModel.phoneNumber}
                  </Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="text-input">Address</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label htmlFor="text-input">{customerModel.address}</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="select">Province</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label htmlFor="text-input">Province</Label>
                </Col>
              </FormGroup>{" "}
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="select">District</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label htmlFor="text-input">District</Label>
                </Col>
              </FormGroup>{" "}
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="select">SubDistrict</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label htmlFor="text-input">SubDistrict</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="text-input">Zipcode</Label>
                </Col>
                <Col xs="12" md="3">
                  <Label htmlFor="text-input">{customerModel.zipcode}</Label>
                </Col>
              </FormGroup>
              <FormGroup row align="center">
                <Col>
                  <Link to={location}>
                    {" "}
                    <Button
                      onClick={() => this.handleSubmit(customerModel.id)}
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
    customerModel: state.customerReducer
  };
};

export default connect(mapStateToProps)(DeleteJob);
