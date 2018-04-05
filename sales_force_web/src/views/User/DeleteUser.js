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
import BackButton from "../../components/Buttons/BackButton";
import { inject } from "mobx-react";
import _ from "lodash";

@inject("userStore")
class DeleteUser extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id) {
    event.preventDefault();
    this.props.userStore.delete(id);
  }

  render() {
    const { userData } = this.props.userStore;
    let data = _.filter(userData, c => {
      return c.id == this.props.location.data.id;
    });

    console.log(data[0]);

    const location = {
      pathname: "/user",
      state: { fromDashboard: true }
    };

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <h4>Delete</h4>
          </CardHeader>
          <CardBody>
            <Form>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="text-input">Username</Label>
                </Col>
                <Col xs="12" md="3">
                  <p className="form-control-static">{data[0].username}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="text-input">Email</Label>
                </Col>
                <Col xs="12" md="3">
                  <p className="form-control-static">{data[0].email}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="5" align="right">
                  <Label htmlFor="text-input">Address</Label>
                </Col>
                <Col xs="12" md="3">
                  <p className="form-control-static">{data[0].address}</p>
                </Col>
              </FormGroup>
              <FormGroup row align="center">
                <Col>
                  <Button type="submit" color="success">
                    Save
                  </Button>{" "}
                  <Button color="secondary">Cancel</Button>{" "}
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

export default DeleteUser;
