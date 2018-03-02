import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';


// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export class CustomerTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    name: "nitinai poonsuk1",
                    address: "22/27 หมู่ 3 ",
                    phone: "0998579757"
                },
                {
                    name: "nitinai poonsuk2",
                    address: "22/27 หมู่ 5 ",
                    phone: "0998579757"
                },
                {
                    name: "nitinai poonsuk3",
                    address: "22/27 หมู่ 7 ",
                    phone: "0998579757"
                }
            ]
        }
    }

    render() {
        const { data } = this.state

        const EditButton = <Link to={'/customer/create'} ><Button color="warning" size="sm"><i className="icon-list"></i></Button></Link>

        const DeleteButton = <Button color="danger" size="sm"><i className="icon-trash"></i></Button>

        const columns = [
            {
                expander: true,
                Expander: () => EditButton
            },
            {
                expander: true,
                Expander: () => DeleteButton
            },
            {
                Header: "Name",
                accessor: "name"
            },
            {
                Header: "Address",
                accessor: "address"
            },
            {
                Header: "Phone",
                accessor: "phone"
            }
        ]
        return (
            <div className="animated fadeIn">
                <Card>
                    <CardHeader>
                        <h4>Customer</h4>
                    </CardHeader>
                    <CardBody>
                        <div>
                            <Link to={'/customer/create'} ><Button color="success" size="sm"><i className="icon-plus"></i></Button></Link>
                        </div>
                        <br />
                        <div>
                            <ReactTable
                                data={data}
                                columns={columns}
                                defaultPageSize={16}
                                className="-striped -highlight"
                            />
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CustomerTable
