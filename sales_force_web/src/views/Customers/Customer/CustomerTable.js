import React from "react";

import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { observable, action } from "mobx";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

@inject("customerStore")
@observer
class CustomerTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentWillMount() {
    this.props.customerStore.getCustomer();
  }

  handleButtonClick(e) {
    console.log("e:", e.original);
    //console.log("rowInfo: ",rowInfo);
    this.props.customerStore.setCustomer(e.original);
  }

  render() {
    const { customerStore } = this.props;
    let datas = [];
    customerStore.customerData.forEach(s => {
      datas.push({
        id: s.id,
        name: s.firstname + " " + s.lastname,
        address: s.address,
        phone: s.phoneNumber
      });
    });

    const EditButton = filter => (
      <Link
        to={{
          pathname: "/customer/edit",
          search: `?id=${filter.original.id}`,
          data: filter.original
        }}
      >
        <Button color="warning" size="sm">
          <i className="icon-list" />
        </Button>
      </Link>
    );

    const DeleteButton  = filter => (
      <Link
        to={{
          pathname: "/customer/delete",
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
        //filterMethod: (filter, row) => row[filter.id].startsWith(filter.value)
      },
      {
        expander: true,
        Expander: DeleteButton
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
    ];

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <h4>Customer</h4>
          </CardHeader>
          <CardBody>
            <div>
              <Link to={"/customer/create"}>
                <Button color="success" size="sm">
                  <i className="icon-plus" />
                </Button>
              </Link>
            </div>
            <br />
            <div>
              <ReactTable
                loading={customerStore.loading}
                data={datas}
                columns={columns}
                defaultPageSize={14}
                className="-striped -highlight"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CustomerTable;
