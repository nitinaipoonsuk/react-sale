import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table'
import {Button,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody
} from "reactstrap";

import 'react-table/react-table.css'

class Driver extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [{
                firstname: "A",
                lastname: "AA",
                address: "Bangkok",
                tel: "0000000000",
                vehicledrivertype: "PrivateCar",
                no: "000",
                expireddate: "28/2/2018",
                subscribe: "OneYear",
                remark: "Test"
            }]
        }
    }

  render() {
    const { data } = this.state

    const { dataNo } = [{}]

    const EditButton = <Link to={'/driver/createdriver'} ><Button color="warning" size="sm"><i className="icon-list"></i></Button></Link>
    const DeleteButton = <Button color="danger" size="sm"><i className="icon-trash"></i></Button>

    const columns = [{
        expander: true,
        Expander: () => EditButton
      },{
        expander: true,
        Expander: () => DeleteButton
      },{
        Header: 'Firstname',
        accessor: 'firstname'
      }, {
        Header: 'Lastname',
        accessor: 'lastname',
      }, {
        Header: 'Address',
        accessor: 'address'
      }, {
        Header: 'Tel',
        accessor: 'tel'
      }, {
        Header: 'VehicleDriverType',
        accessor: 'vehicledrivertype'
      }, {
        Header: 'No',
        accessor: 'no'
      }, {
        Header: 'Expireddate',
        accessor: 'expireddate'
      }, {
        Header: 'Subscribe',
        accessor: 'subscribe'
      }, {
        Header: 'Remark',
        accessor: 'remark'
      }]

    return (
        <div className="animated fadeIn">
            <Row>
                <Col>
                    <Card>
                        <CardHeader>
                            Driver list
                        </CardHeader>
                        <CardBody>
                        <Button color="success"><i className="fa fa-plus switch switch-sm switch-text switch-info float-right mb-0"></i></Button>
                        <ReactTable
                            data={data}
                            columns={columns}
                            defaultPageSize={20}
                            className="-striped -highlight"
                            noDataText="Oh Noes!"
                        />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
  }
}

export default Driver;