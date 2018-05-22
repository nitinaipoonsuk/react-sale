import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import BackButton from "../../components/Buttons/BackButton";
import JobForm from "./JobForm"

class CreateJob extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      const location = {
        pathname: "/job",
        state: { fromDashboard: true }
      };
  
      return (
        <div className="animated fadeIn">
          <Card>
            <CardHeader>
              <h4>Create Job</h4>
            </CardHeader>
            <CardBody>
              <JobForm />
            </CardBody>
            <CardFooter>
              <BackButton pathname={location} />
            </CardFooter>
          </Card>
        </div>
      );
    }
  }
  
  export default CreateJob;