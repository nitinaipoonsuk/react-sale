import React, { Component } from "react";

import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { observable, action } from "mobx";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

@inject("customerStore")
@observer
class User extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return <div />;
  }
}
export default User;
