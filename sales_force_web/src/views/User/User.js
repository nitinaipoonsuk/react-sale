import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import { observer, inject } from "mobx-react";
import { observable, action } from "mobx";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

@inject("userStore")
@observer
class User extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.userStore.getUser();
  }

  handleButtonClick(e) {
    console.log("e:", e.original);
    //console.log("rowInfo: ",rowInfo);
    this.props.userStore.setUser(e.original);
  }

  render() {
    const { userStore } = this.props;
    let datas = [];
    userStore.userData.forEach(u => {
      datas.push({
        id: u.id,
        username: u.username,
        phone: u.phone,
        email: u.email
      });
    });

    const EditButton = filter => (
      <Link
        to={{
          pathname: "/user/edit",
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
          pathname: "/user/delete",
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
export default User;
