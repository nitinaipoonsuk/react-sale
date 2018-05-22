import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import { connect } from "react-redux";
import { loadJob, selectJob } from "../../Redux/Actions/JobAction";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Job extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(loadJob());
  }

  render() {
    const { jobModel } = this.props;
    let datas = [];

    if (jobModel) {
      datas = Object.keys(jobModel).map(id => jobModel[id]);
    }

    console.log(datas);

    const EditButton = filter => (
      <Link
        to={{
          pathname: "/job/edit",
          search: `?id=${filter.original.id}`
        }}
      >
        <Button onClick={getTdProps} color="warning" size="sm">
          <i className="icon-list" />
        </Button>
      </Link>
    );

    const DeleteButton = filter => (
      <Link
        to={{
          pathname: "/job/delete",
          search: `?id=${filter.original.id}`
        }}
      >
        <Button onClick={getTdProps} color="danger" size="sm">
          <i className="icon-trash" />
        </Button>
      </Link>
    );

    const columns = [
      {
        expander: true,
        Expander: EditButton
      },
      {
        expander: true,
        Expander: DeleteButton
      },
      {
        Header: "JobCode",
        id: "JobCode",
        accessor: d => d.jobCode
      },
      {
        Header: "JobName",
        id: "JobName",
        accessor: d => d.jobName
      },
      {
        Header: "License",
        id: "License",
        accessor: d => d.license
      },
      {
        Header: "SourceStation",
        id: "SourceStation",
        accessor: d => d.sourceStationName
      },
      {
        Header: "SestStation",
        id: "SestStation",
        accessor: d => d.destStationName
      },
      {
        Header: "SourceDate",
        id: "SourceDate",
        accessor: d => d.sourceDate
      },
      {
        Header: "DestDate",
        id: "DestDate",
        accessor: d => d.destDate
      },
      {
        Header: "Customer",
        id: "Customer",
        accessor: d => d.customerName
      },
      {
        Header: "Driver",
        id: "Driver",
        accessor: d => d.driverName
      }
    ];

    const getTdProps = (state, rowInfo, column, instance) => {
      return {
        onClick: e => {
          if (column.Expander) {
            this.props.dispatch(selectJob(rowInfo.original));
          } else {
            return;
          }
        }
      };
    };

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader> Customer </CardHeader>
              <CardBody>
                <div>
                  <Link to={"/job/create"}>
                    <Button color="success" size="sm">
                      <i className="icon-plus" />
                    </Button>
                  </Link>
                </div>
                <br />
                <div>
                  <ReactTable
                    data={datas}
                    noDataText="No Database"
                    columns={columns}
                    defaultPageSize={14}
                    className="-striped -highlight"
                    getTdProps={getTdProps}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobModel: state.jobReducer
  };
};

export default connect(mapStateToProps)(Job);
