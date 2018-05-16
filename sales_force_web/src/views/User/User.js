import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import { connect } from "react-redux";

import { loadUser, selectUser } from "../../Redux/Actions/UserAction";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class User extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(loadUser());
  }

  render() {
    const { userModel } = this.props;
    let datas = [];

    if (userModel) {
      datas = Object.keys(userModel).map(id => userModel[id]);
      //console.log(datas);
    }

    const EditButton = filter => (
      <Link
        to={{
          pathname: "/user/edit",
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
          pathname: "/user/delete",
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
        Header: "UserName",
        accessor: "username"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Phone",
        accessor: "phone"
      }
    ];

    const getTdProps = (state, rowInfo, column, instance) => {     
      return {
        onClick: e => {          
          if (column.Expander) {            
            this.props.dispatch(selectUser(rowInfo.original));
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
              <CardHeader>User</CardHeader>
              <CardBody>
                <Link to={"/user/create"}>
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
    userModel: state.userReducer
  };
};

export default connect(mapStateToProps)(User);
