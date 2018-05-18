import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { connect } from "react-redux";

import * as moment from 'moment/moment'

import { loadDriver, selectDriver } from "../../Redux/Actions/DriverAction";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Driver extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(loadDriver());
  }

  render() {
    const { driverModel } = this.props;
    let datas = [];

    if (driverModel) {
      datas = Object.keys(driverModel).map(id => driverModel[id]);
    }

    /*driverStore.driverData.forEach(d => {
      datas.push({
        id: d.id,
        firstname: d.firstname,
        lastname: d.lastname,
        address: d.address,
        tel: d.tel,
        vehicledrivertype: d.vehicleDriverTypeName,
        no: d.no,
        expireddate: d.expiredDate,
        subscribe: d.subscribeName,
        remark: d.remark
      });
    });*/

    const EditButton = filter => (
      <Link
        to={{
          pathname: "/driver/edit",
          search: `?id=${filter.original.id}`
        }}
      >
        <Button color="warning" size="sm">
          <i className="icon-list" />
        </Button>
      </Link>
    );

    const DeleteButton = filter => (
      <Link
        to={{
          pathname: "/driver/delete",
          search: `?id=${filter.original.id}`
        }}
      >
        <Button color="danger" size="sm">
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
        Header: "Firstname",
        accessor: "firstname"
      },
      {
        Header: "Lastname",
        accessor: "lastname"
      },
      {
        Header: "Address",
        accessor: "address"
      },
      {
        Header: "Tel",
        accessor: "tel"
      },
      {
        Header: "VehicleDriverType",
        id:"VehicleDriverType",
        accessor: d => d.vehicleDriverTypeName
      },
      {
        Header: "No",
        accessor: "no"
      },
      {
        Header: "ExpiredDate",
        id:"ExpiredDate",
        accessor: (d) =>{
          return moment.utc(d.expiredDate).format('DD/MM/YYYY HH:mm')
        }
      },
      {
        Header: "Subscribe",
        id:"Subscribe",
        accessor: d => d.subscribeName
      },
      {
        Header: "Remark",
        accessor: "remark"
      }
    ];

    const getTdProps = (state, rowInfo, column, instance) => {
      return {
        onClick: e => {
          if (column.Expander) {
            this.props.dispatch(selectDriver(rowInfo.original));
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
              <CardHeader>Driver</CardHeader>
              <CardBody>
                <Link to={"/driver/create"}>
                  <Button color="success" size="sm">
                    <i className="icon-plus" />
                  </Button>
                </Link>
                <ReactTable
                  data={datas}
                  noDataText="No Database"
                  columns={columns}
                  defaultPageSize={14}
                  className="-striped -highlight"
                  getTdProps={getTdProps}
                />
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
    driverModel: state.driverReducer
  };
};

export default connect(mapStateToProps)(Driver);
