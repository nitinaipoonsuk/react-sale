import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import { connect } from "react-redux";

import { loadCustomer } from "../../../Redux/Actions/CustomerAction";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import { From } from "../Form/Form";

class CustomerTable extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(loadCustomer());
  }

  render() {
    const { customerModel } = this.props;
    console.log(customerModel);
    let datas = [];
    let mappingModel = [];
    if (customerModel) {
      datas = Object.keys(customerModel).map(id => customerModel[id]);
      console.log("in If : ",datas);
    }

    datas.forEach(s => {
      console.log(s);

      mappingModel.push({
        id: s.id,
        name: s.firstname + " " + s.lastname,
        address: s.address,
        phone: s.phoneNumber
      });
    });

    console.log(mappingModel);

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

    const DeleteButton = filter => (
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
          <CardHeader> Customer </CardHeader>
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
                data={mappingModel}
                noDataText="No Database"
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

const mapStateToProps = state => {
  return {
    customerModel: state.customerReducer
  };
};

export default connect(mapStateToProps)(CustomerTable);
