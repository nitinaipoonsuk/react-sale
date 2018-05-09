import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import { observer, inject } from "mobx-react";
import { observable, action } from "mobx";

class Job extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Job List</h1>
      </div>
    );
  }
}

export default Job;
