import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";

import { connect } from "react-redux";
import { loadCustomer, selectCustomer } from "../../Redux/Actions/CustomerAction";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class CustomerTable extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(loadCustomer());
  }

  render() {
    const { customerModel } = this.props;
    let datas = [];

    if (customerModel) {
      datas = Object.keys(customerModel).map(id => customerModel[id]);
    }

    console.log(datas);

    const EditButton = filter => (
      <Link
        to={{
          pathname: "/customer/edit",
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
          pathname: "/customer/delete",
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
        Header: "Name",
        id: "Name",
        accessor: d => d.firstname + " " + d.lastname
      },
      {
        Header: "Address",
        accessor: "address"
      },
      {
        Header: "Phone",   
        accessor: "phoneNumber"
      },
      {
        Header: "Zipcode",
        accessor: "zipcode"
      }
    ];

    const getTdProps = (state, rowInfo, column, instance) => {
      return {
        onClick: e => {
          if (column.Expander) {
            this.props.dispatch(selectCustomer(rowInfo.original));
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
                  <Link to={"/customer/create"}>
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
    customerModel: state.customerReducer
  };
};

export default connect(mapStateToProps)(CustomerTable);
