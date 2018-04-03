import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactTable from "react-table";
import { Button, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import { observer, inject } from "mobx-react";
import { observable, action } from "mobx";

import "react-table/react-table.css";

@inject("driverStore")
@observer
class Driver extends Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentWillMount() {
    this.props.driverStore.getDriver();
  }

  handleButtonClick(e) {
    console.log("e:", e.original);
    //console.log("rowInfo: ",rowInfo);
    this.props.driverStore.setDriver(e.original);
  }

  render() {
    const { driverStore } = this.props;
    let datas = [];
    driverStore.driverData.forEach(d => {
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
    });

    const EditButton = filter => (
      <Link
        to={{
          pathname: "/driver/edit",
          search: `?id=${filter.original.id}`,
          data: filter.original
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
          search: `?id=${filter.original.id}`,
          data: filter.original
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
        accessor: "vehicledrivertype"
      },
      {
        Header: "No",
        accessor: "no"
      },
      {
        Header: "Expireddate",
        accessor: "expireddate"
      },
      {
        Header: "Subscribe",
        accessor: "subscribe"
      },
      {
        Header: "Remark",
        accessor: "remark"
      }
    ];

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>Driver list</CardHeader>
              <CardBody>
                <Link to={"/driver/create"}>
                  <Button color="success" size="sm">
                    <i className="icon-plus" />
                  </Button>
                </Link>
                <ReactTable
                  data={datas}
                  columns={columns}
                  defaultPageSize={14}
                  className="-striped -highlight"
                  noDataText="Oh Noes!"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Driver;
