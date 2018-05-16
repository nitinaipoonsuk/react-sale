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
import BackButton from "../../components/Buttons/BackButton";

import { connect } from "react-redux";
import { deleteUser } from "../../Redux/Actions/UserAction";

class DeleteUser extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id) {
    event.preventDefault();
    this.props.dispatch(deleteUser(id));
  }

  render() {
    const { userModel } = this.props;     

    const location = {
      pathname: "/user",
      state: { fromDashboard: true }
    };

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <h4>Delete User</h4>
          </CardHeader>
          <CardBody>
            <Form>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="text-input">Username</Label>
                </Col>
                <Col xs="12" md="3">
                  <p className="form-control-static">{userModel.username}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="text-input">Email</Label>
                </Col>
                <Col xs="12" md="3">
                  <p className="form-control-static">{userModel.email}</p>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="6" align="right">
                  <Label htmlFor="text-input">Phone</Label>
                </Col>
                <Col xs="12" md="3">
                  <p className="form-control-static">{userModel.phone}</p>
                </Col>
              </FormGroup>
              <FormGroup row align="center">
                <Col>
                  <Link to={location}>
                    {" "}
                    <Button
                      onClick={() => this.handleSubmit(userModel.id)}
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
    userModel: state.userReducer
  };
};

export default connect(mapStateToProps)(DeleteUser);
